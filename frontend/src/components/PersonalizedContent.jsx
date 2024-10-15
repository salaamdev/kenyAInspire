import React, { useEffect, useState } from "react";
import { getRecommendations } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import "./componentStyles/PersonalizedContent.css";

function PersonalizedContent() {
  const { token } = React.useContext(AuthContext);
  const [recommendations, setRecommendations] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRecommendations(token);
        setRecommendations(data.recommendations);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <section className="content-container">
      <h2 className="content-title">Your Personalized Recommendations</h2>
      <div className="content-item">
        <p>{recommendations || "Loading recommendations..."}</p>
      </div>
    </section>
  );
}

export default PersonalizedContent;
