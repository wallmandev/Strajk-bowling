import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookingResponse } from '../types';
import logo from '../images/logo.svg';
import './Confirmation.scss';
import Navbar from './Navbar';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as { bookingData?: BookingResponse } | undefined;
  const bookingData = state?.bookingData;

  const formatDate = (dateString: string | undefined) => {
    if (!dateString || dateString === 'DATA_MISSING') {
      return 'N/A';
    }
    const dateObj = new Date(dateString);
    if (isNaN(dateObj.getTime())) {
      return 'Invalid Date';
    }
    const timePart = dateObj.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' });
    const datePart = dateObj.toLocaleDateString('sv-SE', { day: 'numeric', month: 'short' });
    return `${timePart}, ${datePart}`;
  };
  
  const clickedButton = () => {
    navigate('/booking');
  };

  return (
    <div className="confirmation">
      <div className="confirmation-inner">
        <Navbar />
        <img src={logo} alt="" className="confirmation-logo" />
        <p className="confirmation-logo__text">SEE YOU SOON!</p>
        <div className="confirmation-container">
          <div className="confirmation-header">
            <h2 className="confirmation-header__content">Booking Details</h2>
          </div>
          <label className="confirmation-label">
            <p className="confirmation-label__text">WHEN:</p>
            <p className="confirmation-label__content">{formatDate(bookingData?.when)}</p>
          </label>
          <label className="confirmation-label">
            <p className="confirmation-label__text">WHO:</p>
            <p className="confirmation-label__content">{bookingData?.people ?? 0} pers</p>
          </label>
          <label className="confirmation-label">
            <p className="confirmation-label__text">LANES:</p>
            <p className="confirmation-label__content">{bookingData?.lanes ?? 0} lane</p>
          </label>
          <label className="confirmation-label">
            <p className="confirmation-label__text confirmation-label__text-booking">BOOKING NUMBER:</p>
            <p className="confirmation-label__content">{bookingData?.id ?? ''}</p>
          </label>
          <label className="confirmation-label confirmation-label__total">
            <p className="confirmation-label__text confirmation-label__text--total">TOTAL:</p>
            <p className="confirmation-label__content confirmation-label__content--total">{bookingData?.price ?? 0} SEK</p>
          </label>
        </div>
        <button onClick={clickedButton} className="confirmation-button">SWEET, LETS GO!</button>
      </div>
    </div>
  );
};

export default Confirmation;