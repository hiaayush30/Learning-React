//isOnline custom hook
import React, { useEffect, useState } from 'react'
function useOnline() {
    const [online, setOnline] = useState(window.navigator.onLine);
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnline(true); 
        })
        window.addEventListener("offline", () => {
            setOnline(false);
        })
    }, [])
    return online;
}
const App = () => {
    const isOnline = useOnline();
    if (isOnline) {
        return (
            <div>You are online!</div>
        )
    }
    else {
        return (
            <div>You are offline!</div>
        )
    }
}

export default App
