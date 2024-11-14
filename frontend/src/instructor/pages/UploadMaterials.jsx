import React, { useState } from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import axios from "axios";
import "./pageStyles/UploadMaterials.css";

function UploadMaterials() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/instructor/materials/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("File uploaded successfully!");
      setFile(null);
      setDescription("");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <InstructorNavbar />
      <div className="upload-materials-container">
        <h2>Upload Course Materials</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>File:</label>
            <input type="file" onChange={handleFileChange} required />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description for the material"
              required
            />
          </div>
          <button type="submit" disabled={uploading}>
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </>
  );
}

export default UploadMaterials;
