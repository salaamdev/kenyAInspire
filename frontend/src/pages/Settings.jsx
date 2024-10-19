import React from "react";
import ProfileSettings from "../components/ProfileSettings";
import AccessibilityOptions from "../components/AccessibilityOptions";
import NotificationSettings from "../components/NotificationSettings";
import PrivacySettings from "../components/PrivacySettings";
import "./pageStyles/Settings.css";

function Settings() {
  return (
    <div className="settings-page">
      <h1 className="settings-title">Settings</h1>
      <div className="settings-grid">
        <ProfileSettings />
        <AccessibilityOptions />
        <NotificationSettings />
        <PrivacySettings />
      </div>
    </div>
  );
}

export default Settings;
