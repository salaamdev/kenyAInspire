import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  height: calc(100vh - 64px); // Adjust based on Navbar height
  position: sticky;
  top: 64px; // Adjust based on Navbar height

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const MenuList = styled.ul`
  padding: ${({ theme }) => theme.spacing(2)};
`;

const MenuItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  & > a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <MenuList>
        <MenuItem>
          <Link to="/dashboard">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/dashboard/courses">Courses</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/dashboard/progress">Progress</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/dashboard/settings">Settings</Link>
        </MenuItem>
      </MenuList>
    </SidebarContainer>
  );
}

export default Sidebar;
