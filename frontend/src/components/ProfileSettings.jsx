import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

const SettingsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const Label = styled.label`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

const Button = styled.button`
  margin-top: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
`;

function ProfileSettings() {
  const { user, token } = useContext(AuthContext);
  const [name, setName] = useState(user.name);
  const [email] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement update logic
    alert("Profile updated successfully!");
  };

  return (
    <SettingsContainer>
      <h3>Profile Settings</h3>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />

        <Label>Email</Label>
        <Input value={email} disabled />

        <Button type="submit">Save Changes</Button>
      </Form>
    </SettingsContainer>
  );
}

export default ProfileSettings;
