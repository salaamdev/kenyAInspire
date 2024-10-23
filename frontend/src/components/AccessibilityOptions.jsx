import React, { useContext } from "react";
import { UserPreferencesContext } from "../contexts/UserPreferencesContext";
import { FaFont, FaAdjust, FaLowVision, FaVolumeUp } from "react-icons/fa";
import "./componentStyles/AccessibilityOptions.css";

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
    <div className="accessibility-options">
      <div className="option-group">
        <label className="option-label">
          <FaFont className="option-icon" /> Font Size
        </label>
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
      <div className="option-group">
        <label htmlFor="high-contrast" className="option-label">
          <FaAdjust className="option-icon" /> High Contrast
        </label>
        <button
          id="high-contrast"
          className={`btn-toggle ${highContrast ? "active" : ""}`}
          onClick={toggleHighContrast}
          aria-pressed={highContrast}
        >
          {highContrast ? "On" : "Off"}
        </button>
      </div>
      <div className="option-group">
        <label htmlFor="reduce-motion" className="option-label">
          <FaLowVision className="option-icon" /> Reduce Motion
        </label>
        <button
          id="reduce-motion"
          className={`btn-toggle ${reduceMotion ? "active" : ""}`}
          onClick={toggleReduceMotion}
          aria-pressed={reduceMotion}
        >
          {reduceMotion ? "On" : "Off"}
        </button>
      </div>
      <div className="option-group">
        <label htmlFor="screen-reader" className="option-label">
          <FaVolumeUp className="option-icon" /> Screen Reader Optimization
        </label>
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
