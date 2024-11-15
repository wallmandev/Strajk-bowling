import { useLocation, useNavigate } from 'react-router-dom';
import { BookingResponse } from '../types';
import logo from '../images/logo.svg'
import './Confirmation.scss';
import Navbar from './Navbar';

const Confirmation = () => {
  const location = useLocation();
  const { bookingData } = location.state as { bookingData: BookingResponse };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const time = date.toLocaleTimeString('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const datePart = date.toLocaleDateString('sv-SE', {
      day: 'numeric',
      month: 'short',
    });

    return `${time}, ${datePart}`;


    
  };
  
  const navigate = useNavigate();
  const clickedButton = () => {
    navigate('/Booking');
  }
  return (

    <div className="confirmation">
      <div className="confirmation-inner">
        <Navbar />

        {/* LOGO */}
          <img src={logo} alt="" className="confirmation-logo" />
          <p className="confirmation-logo__text">SEE YOU SOON!</p>

        <div className="confirmation-container">

          {/* CONTENT */}
          <div className="confirmation-header">
            <h2 className="confirmation-header__content">Booking Details</h2>
          </div>

          <label className="confirmation-label">
            <p className="confirmation-label__text">WHEN:</p>
            <p className="confirmation-label__content">{formatDate(bookingData.when)}</p>
          </label>

          <label className="confirmation-label">
            <p className="confirmation-label__text">WHO:</p>
            <p className="confirmation-label__content">{bookingData.people} pers</p>
          </label>

          <label className="confirmation-label">
          <p className="confirmation-label__text">LANES:</p>
            <p className="confirmation-label__content">{bookingData.lanes} lane</p>
          </label>

          <label className="confirmation-label">
          <p className="confirmation-label__text confirmation-label__text-booking">BOOKING NUMBER:</p>
            <p className="confirmation-label__content">{bookingData.id}</p>
          </label>

          <label className="confirmation-label confirmation-label__total">
          <p className="confirmation-label__text confirmation-label__text--total">TOTAL:</p>
            <p className="confirmation-label__content confirmation-label__content--total">{bookingData.price} SEK</p>
          </label>

        </div>
        <button onClick={clickedButton} className="confirmation-button">SWEET, LETS GO!</button>
      </div>
    </div>
  );
};

export default Confirmation;