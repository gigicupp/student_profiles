import { useState } from 'react';

export default initialValue => {
  const [input, setInput] = useState(initialValue);

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  
  return [input, handleChange]
}