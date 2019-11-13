import React, { useState } from 'react';




const Exercise2 = () => {
    const greeting = 'Hello Function Component!';
    return <Headline value={greeting} />;
  }


  const Headline = ({ value }) => {
    return <h1>{value}</h1>;
  }

  export default Exercise2;