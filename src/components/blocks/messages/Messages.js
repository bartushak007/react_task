import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../shared/icon';
import './style/messages.scss';

const Messages = ({ messagesList, newMessages, draftMessages }) => {
  const renderMessages = ({ fullName, date, message, ago }, i) => {
    return <MessageItem key={i} {...{ fullName, date, message, ago }} />;
  };

  return (
    <div className="messages">
      <div className="messages__new wrap-content">
        <h2 className="messages__title title">
          <Icon icon="envelope" /> New Messages
        </h2>
        You have {newMessages ? `${newMessages}` : 0} new messages and{' '}
        {draftMessages ? `${draftMessages}` : 0} waiting in draft folder.
      </div>
      <div className="wrap-content">{messagesList.map(renderMessages)}</div>
    </div>
  );
};

const MessageItem = React.memo(({ fullName, date, message, ago }) => (
  <div className="messages__item">
    <div className="space-between">
      <span className="title">{fullName}</span>{' '}
      {ago && <span className={ago <= 4 ? 'highlight' : ''}>{ago}m ago</span>}
    </div>
    <div>{message}</div>
    <div>{date}</div>
  </div>
));

Messages.propTypes = {
  messagesList: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string,
      date: PropTypes.string,
      message: PropTypes.string,
      ago: PropTypes.number
    })
  ),
  newMessages: PropTypes.number,
  draftMessages: PropTypes.number
};

export default Messages;
