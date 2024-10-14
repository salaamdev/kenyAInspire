import React, { useContext } from "react";
import styled from "styled-components";
import { UserPreferencesContext } from "../contexts/UserPreferencesContext";

const OptionsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const Button = styled.button`
  margin-right: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
`;

function AccessibilityOptions() {
  const { fontSize, highContrast, toggleHighContrast, changeFontSize } =
    useContext(UserPreferencesContext);

  return (
    <OptionsContainer>
      <h3>Accessibility Options</h3>
      <div>
        <p>Font Size:</p>
        <Button onClick={() => changeFontSize("small")}>Small</Button>
        <Button onClick={() => changeFontSize("medium")}>Medium</Button>
        <Button onClick={() => changeFontSize("large")}>Large</Button>
      </div>
      <div>
        <p>Contrast:</p>
        <Button onClick={toggleHighContrast}>
          {highContrast ? "Disable" : "Enable"} High Contrast
        </Button>
      </div>
    </OptionsContainer>
  );
}

export default AccessibilityOptions;
