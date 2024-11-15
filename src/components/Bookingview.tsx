import React, { useEffect} from 'react';
import './Bookingview.scss';
import logo from '../images/logo.svg'
import Navbar from './Navbar';

interface BookingViewProps {
  date: string;
  setDate: (date: string) => void;
  time: string;
  setTime: (time: string) => void;
  people: number;
  setPeople: (people: number) => void;
  lanes: number;
  setLanes: (lanes: number) => void;
  shoes: number[];
  setShoes: (shoes: number[]) => void;
  onBooking: () => void;
}

function BookingView({
  date,
  setDate,
  time,
  setTime,
  people,
  setPeople,
  lanes,
  setLanes,
  shoes,
  setShoes,
  onBooking,
}: BookingViewProps) {
  const handleAddShoeSize = () => {
    setShoes([...shoes, 0]);
  };

  const handleRemoveShoeSize = (index: number) => {
    setShoes(shoes.filter((_, i) => i !== index));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split('T')[0]; // Dagens datum i YYYY-MM-DD-format

    if (selectedDate < today) {
      alert("Välj ett datum som inte redan varit");
    } else {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTime = e.target.value;
    const maxTime = "21:00";

    if (selectedTime > maxTime) {
      alert("Välj en tid som inte är senare än 21:00");
      setTime(maxTime); // Återställer till maxvärdet om tiden är senare än 21:00
    } else {
      setTime(selectedTime);
    }
  };

  const handleBookingClick = () => {
    if (!date) {
      alert("Välj ett datum");
      return;
    }
    if (!time) {
      alert("Välj en tid");
      return;
    }
    if (!people) {
      alert("Ange antal personer");
      return;
    }
    if (!shoes) {
      alert("Ange skostorlek");
      return;
    }
    if (!lanes) {
      alert("Ange antal banor");
    return;
    }
    if (people > shoes.length){
      alert ("Ange lika många skor som bowlare")
    return;
    } else if (shoes.length > people) {
      alert ("Ange lika många bowlare som skor")
    } return;
    onBooking();
  };

  useEffect(() => {
    if (people > 12){
      setLanes(4);
    }
    else if (people > 8) {
      setLanes(3);
    } else if (people > 4) {
      setLanes(2);
    } else {
      setLanes(1);
    }
  }, [people, setLanes]);

  const today = new Date().toISOString().split('T')[0]; // Dagens datum i YYYY-MM-DD-format

  return (
    <div className="booking">
      <div className="booking-inner">
        <Navbar />
        <img src={logo} className="booking-logo"/>
        <h2 className="booking-logo__text">BOOKING</h2>

        <div className="booking-header">
          <label className="input-container input-container__when">WHEN, WHAT & WHO</label>
        </div>

        <div className="booking-form">
          <div className="booking-form__when">
            <div className="input-container">
              <label htmlFor="date">DATE</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                min={today}
              />
            </div>

            <div className="input-container input-container__time">
              <label htmlFor="time">TIME</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={handleTimeChange}
                step="900"
                max="21:00"
              />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="bowlers">NUMBER OF AWESOME BOWLERS</label>
            <div className="people-input__container">
              <input
                type="number"
                id="bowlers"
                min={1}
                value={people || ''}
                onChange={(e) => setPeople(Number(e.target.value))}
              />
              <span className="people-prefix">pers</span>
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="lanes">NUMBER OF LANES</label>

            <div className="lanes-input__container">
                <input
                  type="number"
                  id="lanes"
                  min={1}
                  value={lanes || ''}
                  onChange={(e) => setLanes(Number(e.target.value))}
                />
              <span className="lanes-prefix">lane</span>
            </div>
          </div>

          {/* SHOES */}
          <div className="booking-form__shoes">
            <div className="booking-form__shoes-container"></div>

            <label className="booking-form__shoes-header">SHOES</label>

            <div className="shoes__container">
              {shoes.map((size, index) => (
                <div className="shoes__item" key={index}>

                <div className="input-container input-container__shoes">

                  <label>SHOE SIZE / PERSON {index + 1}</label>

                  <div className="shoe-size-input-container">

                    <span className="euro-prefix">Euro</span>
                    <input
                      type="number"
                      id="shoes"
                      placeholder={`Size / Person ${index + 1}`}
                      value={size || ''}
                      onChange={(e) => {
                        const newShoes = [...shoes];
                        newShoes[index] = Number(e.target.value);
                        setShoes(newShoes);
                      }}
                    />
                  </div>
                </div>
                <button className="remove-button" onClick={() => handleRemoveShoeSize(index)}>
                  -
                </button>
              </div>              
              ))}
              <button className="shoes__addshoe" onClick={handleAddShoeSize}>
                +
              </button>
            </div>
          </div>

          {/* STRIIIIKE Button */}
          <button className="booking-strike__button" onClick={handleBookingClick}>
            STRIIIIKE!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingView;