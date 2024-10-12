import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfile } from "../services/api";

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
  const { user, token, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = { name, email };
      if (password) {
        userData.password = password;
      }
      await updateProfile(token, userData);

      // Update user context
      setUser({ ...user, name, email });

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <SettingsContainer>
      <h3>Profile Settings</h3>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />

        <Label>Email</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />

        <Label>New Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Leave blank to keep current password"
        />

        <Button type="submit">Save Changes</Button>
      </Form>
    </SettingsContainer>
  );
}

export default ProfileSettings;
