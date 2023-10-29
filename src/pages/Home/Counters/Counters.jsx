import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // Calculate the increment value

    const interval = setInterval(() => {
      if (start < end) {
        start += increment;
        setCount(Math.min(Math.ceil(start), end));
      } else {
        clearInterval(interval);
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <div className="counter">{count}</div>;
};

export default Counter;
