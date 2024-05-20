import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import About from './components/About';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';
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