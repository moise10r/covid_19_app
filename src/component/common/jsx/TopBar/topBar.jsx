import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import './topBar.scss';

const TopBar = () => (
  <div className="top-navbar">
    <div className="main-wrapper">
      <div className="left-container">
        <Link to="/detail">
          <IconContext.Provider value={{ className: 'back' }}>
            <IoIosArrowBack />
          </IconContext.Provider>
        </Link>
        <span>2021</span>
      </div>
      <div className="center-container">
        <span>most views</span>
      </div>
      <div className="right-container">
        <span>
          <IconContext.Provider value={{ className: 'icon record ' }}>
            <FaMicrophone />
          </IconContext.Provider>
        </span>
        <span>
          <IconContext.Provider value={{ className: 'icon  settings' }}>
            <IoIosSettings />
          </IconContext.Provider>
        </span>
      </div>
    </div>
  </div>
);

export default TopBar;
