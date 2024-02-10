import React, { useEffect, useState } from "react";
import "../Styles/FormAvailability.css";
import FormAdditionalDetails from "./FormAdditionalDetails";

function FormAvailability({
  bestAgencyForm,
  ChangeIsValid,
  setIsFormSubmitted,
}) {
  const [dateOptions, setDateOptions] = useState([]);
  const [selectedDay, setSelectedDay] = useState("select-day");
  const [selectedTime, setSelectedTime] = useState("select-time");
  const [isValid, setIsValid] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const timeOptions = [
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
  ];

  useEffect(() => {
    const generateDateOptions = () => {
      const currentDate = new Date();
      const newDateOptions = [];

      for (let i = 0; i < 10; i++) {
        const optionDate = new Date(currentDate);
        optionDate.setDate(currentDate.getDate() + i);

        if (optionDate.getDay() === 0 || optionDate.getDay() === 6) {
          continue;
        }

        if (optionDate.getDay() === 5 && i > 0) {
          i += 2;
        }

        const option = {
          value: optionDate.toISOString(),
          label: optionDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        };

        newDateOptions.push(option);
      }

      setDateOptions(newDateOptions);
    };

    generateDateOptions();
  }, []);

  const handleDayChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDay(selectedValue);
    validateForm(selectedValue, selectedTime);
  };

  const handleTimeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedTime(selectedValue);
    validateForm(selectedDay, selectedValue);
  };

  const validateForm = (day, time) => {
    const isDayValid = day !== "select-day";
    const isTimeValid = time !== "select-time";
    setIsValid(isDayValid && isTimeValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        style={{ display: isValid && buttonClicked && "none" }}
        className="availability-form"
        onSubmit={handleSubmit}
      >
        <div>
          <h1>What’s Your Availability</h1>
          <p>What’s the best date and time to give you a call?</p>
        </div>
        <div className="select-availability-wrapper">
          <select name="day" value={selectedDay} onChange={handleDayChange}>
            <option value="select-day" disabled>
              Select a day
            </option>
            {dateOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select name="time" value={selectedTime} onChange={handleTimeChange}>
            <option value="select-time" disabled>
              Select a time
            </option>
            {timeOptions.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          <button
            onClick={() => setButtonClicked(true)}
            type="submit"
            disabled={!isValid}
          >
            Schedule Appointment
          </button>
        </div>
      </form>
      <>
        {isValid && buttonClicked && (
          <FormAdditionalDetails
            bestAgencyForm={bestAgencyForm}
            ChangeIsValid={ChangeIsValid}
            setIsFormSubmitted={setIsFormSubmitted}
          />
        )}
      </>
    </div>
  );
}

export default FormAvailability;
