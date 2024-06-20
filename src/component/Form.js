import React, { useState } from 'react';
import './Form.css';

function Form({ onFormChange }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onFormChange({ ...formData, [name]: value });
  };

  return (
    <div className="form">
      <h2>Enter Your Details</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <textarea name="education" placeholder="Education" onChange={handleChange} />
      <textarea name="experience" placeholder="Work Experience" onChange={handleChange} />
      <textarea name="skills" placeholder="Skills" onChange={handleChange} />
    </div>
  );
}

export default Form;
