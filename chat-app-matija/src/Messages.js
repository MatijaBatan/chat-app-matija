import React from 'react';
import { useRef, useEffect } from 'react';

function Messages({ messages, currentMember }) {
  const autoScroll = useRef(null);

  //Called useEffect so when messages update, scroll behavior can trigger
  useEffect(() => {
    autoScroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  //Main function and logic for displaying messages while mapping through messages array
  function renderMessage(message) {
    const { data, member } = message;
    const myMessage = member.id === currentMember.id;
    const className = myMessage
      ? 'Messages-message currentMember'
      : 'Messages-message';
    return (
      <li className={className} key={Math.random()}>
        <span
          className='avatar'
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className='Message-content'>
          <div className='username'>{member.clientData.username}</div>
          <div className='text' ref={autoScroll}>
            {data}
          </div>
        </div>
      </li>
    );
  }

  return (
    <ul className='Messages-list'>{messages.map((m) => renderMessage(m))}</ul>
  );
}

export default Messages;
