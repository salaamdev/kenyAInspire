import React from "react";
import styled from "styled-components";
import { UserPreferencesContext } from "../contexts/UserPreferencesContext";

const AccessibilityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Button = styled.button`
  margin-right: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

function AccessibilityOptions() {
  const { preferences, updatePreferences } = React.useContext(
    UserPreferencesContext
  );

  const toggleHighContrast = () => {
    const newContrast = preferences.highContrast ? false : true;
    updatePreferences({ highContrast: newContrast });
    document.body.style.filter = newContrast ? "contrast(1.2)" : "none";
  };

  const increaseFontSize = () => {
    const newSize = preferences.fontSize + 1;
    updatePreferences({ fontSize: newSize });
    document.body.style.fontSize = `${newSize}px`;
  };

  const decreaseFontSize = () => {
    const newSize = preferences.fontSize - 1;
    updatePreferences({ fontSize: newSize });
    document.body.style.fontSize = `${newSize}px`;
  };

  return (
    <AccessibilityContainer>
      <Button onClick={toggleHighContrast}>
        {preferences.highContrast ? "Disable" : "Enable"} High Contrast
      </Button>
      <Button onClick={increaseFontSize}>Increase Font Size</Button>
      <Button onClick={decreaseFontSize}>Decrease Font Size</Button>
    </AccessibilityContainer>
  );
}

export default AccessibilityOptions;
