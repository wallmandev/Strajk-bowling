import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button onClick={() => setIsOpen(!isOpen)} className="navbar-button">-</button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...{ className: "navbar-menu" }}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <ul className="navbar-list">
              <li className="navbar-list__item" onClick={() => navigate('/booking')}>Booking</li>
              <li className="navbar-list__item" onClick={() => navigate('/confirmation')}>Confirmation</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
