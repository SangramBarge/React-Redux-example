import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  addCar, updateValueToStore } from '../ducks/cars'

function Cars () {
    
    const [inputval, setVal] = useState('');
    const dispatch = useDispatch();
   
    const handleOnChange =(e)=>{
        setVal(e.target.value);
      
    }

    const handleOnClick=()=>{
        dispatch(addCar(inputval))
    }

    const cars = useSelector(state => state.name)
   

    return (
        <>
            <input type="text" name ="name" value={inputval} onChange={handleOnChange} />
            <button onClick={handleOnClick}> Add car</button>
            </>
    );
}

export default Cars;