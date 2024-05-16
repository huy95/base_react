import {useRef, useState} from "react";


function UseRefHook() {
    const [count, setCount] = useState(60);
    let timerID = useRef(0)

    const handleStart = () => {
        console.log("start-render")
         timerID.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000)
    }

    const handleStop = () => {
        console.log("stop-render")
        console.log(timerID);
        clearInterval(timerID.current)
    }
    console.log("reload-render")
    return (
        <div>
            <p>{count}</p>
            <button onClick={ handleStart}>start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRefHook