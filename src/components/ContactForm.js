import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!email) {
      setMessage('Email is required');
      return;
    }

    const emailPattern = /@./;
    if (!emailPattern.test(email)) {
      setMessage('Invalid email format');
      return;
    }

    try {
      const response = await axios.post('http://3.228.97.110:9000/api', { email });
      if (response.status === 200) {
        setMessage('Form Submitted');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setMessage('Email ending with @ez.works is not allowed');
      } else {
        setMessage('An error occurred');
      }
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Contact Me</button>
      {/* {message && <p>{message}</p>} */}
    </form>
  );
};

export default ContactForm;