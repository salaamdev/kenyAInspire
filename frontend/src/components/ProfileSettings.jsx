import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfile } from "../services/api";
import "./componentStyles/ProfileSettings.css";

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

      setUser({ ...user, name, email });

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="settings-container">
      <h3>Profile Settings</h3>
      <form onSubmit={handleSubmit} className="settings-form">
        <label className="settings-label">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="settings-input"
        />

        <label className="settings-label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="settings-input"
        />

        <label className="settings-label">New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Leave blank to keep current password"
          className="settings-input"
        />

        <button type="submit" className="settings-button">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ProfileSettings;
