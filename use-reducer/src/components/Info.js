import React from 'react';

const Info = ({name, age, color, onName, onIncrease, onDecrease, onColor}) => {

    return(
        <>
            <input placeholder="이름" onChange={onName}/>
            <br/>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <br/>
            <input placeholder='색상' onChange={onColor}/>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
            <p>좋아하는 색상: {color}</p>
        </>
    )
}

export default Info