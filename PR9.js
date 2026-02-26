import React, { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    zip: "",
  });

  const totalSteps = 3;
  const progressPercent = (step / totalSteps) * 100;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Navigation
  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Multi Step Form</h2>

      {/* Progress Bar */}
      <div
        style={{
          height: "10px",
          background: "#ddd",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progressPercent}%`,
            background: "#4caf50",
            borderRadius: "5px",
            transition: "0.3s",
          }}
        ></div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: User Details */}
        {step === 1 && (
          <div>
            <h3>User Details</h3>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <br />
            <br />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
        )}

        {/* Step 2: Address Details */}
        {step === 2 && (
          <div>
            <h3>Address Details</h3>
            <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} required />
            <br />
            <br />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            <br />
            <br />
            <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div>
            <h3>Confirmation</h3>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Street:</strong> {formData.street}
            </p>
            <p>
              <strong>City:</strong> {formData.city}
            </p>
            <p>
              <strong>Zip Code:</strong> {formData.zip}
            </p>
          </div>
        )}

        <br />

        {/* Navigation Buttons */}
        {step > 1 && (
          <button type="button" onClick={prevStep}>
            Back
          </button>
        )}

        {step < totalSteps && (
          <button type="button" onClick={nextStep} style={{ marginLeft: "10px" }}>
            Next
          </button>
        )}

        {step === totalSteps && (
          <button type="submit" style={{ marginLeft: "10px" }}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default MultiStepForm;
