import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import './topBar.scss';

const TopBar = () => (
  <div className="top-navbar">
    <div className="main-wrapper">
      <div className="left-container">
        <span>
          <IconContext.Provider value={{ className: 'back' }}>
            <IoIosArrowBack />
          </IconContext.Provider>
        </span>
        <span>2021</span>
      </div>
      <div className="center-container">
        <span>most views</span>
      </div>
      <div className="right-container">
        <span>
          <IconContext.Provider value={{ className: 'back' }}>
            <FaMicrophone />
          </IconContext.Provider>
        </span>
        <span>
          <IconContext.Provider value={{ className: 'back' }}>
            <IoIosSettings />
          </IconContext.Provider>
        </span>
      </div>
    </div>
  </div>
);

export default TopBar;
