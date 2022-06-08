import React, { useState } from 'react'

function CounterFunction () {
    const [value, setValue] = useState<number>(0);

    
    const increase = () => {

        setValue(value + 1);
    }

    const decrease = () => {
        setValue(value - 1);
    }
    const reset = () =>{
        setValue(0);
    }
    return (
        <div className="counter">
            <p className='counter_subheader'> Basic Count Tracker</p>
            <button onClick={increase}>
               Increase number
            </button>
            <button onClick={decrease}>
                Decrease number
            </button>
            <button onClick={reset}>
                Reset
            </button>
            <p className='counter_subheader'> {value}</p>

        </div>
    );
    
}

export default CounterFunction;