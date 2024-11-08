import React, { useState } from "react";
import { FaEnvelope, FaBell } from "react-icons/fa";
import "./componentStyles/NotificationSettings.css";

function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <div className="notification-settings">
      <div className="notification-group">
        <label htmlFor="email-notifications" className="notification-label">
          <FaEnvelope className="notification-icon" /> Email Notifications
        </label>
        <button
          id="email-notifications"
          className={`btn-toggle ${emailNotifications ? "active" : ""}`}
          onClick={() => setEmailNotifications(!emailNotifications)}
          aria-pressed={emailNotifications}
        >
          {emailNotifications ? "On" : "Off"}
        </button>
      </div>
      <div className="notification-group">
        <label htmlFor="push-notifications" className="notification-label">
          <FaBell className="notification-icon" /> Push Notifications
        </label>
        <button
          id="push-notifications"
          className={`btn-toggle ${pushNotifications ? "active" : ""}`}
          onClick={() => setPushNotifications(!pushNotifications)}
          aria-pressed={pushNotifications}
        >
          {pushNotifications ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
}

export default NotificationSettings;
