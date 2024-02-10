import React, { useState } from "react";
import "../Styles/BestAgency.css";
import icon1 from "../assets/consultation_icon02.png.png";
import icon2 from "../assets/consultation_icon03.png.png";
import FormAvailability from "./FormAvailability";

function BestAgency({ windowWidth }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "Subject",
  });

  const [isValid, setIsValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setIsFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isNameValid = formData.name.trim() !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isPhoneValid = /^\d{10,11}$/.test(formData.phoneNumber);
    let isSubjectSelected = true;

    if (windowWidth <= 600) {
      isSubjectSelected = formData.subject !== "Subject";
    }

    setIsValid(
      isNameValid && isEmailValid && isPhoneValid && isSubjectSelected
    );
    setIsFormSubmitted(true);
  };

  return (
    <div id="best-agency-container" className="best-agency-container">
      <section className="best-agency-content">
        <h2>95% Accuracy</h2>
        <h1>Worldwide Best Digital Marketing Agency</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <div className="best-agency-icons">
          <div className="best-agency-icon1">
            <div className="agency-icon1-wrapper">
              <img src={icon1} />
              <span>12x</span>
            </div>
            <h3>Faster Order Processing</h3>
          </div>
          <div className="best-agency-icon1">
            <div className="agency-icon2-wrapper">
              <img src={icon2} />
              <span>95%</span>
            </div>
            <h3>Processing Accuracy</h3>
          </div>
        </div>
      </section>
      <form className="best-agency-form" onSubmit={handleFormSubmit}>
        <h2>
          {windowWidth < 1375 ? "Free Consultation" : "Get a Consultation"}
        </h2>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={{
            backgroundColor:
              isFormSubmitted &&
              !isValid &&
              formData.name.trim() === "" &&
              "#FF9494",
          }}
        />
        <input
          placeholder="Email Address"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={{
            backgroundColor:
              isFormSubmitted &&
              !isValid &&
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
              "#FF9494",
          }}
        />
        <input
          placeholder="Phone Number"
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          style={{
            backgroundColor:
              isFormSubmitted &&
              !isValid &&
              !/^\d{10,11}$/.test(formData.phoneNumber) &&
              "#FF9494",
          }}
        />
        {windowWidth <= 600 && (
          <>
            <select
              name="subject"
              id="selectedSubject"
              value={formData.subject}
              onChange={handleInputChange}
              style={{
                backgroundColor:
                  isFormSubmitted &&
                  !isValid &&
                  formData.subject === "Subject" &&
                  "#FF9494",
              }}
            >
              <option disabled value="Subject">
                Subject
              </option>
              <option value="Subject1">Subject1</option>
              <option value="Subject2">Subject2</option>
              <option value="Subject3">Subject3</option>
              <option value="Subject4">Subject4</option>
            </select>
          </>
        )}
        <button type="submit">
          {windowWidth < 1375 ? "Consultation" : "Pick Best Time To Call"}
        </button>
      </form>
      {isValid && (
        <>
          <div onClick={() => setIsValid(false)} className="form-overlay"></div>
          <FormAvailability
            bestAgencyForm={setFormData}
            ChangeIsValid={setIsValid}
            setIsFormSubmitted={setIsFormSubmitted}
          />
        </>
      )}
    </div>
  );
}

export default BestAgency;
