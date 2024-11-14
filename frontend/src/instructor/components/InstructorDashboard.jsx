import React from "react";
// import ClassPerformanceChart from "./ClassPerformanceChart";
import SubjectPerformanceChart from "./charts/SubjectPerformanceChart";
import GenderDistributionChart from "./charts/GenderDistributionChart";
import ExamPerformanceDistributionChart from "./charts/ExamPerformanceDistributionChart";
import AttendanceTrendChart from "./charts/AttendanceTrendChart";
import "./charts/chartStyles.css";

function InstructorDashboard() {
  return (
    <div className="dashboard">
      {/* <ClassPerformanceChart /> */}
      <SubjectPerformanceChart />
      <GenderDistributionChart />
      <ExamPerformanceDistributionChart />
      <AttendanceTrendChart />
    </div>
  );
}

export default InstructorDashboard;
