//screenDimensions custom hook
import React, { useEffect, useState } from 'react'
function useDimensions() {
    const [dimensions, setDimensions] = useState({ x: 0, y: 0 })
    function eventHandler() {
        setDimensions({ x: window.innerWidth, y: window.innerHeight })
    }

    useEffect(() => {
        window.addEventListener("resize", eventHandler)
        return ()=>{
            window.removeEventListener("resize",eventHandler)
        }
    }, [])
    return dimensions;
}
const App = () => {
    const dimensions = useDimensions();
    return (
        <div>
            the width is {dimensions.x} and height is {dimensions.y}
        </div>
    )
}

export default App
