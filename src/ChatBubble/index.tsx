import * as React from 'react';
import ChatBubbleProps from './interface';
import styles from './styles';

const defaultBubbleStyles = {
  userBubble: {},
  chatbubble: {},
  text: {},
};

export default class ChatBubble extends React.Component {
  props;

  constructor(props: ChatBubbleProps) {
    super(props);
  }

  public render() {
    const { bubblesCentered } = this.props;
    let { bubbleStyles } = this.props;
    bubbleStyles = bubbleStyles || defaultBubbleStyles;
    const { userBubble, chatbubble, text } = bubbleStyles;

    // message.id 0 is reserved for blue
    const chatBubbleStyles =
      this.props.message.id === 0
        ? {
            ...styles.chatbubble,
            ...bubblesCentered ? {} : styles.chatbubbleOrientationNormal,
            ...userBubble,
          }
        : {
            ...styles.chatbubble,
            ...styles.recipientChatbubble,
            ...bubblesCentered ? {} : styles.recipientChatbubbleOrientationNormal,
            ...chatbubble,
          };

    const bubbleText =
      this.props.message.id === 0
        ? userBubble.text ? userBubble.text : text
        : chatbubble.text ? chatbubble.text : text
    return (
      <div
        style={{
          ...styles.chatbubbleWrapper,
        }}
      >
        <div style={chatBubbleStyles}>
          <p style={{ ...styles.p, ...bubbleText }}>{this.props.message.message}</p>
        </div>
      </div>
    );
  }
}

export { ChatBubbleProps };
