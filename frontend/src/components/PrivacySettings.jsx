import React, { useState } from "react";
import "./componentStyles/SettingsComponents.css";

function PrivacySettings() {
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [dataSharing, setDataSharing] = useState(true);

  return (
    <div className="settings-card">
      <h2>Privacy Settings</h2>
      <div className="form-group">
        <label htmlFor="profile-visibility">Profile Visibility</label>
        <select
          id="profile-visibility"
          value={profileVisibility}
          onChange={(e) => setProfileVisibility(e.target.value)}
        >
          <option value="public">Public</option>
          <option value="friends">Friends Only</option>
          <option value="private">Private</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="data-sharing">Data Sharing for Personalization</label>
        <button
          id="data-sharing"
          className={`btn-toggle ${dataSharing ? "active" : ""}`}
          onClick={() => setDataSharing(!dataSharing)}
          aria-pressed={dataSharing}
        >
          {dataSharing ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
}

export default PrivacySettings;
