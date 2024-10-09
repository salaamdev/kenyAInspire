import React from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

const Banner = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

function WelcomeBanner() {
  const { user } = React.useContext(AuthContext);

  return (
    <Banner>
      <h2>Welcome back, {user.name}!</h2>
      <p>
        “Education is the most powerful weapon which you can use to change the
        world.” – Nelson Mandela
      </p>
    </Banner>
  );
}

export default WelcomeBanner;
