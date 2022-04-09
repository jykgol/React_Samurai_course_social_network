import React from 'react';
import { useState } from 'react';

function Input() {
  const [value,setValue] = useState('Введите текст')

  return (
    <div>
      <input 
      type="text"
      value={value}
      onChange={event => setValue(event.target.value)}
      />
    </div>
  );
}

export default Input;
