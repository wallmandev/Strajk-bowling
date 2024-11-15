import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bookLane } from '../api';
import { BookingRequest, BookingResponse } from '../types';
import BookingView from './Bookingview';

function Booking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [lanes, setLanes] = useState(1);
  const [shoes, setShoes] = useState<number[]>([]);
  const [bookingResponse, setBookingResponse] = useState<BookingResponse | null>(null);
  const navigate = useNavigate();

  const handleBooking = async () => {
    const bookingData: BookingRequest = {
      when: `${date}T${time}`,
      lanes,
      people,
      shoes,
    };
    try {
      const response = await bookLane(bookingData);
      setBookingResponse(response);
      navigate('/confirmation', { state: { bookingData: response } });
    } catch (error) {
      console.error("Error booking lane", error);
    }
  };

  return (
    <div>
      <BookingView
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        people={people}
        setPeople={setPeople}
        lanes={lanes}
        setLanes={setLanes}
        shoes={shoes}
        setShoes={setShoes}
        onBooking={handleBooking} // Skickar alla nödvändiga props för BookingView
      />
      {bookingResponse && <div>Booking confirmed: {JSON.stringify(bookingResponse)}</div>}
    </div>
  );
}

export default Booking;