import React, { useContext } from 'react';
import Countercontext from './Countercontext';

const Child = () => {
    let counterValue = useContext(Countercontext)
    console.log(counterValue)
    return(
        
        <div>
            <h2>This is the first Child </h2>
            <h3>CounterValue is :{counterValue[0]}</h3>
            <button onClick = {() =>{counterValue[1](++counterValue[0])}}>Increament</button>
            
        </div>
    )
}
export default Child;