import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetail, updateTopicCompletion } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import AIQuiz from "../components/AIQuiz";
import AIFlashcards from "../components/AIFlashcards";
import {
  LinearProgress,
  Box,
  Typography,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Container,
  Paper,
  Divider,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)({
  marginTop: "2rem",
});

const StyledPaper = styled(Paper)({
  padding: "2rem",
  marginBottom: "2rem",
});

const StyledListItem = styled(ListItem)({
  paddingLeft: 0,
});

const CourseDetail = () => {
  const { token } = React.useContext(AuthContext);
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const data = await getCourseDetail(token, courseId);
        setCourse(data.course);
        setProgress(data.progress);
      } catch (error) {
        console.error("Error fetching course detail:", error);
      }
    };
    fetchCourseDetail();
  }, [token, courseId]);

  const handleTopicCompletion = async (topicId, isCompleted) => {
    try {
      await updateTopicCompletion(token, courseId, topicId, isCompleted);
      // Update the course data and progress locally
      const updatedTopics = course.topics.map((topic) => {
        if (topic._id === topicId) {
          return { ...topic, isCompleted };
        }
        return topic;
      });

      const completedTopicsCount = updatedTopics.filter(
        (t) => t.isCompleted
      ).length;
      const totalTopics = updatedTopics.length;
      const progressPercentage = (completedTopicsCount / totalTopics) * 100;

      setCourse({ ...course, topics: updatedTopics });
      setProgress({
        totalTopics,
        completedTopics: completedTopicsCount,
        progressPercentage,
      });
    } catch (error) {
      console.error("Error updating topic completion:", error);
    }
  };

  if (!course || !progress) return <Typography>Loading...</Typography>;

  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          {course.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {course.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Progress: {progress.progressPercentage.toFixed(2)}%
        </Typography>
        <Box sx={{ width: "100%", mt: 1 }}>
          <LinearProgress
            variant="determinate"
            value={progress.progressPercentage}
          />
        </Box>
      </StyledPaper>

      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom>
          Topics
        </Typography>
        <List>
          {course.topics.map((topic) => (
            <StyledListItem key={topic._id}>
              <ListItemText primary={topic.title} secondary={topic.content} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  checked={topic.isCompleted}
                  onChange={(e) =>
                    handleTopicCompletion(topic._id, e.target.checked)
                  }
                />
              </ListItemSecondaryAction>
            </StyledListItem>
          ))}
        </List>
      </StyledPaper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              AI-Generated Flashcards
            </Typography>
            <AIFlashcards courseId={courseId} />
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Practice Quiz
            </Typography>
            <AIQuiz courseId={courseId} />
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default CourseDetail;
