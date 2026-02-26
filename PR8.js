import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    console.log("Form Data Submitted:", formData);

    // Optional: clear form after submit
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Message:</label>
          <br />
          <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" style={{ width: "100%", padding: "8px" }} />
        </div>

        <button type="submit" style={{ padding: "10px 15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
