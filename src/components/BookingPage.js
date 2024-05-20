import { useState, useReducer } from "react"
import BookingForm from "./BookingForm"
import { fetchAPI, submitAPI } from "../API"
import { useNavigate } from "react-router-dom";

function BookingPage() {

  const [date, setDate] = useState(new Date())

  function initializeTimes(date) {
    return fetchAPI(date)
  }

  function updateTimes(date) {
    return fetchAPI(new Date(date))
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const response = submitAPI(formData);

    if (response) {
      navigate("/confirmed");
    }
  }

  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
    return (
      <BookingForm  availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    )
}

export default BookingPage;