import React, { useState } from 'react';




const Exercise2 = () => {
    const [greeting, setGreeting] = useState(
        'Hello function Component!'
    );

    const handleChange = event => setGreeting(event.target.value);
    return (
        <Headline headline={greeting} onChangeHeadline={handleChange} />
    );
}


const Headline = ({ headline, onChangeHeadline }) => {
    return (
        <div>
            <h1>{headline}</h1>

            <input
                type="text"
                value={headline}
                onChange={onChangeHeadline}
            />
        </div>
    );
};

export default Exercise2;