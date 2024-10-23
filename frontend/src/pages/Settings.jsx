import React from "react";
import ProfileSettings from "../components/ProfileSettings";
import AccessibilityOptions from "../components/AccessibilityOptions";
import NotificationSettings from "../components/NotificationSettings";
import PrivacySettings from "../components/PrivacySettings";
import { FaUser, FaUniversalAccess, FaBell, FaShieldAlt } from "react-icons/fa";
import "./pageStyles/Settings.css";

function Settings() {
  return (
    <div className="settings-page">
      <h1 className="settings-title">Settings</h1>
      <div className="settings-grid">
        <div className="settings-section">
          <h2 className="settings-section-title">
            <FaUser className="settings-icon" /> Profile
          </h2>
          <ProfileSettings />
        </div>
        <div className="settings-section">
          <h2 className="settings-section-title">
            <FaUniversalAccess className="settings-icon" /> Accessibility
          </h2>
          <AccessibilityOptions />
        </div>
        <div className="settings-section">
          <h2 className="settings-section-title">
            <FaBell className="settings-icon" /> Notifications
          </h2>
          <NotificationSettings />
        </div>
        <div className="settings-section">
          <h2 className="settings-section-title">
            <FaShieldAlt className="settings-icon" /> Privacy
          </h2>
          <PrivacySettings />
        </div>
      </div>
    </div>
  );
}

export default Settings;
