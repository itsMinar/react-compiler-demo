import { useState } from 'react';

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    id: i,
    isMagical: i === 29_000_000,
  };
});

export default function MemoComp() {
  const [count, setCount] = useState(0);
  const [numbers] = useState(nums);

  //   const magical = useMemo(() => numbers.find((number) => number.isMagical), []);
  const magical = numbers.find((number) => number.isMagical);

  const handleIncrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>useMemo</h1>
      <h2>Magical Number is: {magical.id}</h2>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrementCount}>Increment</button>
    </div>
  );
}
