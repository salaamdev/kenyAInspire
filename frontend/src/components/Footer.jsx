import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "./Container";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing(4)} 0;
`;

const FooterContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  /* Other styles */
`;

const FooterSection = styled.div`
  flex: 1;

  & > h4 {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  & > ul > li > a {
    color: #fff;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    display: block;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    text-align: center;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>About EduKenya</h4>
          <p>
            EduKenya is committed to revolutionizing education in Kenya through
            AI-powered personalized learning experiences.
          </p>
        </FooterSection>
        <FooterSection>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Contact Us</h4>
          <p>Email: support@edukenya.co.ke</p>
          <p>Phone: +254 700 000000</p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
