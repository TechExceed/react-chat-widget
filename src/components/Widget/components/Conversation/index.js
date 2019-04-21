import React from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import Messages from "./components/Messages";
import Sender from "./components/Sender";
import QuickButtons from "./components/QuickButtons";
import "./style.scss";

const Conversation = props =>
  <div className="rcw-conversation-container">
    <Header
      title={props.title}
      subtitle={props.subtitle}
      toggleChat={props.toggleChat}
      showCloseButton={props.showCloseButton}
      customLauncherMode={props.customLauncherMode}
      titleAvatar={props.titleAvatar}
    />
    <Messages
      profileAvatar={props.profileAvatar}
    />
    <QuickButtons onQuickButtonClicked={props.onQuickButtonClicked}/>
    <Sender
      sendMessage={props.sendMessage}
      placeholder={props.senderPlaceHolder}
      disabledInput={props.disabledInput}
      autofocus={props.autofocus}
    />

    <a href={"http://www.exceed.ai"} className={"rcw-copyrights-link"}>
      <div className={"rcw-copyrights"}>
        {/*<div className="name">Exceed</div>*/}
        <div className={"rcw-copyrights-logo"}><img src={"https://s3.us-east-2.amazonaws.com/sdr.exceed.ai/logo_x_hires.png"}/></div>
        <div className={"rcw-copyrights-title"}>Chat by Exceed</div>
      </div>
    </a>

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
