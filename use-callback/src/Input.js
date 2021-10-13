import React, { useState, useCallback } from "react";

const Input = () => {
    const [value, setValue] = useState('')

    const onChange = useCallback(e => {
            setValue(e.target.value)
        }
    )

    return (
        <>
            <input onChange={onChange}/>
            <p>{value}</p>
        </>
    )
}

export default Input;