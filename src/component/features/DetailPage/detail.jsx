import React from 'react';
import TopBar from '../../common/jsx/TopBar/topBar';
import continentMap from '../HomePage/europ_map.png';
import './detail.scss';

const Detail = () => (
  <>
    <TopBar />
    <div className="main-detail-section">
      <div className="main-detail-wrapper">
        <div className="continent-container">
          <div className="left-container">
            <div className="img-wrapper">
              <div className="bg" />
              <img src={continentMap} alt="continent-img" />
            </div>
          </div>
          <div className="right-container">
            <div className="content-wrapper">
              <h1>CZECH REPUBLIC</h1>
              <span>28339</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Detail;
