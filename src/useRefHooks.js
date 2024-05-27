import {useReducer, useRef, useState} from "react";

function TestHook() {
    return (
        <div>
            {<UseReducer/>}
            {/*<ul>*/}
            {/*    {post.map((item) => (<li>*/}
            {/*        {item.title}*/}
            {/*    </li>))}*/}
            {/*</ul>*/}
        </div>
    )
}
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

const initState = 0;
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

const reducer = (state, action) => {
    console.log('reducer running ...')
    switch (action.type) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error("Invalid action");
    }
}

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch({ type: UP_ACTION })}>Up</button>
            <button onClick={() => dispatch({ type: DOWN_ACTION })}>Down</button>
        </div>
    )
}

export default TestHook