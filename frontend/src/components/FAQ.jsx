import React, { useState } from "react";
import "./componentStyles/FAQ.css";

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
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h4 className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
            </h4>
            <p className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
