import { useState } from "react"

function BookingForm({availableTimes, dispatch, submitForm}) {

    const currentDate = new Date().toISOString().split("T")[0]

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: currentDate,
        time: availableTimes[0],
        noOfGuests: 1,
        occasion: ""
    })

    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }

    const handleDateChange = async (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
     dispatch({ type: 'UPDATE_TIMES', payload: value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      /*alert(`
      Reservation Details:
      Name: ${formData.firstName} ${formData.lastName}
      Phone Number: ${formData.contactNumber}
      Date: ${formData.date}
      Time: ${formData.time}
      Number of Guests: ${formData.noOfGuests}
      Occasion: ${formData.occasion ? formData.occasion : ''}
      `);*/
      submitForm(formData)
    }

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
                    value={formData.firstName}
                    onChange={handleFormChange}
                    required
                />
            </div>

            <div className="form-field">
                <label htmlFor="last-name" aria-label="last-name">Last Name</label>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    required
                />
            </div>

            <div className="form-field">
                <label htmlFor="contact-number" aria-label="contact-number">Contact Number</label>
                <input
                    type="text"
                    id="contact-number"
                    name="contactNumber"
                    placeholder="123-456-7890"
                    value={formData.contactNumber}
                    onChange={handleFormChange}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                />
            </div>

            <div className="form-field">
                <label htmlFor="res-date" aria-label="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={formData.date}
                    onChange={handleDateChange}
                    required
                    min={currentDate}
                />
            </div>

            <div className="form-field">
                <label htmlFor="res-time" aria-label="res-time">Choose time</label>
                <select
                    id="res-time"
                    name="time"
                    value={formData.time}
                    onChange={handleFormChange}
                    required>
                    {availableTimes?.map(times =>
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
                    value={formData.noOfGuests}
                    onChange={handleFormChange}
                    required
                    min="1"
                    max="10"
                />
            </div>

            <div className="form-field">
                <label htmlFor="occasion" aria-label="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleFormChange}
                    >
                    <option label=" " data-testid="occasion-option"></option>
                    <option data-testid="occasion-option">Birthday</option>
                    <option data-testid="occasion-option">Engagement</option>
                    <option data-testid="occasion-option">Anniversary</option>
                </select>
            </div>

          <input className="submit" type="submit" value="Reserve" aria-label="Submit button"/>
      </form>
      </main>
    )
  }

  export default  BookingForm;
