import React, { useEffect, useState } from "react";

/* Responsible for number counting animation */

const NumberCounter = ({ initialValue, endValue, targetTimer }) => {
  const [count, setCount] = useState(initialValue);

  const duration = 1.5;
  const increment = Math.floor((endValue - initialValue) / (duration * 1000));
  /* Responsible for ending all counting animation at the same time 
    regardless of its values */

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endValue) {
        setCount(count + increment);
      } else {
        clearInterval(interval);
      }
    }, duration);
    return () => clearInterval(interval);
  }, [count, endValue]);

  return <span>{count.toLocaleString()}</span>;
};

export default NumberCounter;
