import { useEffect, useState } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("count is:", count);
  }, [count]);

  return {
    count,
    incrementCount,
  };
}

export default useCounter;
