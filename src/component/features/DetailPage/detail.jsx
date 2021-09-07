import React from 'react';
import { IconContext } from 'react-icons';
import { BiRightArrowCircle } from 'react-icons/bi';
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
        <div className="towns-container">
          <h2 className="title">CITY/TOWN BREAKDOWN - 2021</h2>
          <ul className="towns-list">
            <li className="town">
              <div className="left-container">
                <h2 className="name">Prague</h2>
              </div>
              <div className="right-container">
                <span>453 cases</span>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                    <BiRightArrowCircle />
                  </IconContext.Provider>
                </span>
              </div>
            </li>
            <li className="town">
              <div className="left-container">
                <h2 className="name">Prague</h2>
              </div>
              <div className="right-container">
                <span>453 cases</span>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                    <BiRightArrowCircle />
                  </IconContext.Provider>
                </span>
              </div>
            </li>
            <li className="town">
              <div className="left-container">
                <h2 className="name">Prague</h2>
              </div>
              <div className="right-container">
                <span>453 cases</span>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                    <BiRightArrowCircle />
                  </IconContext.Provider>
                </span>
              </div>
            </li>
            <li className="town">
              <div className="left-container">
                <h2 className="name">Prague</h2>
              </div>
              <div className="right-container">
                <span>453 cases</span>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                    <BiRightArrowCircle />
                  </IconContext.Provider>
                </span>
              </div>
            </li>
            <li className="town">
              <div className="left-container">
                <h2 className="name">Prague</h2>
              </div>
              <div className="right-container">
                <span>453 cases</span>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                    <BiRightArrowCircle />
                  </IconContext.Provider>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Detail;
