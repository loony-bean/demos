import React from 'react';
import { connect } from 'react-redux';
import { showNextMessage,
         showAllMessages,
         hideAllMessages} from '../../actions';
import { chatSelector } from '../../selectors';
import style from './style.css';

import pooh from './img/pooh.png';
import cr from './img/cr.png';
import bees from './img/bees.png';
import dad from './img/dad.png';

import slide6 from './img/06.jpg';
import slide33 from './img/33.jpg';

const pictures = {
  'Винни-Пух': pooh,
  'Кристофер Робин': cr,
  'Пчелы': bees,
  'Папа': dad,
  '6': slide6,
  '33': slide33
};

class Message extends React.Component {
  render() {
    const { sender, message, image } = this.props;
    return (
      <div className={style.message}>
        {sender ? <Picture sender={sender} /> : null}
        {message ? <Text sender={sender} message={message} /> : null}
        {image ? <Image image={image} /> : null}
      </div>
    );
  }
}

class Image extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <div className={style.attachment}>
        <img className={style.image} src={pictures[image]} />
      </div>
    );
  }
}

class Picture extends React.Component {
  render() {
    const { sender } = this.props;
    return (
      <div className={style.picture}>
        {sender in pictures
         ? <img className={style.avatar} src={pictures[sender]} />
         : null}
        
      </div>
    );
  }
}

class Text extends React.Component {
  render() {
    const { sender, message } = this.props;
    return (
      <div className={style.text}>
        <div className={style.name}>{sender}</div>
        <div>{message}</div>
      </div>
    );
  }
}

class Conversation extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, true);
  }

  render() {
    return (
      <div
        onClick={this.onClick}
        className={style.conversation}>
        <div className={style.title}>{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }

  onClick = (event) => {
    event.preventDefault();
    this.props.onClick();
  }

  onKeyDown = (event) => {
    if(event.keyCode === 32) {
      this.props.onKeySpace();
    }

    if(event.keyCode === 27) {
      this.props.onKeyEscape();
    }

    if(event.keyCode === 13) {
      this.props.onKeyEnter();
    }
  }
}

class Chat extends React.Component {
  render() {
    const { title, messages } = this.props;
    return (
      <Conversation
        title={title}
        onClick={this.props.onShowNext}
        onKeySpace={this.props.onShowNext}
        onKeyEscape={this.props.onHideAll}
        onKeyEnter={this.props.onShowAll}
        >
        {messages.map(
          (row, i) =>
            <Message
              key={i}
              sender={row.sender}
              message={row.message}
              image={row.image}
            />
        )}
      </Conversation>
    );
  }
}

const mapActions = dispatch => ({
  onShowNext() {
    dispatch(showNextMessage());
  },
  onShowAll() {
    dispatch(showAllMessages());
  },
  onHideAll() {
    dispatch(hideAllMessages());
  }
});

export default connect(chatSelector, mapActions)(Chat);
