import { useState } from 'react';

export default initialValue => {
  const [input, setInput] = useState(initialValue);

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const reset = () => {
    setInput('')
  }
  
  return [input, handleChange, reset]
}