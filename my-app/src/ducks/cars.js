
import { useSelector } from 'react-redux'
import { UPDATE_ACTION} from './constants'
const initialState = [{name:'Audi'}, {name:'benz'}];

//Reducer
const cars =(state=initialState, action)=>{

    switch (action.type) {
        case 'ADD':
            return Object.assign([],state.concat({name:action.car}))

        case 'UPDATE':
             return Object.assign([],state.concat({name:action.car}))

        default:
            return initialState;
    }
}


//Actions 
export const UPDATE = "UPDATE";
export const ADD = "ADD";

//Action creators
export const updateValueToStore =(car) =>{

    return {
        
        type: UPDATE,car
        
    };
}

export const addCar =(car) =>{

    return {
        
        type: "ADD",car
        
    };
}

export default cars;
