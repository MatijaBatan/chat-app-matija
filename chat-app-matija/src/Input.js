import React, { useState } from 'react';

function Input(props) {
  const [text, setText] = useState('');

  //Setting state from input
  function onChange(e) {
    setText(e.target.value);
  }
  //Submit function for input value
  function onSubmit(e) {
    e.preventDefault();
    if (text.trim() !== '') {
    setText('');
    props.onSendMessage(text);
    }
  }

  return (
    <div className='Input'>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type='text'
          placeholder='Enter your message'
          autoFocus={true}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Input;
