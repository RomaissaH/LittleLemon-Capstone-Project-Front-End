import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './components/HomePage';
import About from './components/About';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        <Route path="/menu" element={<ComingSoon />}></Route>
        <Route path="/order-online" element={<ComingSoon />}></Route>
        <Route path="/login" element={<ComingSoon />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;