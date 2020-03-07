
import { useSelector } from 'react-redux'
const initialState = [{name:'Audi'}, {name:'benz'}];

const carsReducer =(state=initialState, action)=>{

    switch (action.type) {
        case 'ADD':
            return initialState;

        case 'UPDATE':
             console.log(action.car)
            
           
        default:
            return initialState;
    }
}



export const updateValueToStore =(car) =>{

    return {
        
        type: "UPDATE",car
        
    };
}

export const addCar =(car) =>{

    return {
        
        type: "ADD",car
        
    };
}

export default carsReducer;
