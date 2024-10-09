import React, { useState } from "react";
import styled from "styled-components";
import { sendMessageToAI } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: ${({ $isOpen }) => ($isOpen ? "0" : "-400px")};
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px 8px 0 0;
  transition: bottom 0.3s ease-in-out;
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  border-radius: 8px 8px 0 0;
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

function Chatbot() {
  const { token } = React.useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages([...messages, userMessage]);
    setInputValue("");

    try {
      const response = await sendMessageToAI(token, inputValue);
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

  return (
    <ChatbotContainer $isOpen={isOpen}>
      <Header onClick={toggleChatbot}>Chatbot</Header>
      {isOpen && (
        <>
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
        </>
      )}
    </ChatbotContainer>
  );
}

export default Chatbot;
