import React, {useReducer} from "react";
import Info from "../components/Info";

const initialState = {
    name: '',
    age: 0,
    color: '',
}

function reducer(state, action) {
    switch (action.type) {
        case 'NAME':
            return {...state, name: action.value};
        case 'INCREASE':
            return {...state, age: state.age + 1};
        case 'DECREASE':
            return {...state, age: state.age - 1};
        case 'COLOR':
            return {...state, color: action.value}
    }
}

const Input = () => {
    const [state, dispatch] = useReducer(reducer,  initialState);

    const {name, age, color} = state;

    const onName = e => {
        dispatch({type: 'NAME', value: e.target.value})
    }

    const onIncrease = () => {
        dispatch({type: 'INCREASE'})
    }

    const onDecrease = () => {
        dispatch({type: 'DECREASE'})
    }

    const onColor = e => {
        dispatch({type: 'COLOR', value: e.target.value})
    }

    return (
        <Info
            name={name}
            age={age}
            color={color}
            onName={onName}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onColor={onColor}/>
    )
}

export default Input;