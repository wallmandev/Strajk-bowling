import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} /> 
      </Routes>
    </Router>
  );
}

export default App;
