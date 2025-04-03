import React, { useState } from "react";
import "./ExamRegistrationForm.css";


const ExamRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    semester: "",
    admissionNumber: "",
    examRegisterNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="container">
    <h2>Student Exam Registration</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required  />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required  />
        <input type="text" name="semester" placeholder="Semester" value={formData.semester} onChange={handleChange} required />
        <input type="text" name="admissionNumber" placeholder="Admission Number" value={formData.admissionNumber} onChange={handleChange} required  />
        <input type="text" name="examRegisterNumber" placeholder="Exam Register Number" value={formData.examRegisterNumber} onChange={handleChange} required  />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ExamRegistrationForm;
