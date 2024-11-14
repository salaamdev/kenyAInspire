import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InstructorNavbar from "../components/InstructorNavbar";
import { getSubmissions } from "../../services/instructorApi";
import "./pageStyles/AssignmentSubmissions.css";
export default function AssignmentSubmissions() {
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSubmissions();
  }, [assignmentId]);

  const fetchSubmissions = async () => {
    try {
      const data = await getSubmissions(assignmentId);
      setSubmissions(data.submissions);
      setError(null);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      setError("Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading submissions...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <>
      <InstructorNavbar />
      <div className="assignment-submissions-container">
        <h2 className="page-title">
          Submissions for Assignment {assignmentId}
        </h2>
        {submissions.length === 0 ? (
          <p className="no-submissions">No submissions yet.</p>
        ) : (
          <div className="table-container">
            <table className="submissions-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Submitted At</th>
                  <th>Grade</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission) => (
                  <tr key={submission.id}>
                    <td>{submission.studentName}</td>
                    <td>{new Date(submission.submittedAt).toLocaleString()}</td>
                    <td>{submission.grade || "Not graded"}</td>
                    <td>
                      <button
                        className="grade-button"
                        onClick={() =>
                          navigate(
                            `/instructor/submissions/${submission.id}/grade`
                          )
                        }
                      >
                        {submission.grade ? "Update Grade" : "Grade"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
