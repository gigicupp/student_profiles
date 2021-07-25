import { useState } from 'react';

export default initialValue => {
  const [isToggle, setIsToggle] = useState(initialValue);
  
  const toggle = () => {
    setIsToggle(!isToggle);
  }

  return [isToggle, toggle]
}