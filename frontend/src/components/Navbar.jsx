import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  & > a,
  & > button {
    margin-left: ${({ theme }) => theme.spacing(2)};
    color: #fff;
    font-size: 1rem;
    background: none;
    border: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    & > a,
    & > button {
      margin: ${({ theme }) => theme.spacing(1)} 0;
    }
  }
`;

function Navbar() {
  const { user, logout } = React.useContext(AuthContext);

  return (
    <Nav>
      <Logo>
        <Link to="/" style={{ color: "#fff" }}>
          EduKenya
        </Link>
      </Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
