import React, { useContext } from "react";
import { UserPreferencesContext } from "../contexts/UserPreferencesContext";
import "./componentStyles/AccessibilityOptions.css";

function AccessibilityOptions() {
  const { highContrast, toggleHighContrast, changeFontSize } = useContext(
    UserPreferencesContext
  );

  return (
    <div className="options-container">
      <h3>Accessibility Options</h3>
      <div>
        <p>Font Size:</p>
        <button className="button" onClick={() => changeFontSize("small")}>
          Small
        </button>
        <button className="button" onClick={() => changeFontSize("medium")}>
          Medium
        </button>
        <button className="button" onClick={() => changeFontSize("large")}>
          Large
        </button>
      </div>
      <div>
        <p>Contrast:</p>
        <button className="button" onClick={toggleHighContrast}>
          {highContrast ? "Disable" : "Enable"} High Contrast
        </button>
      </div>
    </div>
  );
}

export default AccessibilityOptions;
