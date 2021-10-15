import React, { useState, useEffect} from "react";

const Example = () => {
    const [state, setState] = useState(0);

    const onChange = () => {
        setState(state + 1)
    }

    useEffect(() => {
        console.log('+1')
    })

    return (
        <>
            <p>{state}</p>
            <button onClick={onChange}>+1</button>
        </>
    )
}

export default Example