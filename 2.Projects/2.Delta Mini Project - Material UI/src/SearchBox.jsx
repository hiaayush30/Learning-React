import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import City from './City';
import { Alert } from '@mui/material';

const SearchBox = () => {
    const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY = ''
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({});
    const [err,setErr]=useState("");

    const getWeatherInfo = async function () {
        try{
            const response = await fetch(API_URL + `?q=${input}&limit=${1}&appid=${API_KEY}`);
        const data = await response.json();
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_KEY}&units=metric`);
        const resData = await res.json();
        setInput('');
        console.log(resData);
        if (resData && typeof resData === 'object' && Object.keys(resData).length > 0) {
            setErr('');
            setWeather({
                name: resData.name,
                temp: resData.main.temp,
                max: resData.main.temp_max,
                min: resData.main.temp_min,
                feels: resData.main.feels_like
            })
        }
        }catch(e){
            setErr(e);
        }
    }

    const handleSubmit = function (e) {
        e.preventDefault();
        console.log(input);
        getWeatherInfo();
    }
    return (
        <div className='flex justify-center h-screen items-center gap-10 p-5'>
            <div className={`transition-transform duration-250 ${Object.keys(weather).length>0 ? 'translate-x-[-30px]':'translate-x-22'}`}>
            <form onSubmit={handleSubmit} className='flex flex-col gap-10 text-center px-10 py-16  rounded-md bg-green-200 opacity-80 '>
                <h1 className='text-2xl text-black'>Weather Getter</h1>
                <TextField id="outlined-basic" label="City name" variant="outlined" value={input} required onChange={(e) => {
                    setInput(e.target.value);
                }} />
                <Button variant="contained" size='medium' type='submit' endIcon={<SendIcon />}>Get Weather</Button>
                {(err!='' && <Alert severity='error'>Could not find this location!</Alert>)}
            </form>
            </div>
            <div className={`flex flex-col gap-3 text-center rounded-md bg-blue-300 transition-opacity duration-500 ${Object.keys(weather).length > 0 ? 'opacity-80' : 'opacity-0'} `}>
                {Object.keys(weather).length > 0 && <City weather={weather}/> }
            </div>
        </div>
    )
}

export default SearchBox
