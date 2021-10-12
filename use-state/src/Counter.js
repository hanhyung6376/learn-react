import React, { useState } from 'react';

const Counter = () => {
    const [state, setState] = useState(0) // 초기 상태 값을 0으로 설정

    // 증가
    const onIncrease = () => {
        setState(state + 1)
    }

    // 감소
    const onDecrease = () => {
        setState(state - 1)
    }

    return (
        <>
            <p>{state}</p>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default Counter;