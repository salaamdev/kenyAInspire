import React, { useState } from "react";
import "./componentStyles/SettingsComponents.css";

function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <div className="settings-card">
      <h2>Notification Settings</h2>
      <div className="form-group">
        <label htmlFor="email-notifications">Email Notifications</label>
        <button
          id="email-notifications"
          className={`btn-toggle ${emailNotifications ? "active" : ""}`}
          onClick={() => setEmailNotifications(!emailNotifications)}
          aria-pressed={emailNotifications}
        >
          {emailNotifications ? "On" : "Off"}
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="push-notifications">Push Notifications</label>
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
