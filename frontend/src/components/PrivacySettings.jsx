import React, { useState } from "react";
import { FaGlobe, FaShareAlt } from "react-icons/fa";
import "./componentStyles/PrivacySettings.css";

function PrivacySettings() {
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [dataSharing, setDataSharing] = useState(true);

  return (
    <div className="privacy-settings">
      <div className="privacy-group">
        <label htmlFor="profile-visibility" className="privacy-label">
          <FaGlobe className="privacy-icon" /> Profile Visibility
        </label>
        <select
          id="profile-visibility"
          value={profileVisibility}
          onChange={(e) => setProfileVisibility(e.target.value)}
          className="privacy-select"
        >
          <option value="public">Public</option>
          <option value="friends">Friends Only</option>
          <option value="private">Private</option>
        </select>
      </div>
      <div className="privacy-group">
        <label htmlFor="data-sharing" className="privacy-label">
          <FaShareAlt className="privacy-icon" /> Data Sharing for
          Personalization
        </label>
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
