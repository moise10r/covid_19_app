import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import './topBar.scss';

const TopBar = ({ year, title }) => (
  <div className="top-navbar">
    <div className="main-wrapper">
      <div className="left-container">
        <Link to="/">
          <IconContext.Provider value={{ className: 'back' }}>
            <IoIosArrowBack />
          </IconContext.Provider>
        </Link>
        <span>{year}</span>
      </div>
      <div className="center-container">
        <span>{title}</span>
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

TopBar.propTypes = {
  year: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default TopBar;
