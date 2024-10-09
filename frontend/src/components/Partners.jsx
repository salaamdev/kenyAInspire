import React from "react";
import styled from "styled-components";
import partnerLogo1 from "../assets/partner1.png";
import partnerLogo2 from "../assets/partner2.png";
import partnerLogo3 from "../assets/partner3.svg";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin: ${({ theme }) => theme.spacing(2)};
`;

function Partners() {
  return (
    <Section>
      <Title>Our Partners</Title>
      <LogosContainer>
        <Logo src={partnerLogo1} alt="Partner 1" />
        <Logo src={partnerLogo2} alt="Partner 2" />
        <Logo src={partnerLogo3} alt="Partner 3" />
      </LogosContainer>
    </Section>
  );
}

export default Partners;
