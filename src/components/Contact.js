import React from 'react';
import EmailForm from './EmailForm';
import { Navbar } from './navbar';
import './Contact.css';
import useWindowSize from '../hooks/useWindowSize';
import styled from 'styled-components';

const Prompt = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  width: 80vw;
  padding: 0px 50px;
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60vh;
  padding-top: 180px;
  @media (max-width: 480px) {
    height: 90vh;
    padding-top: 50px;
  }
`;

export default function Contact() {
  const page = useWindowSize();

  return (
    <div className="contact" style={{ ...page }}>
      <Navbar />
      <div
        className="contact__body"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dm89xfnl4/image/upload/v1602539945/bg03_a7xgd9.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {' '}
        <ContactContainer>
          <Prompt>We'd love to hear from you!</Prompt>
          <EmailForm />
        </ContactContainer>
      </div>
    </div>
  );
}
