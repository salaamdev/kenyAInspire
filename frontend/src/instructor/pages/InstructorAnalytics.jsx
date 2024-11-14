import React from "react";
import InstructorNavbar from "../components/InstructorNavbar";
import SubjectPerformanceChart from "../components/charts/SubjectPerformanceChart";
import GenderDistributionChart from "../components/charts/GenderDistributionChart";
import AttendanceTrendChart from "../components/charts/AttendanceTrendChart";
import ExamPerformanceDistributionChart from "../components/charts/ExamPerformanceDistributionChart";
import ClassPerformanceChart from "../components/ClassPerformanceChart";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./pageStyles/InstructorAnalytics.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function InstructorAnalytics() {
  return (
    <div className="instructor-analytics-page">
      <InstructorNavbar />
      <div className="analytics-container">
        <h1 className="page-title">Analytics Dashboard</h1>
        <div className="analytics-grid">
          <section className="analytics-section">
            <h2 className="section-title">Performance Overview</h2>
            <div className="charts-row">
              <ClassPerformanceChart />
              <SubjectPerformanceChart />
            </div>
          </section>
          <section className="analytics-section">
            <h2 className="section-title">Detailed Analysis</h2>
            <div className="charts-row">
              <ExamPerformanceDistributionChart />
              <AttendanceTrendChart />
            </div>
          </section>
          <section className="analytics-section">
            <h2 className="section-title">Demographics & Trends</h2>
            <div className="charts-row">
              <GenderDistributionChart />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
