require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const validation = function (req, res, next) {
    console.log('in validation')
    console.log(req.cookies)
    const token = req.cookies.token;
    if (!token) {
        return res.status(400).json({
            err: 'no token found!'
        })
    } else {
        const decoded = jwt.verify(token, 'secret_key');
        if (decoded) {
            console.log(decoded);
            req.user = decoded;
            next();
        }
        else {
            res.status(400).json({
                err: 'Invalid token!'
            })
        }
    }
}

app.post('/createUser', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    try {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hashed) => {
                const user = await User.create({
                    username, password: hashed, email
                });
                const token = jwt.sign({ email, userid: user._id }, 'secret_key');
                console.log(token);
                res.cookie('token', token, { path: '/', secure: false, });
                res.status(200).json({ msg: 'success' });
            })
        })
    } catch (e) {
        console.error('Error:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
})

app.get('/validateUser', validation,async (req, res) => {
    const user=await User.findOne({_id:req.user.userid});
    return res.status(400).json({
        msg: 'success',
        username:user.username,
        email:user.email,
    })
})

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ username });
    if (!user) {
        res.status(400).json({
            err: "incorrect username or password"
        })
    }
    else {
        bcrypt.compare(password, user.password, (err, response) => {
            if (response) {
                const token = jwt.sign({ email: user.email, userid: user._id }, 'secret_key');
                res.cookie('token', token, { path: '/', secure: false, });
                res.status(200).json({
                    msg: 'success'
                })
            } else {
                res.status(400).json({
                    err: "incorrect username or password"
                })
            }
        })
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '');
    res.json({
        msg: 'success',
    });
})

app.listen(process.env.PORT, () => {
    console.log('server running on ' + process.env.PORT);
})