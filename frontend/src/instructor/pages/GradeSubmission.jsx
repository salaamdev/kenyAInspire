import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InstructorNavbar from "../components/InstructorNavbar";
import { getSubmission, submitGrade } from "../../services/instructorApi";
import "./pageStyles/GradeSubmission.css";

function GradeSubmission() {
  const { submissionId } = useParams();
  const [submission, setSubmission] = useState(null);
  const [grade, setGrade] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchSubmission();
  }, []);

  const fetchSubmission = async () => {
    try {
      const data = await getSubmission(submissionId);
      setSubmission(data.submission);
    } catch (error) {
      console.error("Error fetching submission:", error);
    }
  };

  const handleSubmitGrade = async (e) => {
    e.preventDefault();
    try {
      await submitGrade(submissionId, { grade, feedback });
      alert("Grade submitted successfully!");
    } catch (error) {
      console.error("Error submitting grade:", error);
    }
  };

  if (!submission) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <InstructorNavbar />
      <div className="grade-submission">
        <h1>Grade Submission</h1>
        <p>
          <strong>Student:</strong> {submission.studentName}
        </p>
        <p>
          <strong>Submitted on:</strong>{" "}
          {new Date(submission.timestamp).toLocaleString()}
        </p>
        <p>
          <strong>Submission:</strong> {submission.content}
        </p>
        <form onSubmit={handleSubmitGrade}>
          <div>
            <label>Grade:</label>
            <input
              type="number"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Feedback:</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit Grade</button>
        </form>
      </div>
    </div>
  );
}

export default GradeSubmission;
