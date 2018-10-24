import React from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import Messages from "./components/Messages";
import Sender from "./components/Sender";
import "./style.scss";

const Conversation = props =>
  <div className="rcw-conversation-container">
    <Header
      title={props.title}
      subtitle={props.subtitle}
      toggleChat={props.toggleChat}
      showCloseButton={props.showCloseButton}
      titleAvatar={props.titleAvatar}
    />
    <Messages
      profileAvatar={props.profileAvatar}
    />
    <Sender
      sendMessage={props.sendMessage}
      placeholder={props.senderPlaceHolder}
      disabledInput={props.disabledInput}
      autofocus={props.autofocus}
    />

    <div className={"rcw-copyrights"}>
      <div><a href={"http://www.exceed.ai"} class={"link"}>
        <span className={"title"}>Chat by
          <div className={"logo"}><img src={"https://s3.us-east-2.amazonaws.com/sdr.exceed.ai/logo_x_hires.png"}/></div>
          <div className="name">Exceed</div>
        </span>
      </a></div>
    </div>
  </div>;

Conversation.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool
};

export default Conversation;
