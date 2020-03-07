import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  addCar, updateValueToStore } from '../ducks/carsReducer'

function Cars () {
    const currentCar = useSelector(state => state.name)

    const dispatch = useDispatch();
    const handleOnChange =(e)=>{

        
        dispatch(updateValueToStore(e.target.value))
    }

    const handleOnClick=()=>{
        dispatch(addCar())
    }

   

    return (
        <>
            <input type="text" name ="name" onChange={handleOnChange} />
            <button onClick={handleOnClick}> Add car</button>
            current car is { currentCar}
            {console.log(currentCar)}
        </>
    );
}

export default Cars;