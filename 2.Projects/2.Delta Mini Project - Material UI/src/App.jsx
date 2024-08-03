import React from 'react'
import SearchBox from './SearchBox'


const App = () => {
    const backgroundStyle = {
        backgroundImage: `url("../wp2921027-monsoon-wallpaper-hd.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 1.0 // Adjust the opacity value for transparency
      };
    return (
        <div style={backgroundStyle}>
            <SearchBox />
        </div>
    )
}

export default App
