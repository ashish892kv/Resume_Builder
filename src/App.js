import React, { useState } from 'react';
import Header from "./component/Header"
import Footer from './component/Footer';
import Form from './component/Form';
import ResumePreview from "./component/ResumePreview";
import './App.css';

function App() {
  const [formData, setFormData] = useState({});

  const handleFormChange = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <Header/>
      <div className="main-content">
        <Form onFormChange={handleFormChange} />
        <ResumePreview formData={formData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
