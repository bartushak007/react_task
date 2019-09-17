import { useState } from 'react';

const useToggle = (init = false) => {
  const [toggle, setToggle] = useState(init);

  const turnToggle = () => setToggle(!toggle);

  return {
    toggle,
    turnToggle
  };
};

export default useToggle;
