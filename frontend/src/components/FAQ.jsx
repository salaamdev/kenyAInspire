import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Question = styled.h4`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const Answer = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is EduKenya free to use?",
      answer: "Yes, EduKenya is free for all students and teachers in Kenya.",
    },
    {
      question: "Can I use EduKenya without internet access?",
      answer:
        "Absolutely! Our platform offers offline capabilities so you can learn anytime, anywhere.",
    },
    {
      question: "How does EduKenya personalize my learning experience?",
      answer:
        "We use advanced AI algorithms to tailor content based on your performance and learning style.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <Container>
        <Title>Frequently Asked Questions</Title>
        {faqs.map((faq, index) => (
          <div key={index}>
            <Question onClick={() => toggleAnswer(index)}>
              {faq.question}
            </Question>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export default FAQ;
