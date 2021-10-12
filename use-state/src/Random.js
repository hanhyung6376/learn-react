import React, { useState } from "react";

const Random = () => {
    const [state, setState] = useState(0) // 초기 상태를 0으로 설정

    // 랜덤 값 반환
    const randomValue = () => {
        return Math.floor(Math.random() * (10000));
    }

    const onClick = () => {
        setState(randomValue())
    }

    return (
        <>
            <p>{state}</p>
            <button onClick={onClick}>Change</button>
        </>
    )
}

export default Random