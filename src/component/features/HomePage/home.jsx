import React from 'react';
import './home.scss';
import continent from './europe.png';

const Home = () => (
  <div className="main-home-section">
    <div className="main-home-wrapper">
      <div className="continent-container">
        <div className="left-container">
          <div className="img-wrapper">
            <div className="bg" />
            <img src={continent} alt="continent-img" />
          </div>
        </div>
        <div className="right-container">
          <div className="content-wrapper">
            <h1>Europe</h1>
            <span>28339</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
