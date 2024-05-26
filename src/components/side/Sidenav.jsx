import "./Sidenav.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidenav = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPropmt } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPropmt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidenav">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          className="menu"
          alt="menu icon"
        />

        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus icon" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>

            {prevPrompts.map((item, index) => (
              <div onClick={() => loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="message icon" />
                <p>{item.slice(0, 18)}....</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question icon" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history icon" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
