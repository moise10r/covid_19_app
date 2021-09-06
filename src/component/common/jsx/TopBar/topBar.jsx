import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosArrowBack } from 'react-icons/io';

const TopBar = () => (
  <div className="top-navbar">
    <div className="left-container">
      <span>
        <IconContext.Provider value={{ className: 'back' }}>
          <IoIosArrowBack />
        </IconContext.Provider>
      </span>
      <span>2021</span>
    </div>
  </div>
);

export default TopBar;
