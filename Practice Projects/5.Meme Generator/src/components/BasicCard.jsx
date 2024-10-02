import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({meme}) {
  const navigate=useNavigate();
  return (
    <Card sx={{ minWidth: 275 }} className='w-80' >
      <CardContent className='bg-red-400'>
        <Typography variant="h5" component="div">
          {meme.name}
        </Typography>
        <img src={meme.url} className='h-64'></img>
      </CardContent>
      <CardActions className='bg-red-400'>
      <Button onClick={()=>{
         navigate(`/edit/?url=${meme.url}`)
      }} variant="contained">Edit</Button> 
      </CardActions>
    </Card>
  );
}