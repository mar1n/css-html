import React, { useState} from 'react';

export default function Exercise({user}) {

    const [ count, setCount] = useState(0);
    const [ message, setMessage ] = useState('Szymon');
    const [visible, setVisible] = useState(false);
    
    const szymon = () => {
        console.log('Hello Szymon');
    }

    const visibleOpen = () => {
        setVisible(true);
    }

    const visibleClose = () => {
        setVisible(false);
    }
    return (
        <>
            <div>
                {count}
            </div>
            <div>
                <button onClick={() => setCount(count + 1)}>Button</button>
            </div>
            <div>
                <button onClick={szymon}>Button2</button>
            </div>
            <div>
                {
                    visible === false ? 
                    <button onClick={visibleOpen}>Open</button> : 
                    <button onClick={visibleClose}>Close</button>
                }
            </div>
        </>
    );
}