import React, { useContext } from "react";
import { UserPreferencesContext } from "../contexts/UserPreferencesContext";
import "./componentStyles/SettingsComponents.css";

function AccessibilityOptions() {
  const {
    highContrast,
    toggleHighContrast,
    changeFontSize,
    fontSize,
    reduceMotion,
    toggleReduceMotion,
    enableScreenReader,
    toggleScreenReader,
  } = useContext(UserPreferencesContext);

  return (
    <div className="settings-card">
      <h2>Accessibility Options</h2>
      <div className="form-group">
        <label>Font Size</label>
        <div className="button-group">
          <button
            className={`btn-secondary ${fontSize === "small" ? "active" : ""}`}
            onClick={() => changeFontSize("small")}
          >
            Small
          </button>
          <button
            className={`btn-secondary ${fontSize === "medium" ? "active" : ""}`}
            onClick={() => changeFontSize("medium")}
          >
            Medium
          </button>
          <button
            className={`btn-secondary ${fontSize === "large" ? "active" : ""}`}
            onClick={() => changeFontSize("large")}
          >
            Large
          </button>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="high-contrast">High Contrast</label>
        <button
          id="high-contrast"
          className={`btn-toggle ${highContrast ? "active" : ""}`}
          onClick={toggleHighContrast}
          aria-pressed={highContrast}
        >
          {highContrast ? "On" : "Off"}
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="reduce-motion">Reduce Motion</label>
        <button
          id="reduce-motion"
          className={`btn-toggle ${reduceMotion ? "active" : ""}`}
          onClick={toggleReduceMotion}
          aria-pressed={reduceMotion}
        >
          {reduceMotion ? "On" : "Off"}
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="screen-reader">Screen Reader Optimization</label>
        <button
          id="screen-reader"
          className={`btn-toggle ${enableScreenReader ? "active" : ""}`}
          onClick={toggleScreenReader}
          aria-pressed={enableScreenReader}
        >
          {enableScreenReader ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
}

export default AccessibilityOptions;
