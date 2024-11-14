import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InstructorNavbar from "../components/InstructorNavbar";
import { getSubmissions } from "../../services/instructorApi";

function AssignmentSubmissions() {
  const { assignmentId } = useParams();
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const data = await getSubmissions(assignmentId);
      setSubmissions(data.submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };

  return (
    <div>
      <InstructorNavbar />
      <div className="assignment-submissions">
        <h1>Submissions for Assignment {assignmentId}</h1>
        <ul>
          {submissions.map((submission) => (
            <li key={submission.id}>
              <p>
                <strong>{submission.studentName}</strong> submitted on{" "}
                {new Date(submission.timestamp).toLocaleString()}
              </p>
              <button>View Submission</button>
              <button
                onClick={() =>
                  navigate(`/instructor/submissions/${submission.id}/grade`)
                }
              >
                Grade Submission
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AssignmentSubmissions;
