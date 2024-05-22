import { useState } from "react";

function BookingForm(props) {


    const currentDate = new Date().toISOString().split("T")[0];

    const validateFirstName = (firstName) => {
        return firstName !== "";
    }

    const validateLastName = (lastName) => {
        return lastName !== "";
    }
    const validatePhoneNumber = (phone) => {
        return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone);
    };

    const validateDate = (date) => {
        return date >= currentDate;
    };

    const validateTime = (time) => {
        return time !== "";
    }

    const validateGuests = (guests) => {
        return guests >= 1 && guests <= 10;
    };

    const [formData, setFormData] = useState({
        firstName: { value: "", isTouched: false },
        lastName: { value: "", isTouched: false },
        contactNumber: { value: "", isTouched: false },
        date: { value: currentDate, isTouched: false },
        time: { value: props.availableTimes[0], isTouched: false },
        noOfGuests: { value: 1, isTouched: false },
        occasion: { value: "", isTouched: false }
    });

    const isFormValid = () => {
        return (
            validateFirstName(formData.firstName.value) &&
            validateLastName(formData.lastName.value) &&
            validatePhoneNumber(formData.contactNumber.value) &&
            validateDate(formData.date.value) &&
            validateTime(formData.time.value) &&
            validateGuests(formData.noOfGuests.value)
        );
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: {
            ...prevFormData[name],
            value: value,
            isTouched: true
          }
        }));
    };

    const handleDateChange = async (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: {
            ...prevFormData[name],
            value: value,
            isTouched: true
          }
        }))
        props.dispatch(value)
    };

    const handleSubmit = (event) => {
      event.preventDefault()
      props.submitForm(formData)
    };

    return (
        <main>
        <h2 className="form-title"> Table reservation </h2>
        <form onSubmit={handleSubmit}>

            <div className="form-field">
                <label htmlFor="first-name" aria-label="first-name">First Name</label>
                <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formData.firstName.value}
                    onChange={handleFormChange}
                    onBlur={handleFormChange}
                    required
                />
                {formData.firstName.isTouched && !validateFirstName(formData.firstName.value) ? (
                <p style={{ color: "red", fontSize: "14px" }}>
                    Please enter a valid name.
                </p>
                ) : null}
            </div>

            <div className="form-field">
                <label htmlFor="last-name" aria-label="last-name">Last Name</label>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName.value}
                    onChange={handleFormChange}
                    onBlur={handleFormChange}
                    required
                />
                {formData.lastName.isTouched && !validateLastName(formData.lastName.value) ? (
                <p style={{ color: "red", fontSize: "14px" }}>
                    Please enter a valid name.
                </p>
                ) : null}
            </div>

            <div className="form-field">
                <label htmlFor="contact-number" aria-label="contact-number">Contact Number</label>
                <input
                    type="text"
                    id="contact-number"
                    name="contactNumber"
                    placeholder="123-456-7890"
                    value={formData.contactNumber.value}
                    onChange={handleFormChange}
                    onBlur={handleFormChange}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                />
                {formData.contactNumber.isTouched && !validatePhoneNumber(formData.contactNumber.value) ? (
                <p style={{ color: "red", fontSize: "14px" }}>
                    Invalid phone number format. Please use ###-###-####.
                </p>
                ) : null}
            </div>

            <div className="form-field">
                <label htmlFor="res-date" aria-label="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={formData.date.value}
                    onChange={handleDateChange}
                    required
                    min={currentDate}
                />
                {formData.date.isTouched && !validateDate(formData.date.value) ? (
                <p style={{ color: "red", fontSize: "14px" }}>
                    The selected date is in the past. Please choose a valid date for your reservation.
                </p>
            ) : null}
            </div>

            <div className="form-field">
                <label htmlFor="res-time" aria-label="res-time">Choose time</label>
                <select
                    id="res-time"
                    name="time"
                    value={formData.time.value}
                    onChange={handleFormChange}
                    onBlur={handleFormChange}
                    required>
                    {props.availableTimes.map(times =>
                        <option data-testid="booking-time-option" key={times}>
                            {times}
                        </option>
                    )}
                </select>
            </div>

            <div className="form-field">
                <label htmlFor="guests" aria-label="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    name="noOfGuests"
                    placeholder="1"
                    value={formData.noOfGuests.value}
                    onChange={handleFormChange}
                    onBlur={handleFormChange}
                    required
                    min="1"
                    max="10"
                />
                {formData.noOfGuests.isTouched && !validateGuests(formData.noOfGuests.value) ? (
                <p style={{ color: "red", fontSize: "14px" }}>
                    Please enter a number between 1 and 10.
                </p>
                ) : null}
            </div>

            <div className="form-field">
                <label htmlFor="occasion" aria-label="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion.value}
                    onChange={handleFormChange}
                    >
                    <option label=" " data-testid="occasion-option"></option>
                    <option data-testid="occasion-option">Birthday</option>
                    <option data-testid="occasion-option">Engagement</option>
                    <option data-testid="occasion-option">Anniversary</option>
                </select>
            </div>

          <input className="submit" type="submit" value="Reserve" disabled={!isFormValid()} aria-label="Submit button"/>
      </form>
      </main>
    )
  }

  export default  BookingForm;
