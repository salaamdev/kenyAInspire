import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfile } from "../services/api";
import "./componentStyles/SettingsComponents.css";

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
    <div className="settings-card">
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Leave blank to keep current password"
          />
        </div>
        <button type="submit" className="btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ProfileSettings;
