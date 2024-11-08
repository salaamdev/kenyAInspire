import React, { useState } from "react";
import { Button, Form, Input, Select, Divider } from "antd";
import RichTextEditor from "../components/RichTextEditor";
import AI_Suggestions from "../components/AI_Suggestions";
import "./pageStyles/Lesson-Plan-Page.css";

const LessonPlanGenerator = () => {
    const [lessonPlan, setLessonPlan] = useState("");
    const [subject, setSubject] = useState("");
    const [grade, setGrade] = useState("");
    const [topic, setTopic] = useState("");
    const [objectives, setObjectives] = useState("");

    const handleGeneratePlan = () => {
        // AI integration logic to generate lesson plan
        console.log("Generating lesson plan...");
    };

    return (
        <div className="lesson-plan-page">
            <h2>Lesson Plan Generator</h2>
            <div className="lesson-plan-container">
                {/* Sidebar Form */}
                <div className="sidebar">
                    <Form layout="vertical">
                        <Form.Item label="Subject">
                            <Select onChange={(value) => setSubject(value)}>
                                <Select.Option value="math">Math</Select.Option>
                                <Select.Option value="science">Science</Select.Option>
                                <Select.Option value="english">English</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Grade Level">
                            <Select onChange={(value) => setGrade(value)}>
                                <Select.Option value="grade1">Grade 1</Select.Option>
                                <Select.Option value="grade2">Grade 2</Select.Option>
                                <Select.Option value="grade3">Grade 3</Select.Option>
                                <Select.Option value="grade4">Grade 4</Select.Option>
                                <Select.Option value="grade5">Grade 5</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Topic">
                            <Input onChange={(e) => setTopic(e.target.value)} />
                        </Form.Item>
                        <Form.Item label="Learning Objectives">
                            <Input.TextArea
                                rows={4}
                                onChange={(e) => setObjectives(e.target.value)}
                            />
                        </Form.Item>
                        <Button type="primary" onClick={handleGeneratePlan}>
                            Generate Lesson Plan
                        </Button>
                    </Form>
                </div>

                {/* Main Editor Section */}
                <div className="editor-section">
                    <RichTextEditor
                        content={lessonPlan}
                        onChange={(content) => setLessonPlan(content)}
                    />
                </div>

                {/* AI Suggestions Sidebar */}
                <div className="ai-suggestions">
                    <AI_Suggestions subject={subject} grade={grade} />
                </div>
            </div>
        </div>
    );
};

export default LessonPlanGenerator;
