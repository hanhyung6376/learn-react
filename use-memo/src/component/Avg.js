import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
    console.log('평균 값 계산 중')
    if (numbers.length === 0 ) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Avg = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChagne = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            <input value={number} onChange={onChagne}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => {
                    <li key={index}>{value}</li>
                })}
            </ul>
            <div>
                <p>평균: {avg}</p>
            </div>
        </div>
    )
}

export default Avg;