import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import HomePage from './components/HomePage';
import About from './components/About';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" exact element={<HomePage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      {/*<Route path="/confirmed" element={<ConfirmedBooking />}></Route>*/}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;