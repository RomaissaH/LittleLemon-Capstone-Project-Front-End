import { useEffect, useReducer } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { fetchAPI, submitAPI } from "../API"
import HomePage from './HomePage';
import About from '../components/About';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import ComingSoon from './ComingSoon';
import NotFound from './NotFound';
import ScrollToTop from '../components/ScrollToTop';


export function initialiseTimes() {
    return { times: [] };
};

export function updateTimes(state, action) {
    const { type, payload } = action;
    switch (type) {
      case 'UPDATE_TIMES':
        return {
          ...state,
          times: payload.times,
        };
      default:
        return state;
    }
};

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initialiseTimes());
    const navigate = useNavigate();

    function submitForm(formData) {
        const response = submitAPI(formData);

        if (response) {
          navigate("/confirmed");
        }
    }

    const handleDateChange = async (date) => {
        try {
            const result = await fetchAPI(date);
            dispatch({ type: 'UPDATE_TIMES', payload: { times: result } });
        } catch {
            dispatch({ type: 'UPDATE_TIMES', payload: { times: [] } });
        }
    };

    useEffect(() => {
        handleDateChange(new Date().toJSON().slice(0, 10));
    }, []);

  return (
    <main>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking" element={<BookingPage
            availableTimes={availableTimes.times}
            dispatch={handleDateChange}
            submitForm={submitForm}/>}>
        </Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        <Route path="/menu" element={<ComingSoon />}></Route>
        <Route path="/order-online" element={<ComingSoon />}></Route>
        <Route path="/login" element={<ComingSoon />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
