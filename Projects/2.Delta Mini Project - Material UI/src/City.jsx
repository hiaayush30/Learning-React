import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const City = ({ weather }) => {
    return (
        <div>
            <img src='../images.jpeg' className='object-cover w-60 h-32 rounded-md' />
            <div className='px-10 py-3'>
                <h1 className='text-2xl text-black my-3'>{weather.name} {weather.temp < 25 ? <AcUnitIcon /> : <WbSunnyIcon />}</h1>
                <div className='flex flex-col gap-2'>
                    <div>Temperature: {weather.temp}°C</div>
                    <div>Feels Like: {weather.feels}°C</div>
                    <div>Maximum: {weather.max}°C</div>
                    <div>Minimum: {weather.min}°C</div>
                </div>
            </div>
        </div>
    )
}

export default City
