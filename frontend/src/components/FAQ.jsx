import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./componentStyles/FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is KenyAInspire free to use?",
      answer:
        "Yes, KenyAInspire is free for all students and teachers in Kenya. We believe in making quality education accessible to everyone.",
    },
    {
      question: "Can I use KenyAInspire without internet access?",
      answer:
        "Our platform offers offline capabilities so you can learn anytime, anywhere. Simply download the content you need when you have internet access, and you can study offline later.",
    },
    {
      question: "How does KenyAInspire personalize my learning experience?",
      answer:
        "We use advanced AI algorithms to tailor content based on your performance and learning style. The platform adapts to your pace, identifies areas where you need more practice, and suggests relevant resources to help you improve.",
    },
    {
      question: "What subjects are available on KenyAInspire?",
      answer:
        "KenyAInspire covers a wide range of subjects aligned with the Kenyan curriculum, including Mathematics, Sciences, Languages, and Humanities. We're constantly expanding our content library to provide comprehensive coverage.",
    },
    {
      question: "How can teachers use KenyAInspire in their classrooms?",
      answer:
        "Teachers can use KenyAInspire to complement their lessons, assign homework, track student progress, and identify areas where students need additional support. We also provide resources for lesson planning and professional development.",
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
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAnswer(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
