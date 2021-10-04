import { useRef } from 'react';
import { CircularProgress } from '@material-ui/core';
import usePrevious from '../hooks/usePrevious';

export default function ChatMessages({
  messages,
  user,
  roomID,
  audioID,
  setAudioID,
}) {
  const previousMessages = usePrevious(messages);
  const inputRef = useRef(null);
  const onSimulatedClick = () => {
    const sound = new Audio('../../popup-sound.wav');
    sound.autoplay = true;
    sound.play();
  };

  const Hidden = () => {
    return <div ref={inputRef} onClick={onSimulatedClick}></div>;
  };

  if (previousMessages?.length < messages?.length) {
    inputRef.current.click();
  }

  if (messages) {
    return messages.map((message) => {
      const isSender = message.uid === user.uid;

      return (
        <>
          <Hidden />
          <div
            key={message.id}
            className={`chat__message ${isSender ? 'chat__sender' : ''}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.imageUrl === 'uploading' ? (
              <div className="image-container">
                <div className="image__container--loader">
                  <CircularProgress style={{ width: 40, height: 40 }} />
                </div>
              </div>
            ) : message.imageUrl ? (
              <div className="image-container">
                <img src={message.imageUrl} alt={message.name} />
              </div>
            ) : null}
            <span className="chat__message--message">{message.message}</span>
            <span className="chat__timestamp">{message.time}</span>
          </div>
        </>
      );
    });
  } else return null;
}
