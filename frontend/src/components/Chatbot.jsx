import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { sendMessageToAI } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import { getCourses, getProgress } from "../services/api";

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  height: 500px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const MessagesContainer = styled.div`
  height: 300px;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Message = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  text-align: ${({ isUser }) => (isUser ? "right" : "left")};
`;

const InputContainer = styled.form`
  display: flex;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

const SendButton = styled.button`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  margin-left: ${({ theme }) => theme.spacing(1)};
  border-radius: 4px;
`;

function Chatbot({ isOpen, onClose }) {
  const { token, user } = React.useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [studentData, setStudentData] = useState({ courses: [], progress: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await getCourses(token);
        const progressData = await getProgress(token);
        setStudentData({
          courses: coursesData.courses,
          progress: progressData.progress,
        });
        setMessages([
          {
            text: `Hello ${user.name}! How can I assist you today?`,
            isUser: false,
          },
        ]);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchData();
  }, [token, user.name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages([...messages, userMessage]);
    setInputValue("");

    try {
      const response = await sendMessageToAI(token, inputValue, studentData);
      const aiMessage = { text: response.reply, isUser: false };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      const errorMessage = {
        text: "Sorry, I am having trouble responding.",
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  if (!isOpen) return null;

  return (
    <ChatbotContainer>
      <Header>
        Chatbot
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>
            {msg.text}
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <SendButton type="submit">Send</SendButton>
      </InputContainer>
    </ChatbotContainer>
  );
}

export default Chatbot;
