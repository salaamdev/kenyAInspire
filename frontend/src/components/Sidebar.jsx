import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa";
import Chatbot from "./Chatbot";

const SidebarContainer = styled.div.attrs(({ $isOpen }) => ({
  "data-isopen": $isOpen, // Use data attribute for DOM elements
}))`
  width: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  height: calc(100vh - 60px); /* Adjust based on your navbar height */
  margin-top: 60px; /* Push the sidebar below the navbar */
`;

const MenuButton = styled.button.attrs(({ $isOpen, $isVisible }) => ({
  "data-isopen": $isOpen,
  "data-isvisible": $isVisible, // Same fix for visibility prop if needed
}))`
  position: fixed;
  top: 70px; /* Adjust based on your navbar height */
  left: ${({ $isOpen }) => ($isOpen ? "210px" : "10px")};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
  transition: left 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};

  &::before,
  &::after,
  div {
    content: "";
    background-color: #fff;
    height: 2px;
    width: 100%;
    display: block;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: ${({ theme }) => theme.spacing(2)};
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;

const ChatBubble = styled.div`
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;

function Sidebar({ isOpen, setIsOpen }) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsButtonVisible(false);
    } else {
      // Scrolling up
      setIsButtonVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <MenuButton
        onClick={toggleSidebar}
        $isOpen={isOpen} // Custom prop for styled-components
        $isVisible={isButtonVisible} // Custom prop for styled-components
      >
        <div></div>
      </MenuButton>
      <SidebarContainer $isOpen={isOpen}>
        <MenuList>
          <MenuItem>
            <StyledNavLink to="/dashboard" end>
              Home
            </StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/dashboard/my-courses">My Courses</StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/dashboard/progress">Progress</StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/dashboard/settings">Settings</StyledNavLink>
          </MenuItem>
        </MenuList>
        <ChatBubble onClick={() => setIsChatbotOpen(!isChatbotOpen)}>
          <FaCommentDots size={24} />
          <span>Chat</span>
        </ChatBubble>
        <Chatbot
          isOpen={isChatbotOpen}
          onClose={() => setIsChatbotOpen(false)}
        />
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
