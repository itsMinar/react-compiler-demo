import { useState } from 'react';
import Button from './Button';
import ShowCount from './ShowCount';
import Title from './Title';

export default function CallbackComp() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const incrementByFive = () => {
    setCount2((prevCount) => prevCount + 5);
  };

  // useCallback solution
  /* const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []); */

  return (
    <div>
      <Title />
      <ShowCount title="Counter 1" count={count1} />
      <Button onPress={incrementByOne}>Increment by One</Button>
      <ShowCount title="Counter 2" count={count2} />
      <Button onPress={incrementByFive}>Increment by Five</Button>
    </div>
  );
}
