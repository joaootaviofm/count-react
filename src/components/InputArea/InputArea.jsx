import './InputArea.css'
import { useState } from 'react';
function InputArea(){

    const [count,setCount] = useState(0)

    function onIncreaseHandler(){
        setCount(count+1)
    }
    
    function onDecreaseHandler(){
        setCount(count-1)
    }

    return (
        <div>
            <div className="container">
                <div className="inputDiv">
                    <button onClick={onIncreaseHandler} className='operatorButton'>+</button>
                    <h1>{count}</h1>
                    <button onClick={onDecreaseHandler} className='operatorButton'>-</button>
                </div>
            </div>
        </div>
    )
}

export default InputArea;