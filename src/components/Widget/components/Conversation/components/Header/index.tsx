const close = require('../../../../../../../assets/clear-button.svg') as string;

import './style.scss';

type Props = {
  title: string;
  subtitle: string;
  toggleChat: () => void;
  showCloseButton: boolean;
  titleAvatar?: string;
  customLauncherMode?: boolean;
}

function Header({ title, subtitle, toggleChat, showCloseButton, titleAvatar, customLauncherMode }: Props) {
  return (
    <div className="rcw-header">
      {showCloseButton &&
        <button className={customLauncherMode ? "rcw-close-button_custom" : "rcw-close-button"} onClick={toggleChat}>
          <img src={close} className={customLauncherMode ? "rcw-close_custom" : "rcw-close"} alt="close" />
        </button>
      }
      <h4 className="rcw-title">
        {titleAvatar && <img src={titleAvatar} className="avatar" alt="profile" />}
        {title}
      </h4>
      <span>{subtitle}</span>
    </div>
  );
}

export default Header;
