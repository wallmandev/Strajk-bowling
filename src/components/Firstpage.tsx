import { Link } from 'react-router-dom';
import './Firstpage.scss';
import logo from '../images/logo.svg';
import text from '../images/Frame 1.svg';

function Firstpage() {
  return (
    <>
      <div className="Firstpage">
        <Link className="Firstpage__container" to="/booking">
          <img className="Firstpage__image" src={logo} alt="Strajk Bowling Logo" />
          <img className="Firstpage__image" src={text} alt="Strajk Bowling Logo" />
        </Link>
      </div>
    </>
  );
}

export default Firstpage;