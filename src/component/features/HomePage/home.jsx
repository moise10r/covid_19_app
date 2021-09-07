import React from 'react';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import './home.scss';
import continent from './europe.png';
import continentMap from './europ_map.png';
import TopBar from '../../common/jsx/TopBar/topBar';

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <>
      <TopBar />
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
          <div className="countries-container">
            <h2 className="title">STATS BY COUNTRY</h2>
            <ul className="countries-list">
              <li className="country">
                <div className="img-wrapper">
                  <div className="bg" />
                  <img src={continentMap} alt="continent-img" />
                </div>
                <div className="content">
                  <h2 className="name">France</h2>
                  <span className="cases">3346</span>
                </div>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                <BiRightArrowCircle />
              </IconContext.Provider>
                </span>
              </li>
              <li className="country">
                <div className="img-wrapper">
                  <div className="bg" />
                  <img src={continentMap} alt="continent-img" />
                </div>
                <div className="content">
                  <h2 className="name">France</h2>
                  <span className="cases">3346</span>
                </div>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                <BiRightArrowCircle />
              </IconContext.Provider>
                </span>
              </li>
              <li className="country">
                <div className="img-wrapper">
                  <div className="bg" />
                  <img src={continentMap} alt="continent-img" />
                </div>
                <div className="content">
                  <h2 className="name">France</h2>
                  <span className="cases">3346</span>
                </div>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                <BiRightArrowCircle />
              </IconContext.Provider>
                </span>
              </li>
              <li className="country">
                <div className="img-wrapper">
                  <div className="bg" />
                  <img src={continentMap} alt="continent-img" />
                </div>
                <div className="content">
                  <h2 className="name">France</h2>
                  <span className="cases">3346</span>
                </div>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                <BiRightArrowCircle />
              </IconContext.Provider>
                </span>
              </li>
              <li className="country">
                <div className="img-wrapper">
                  <div className="bg" />
                  <img src={continentMap} alt="continent-img" />
                </div>
                <div className="content">
                  <h2 className="name">France</h2>
                  <span className="cases">3346</span>
                </div>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                <BiRightArrowCircle />
              </IconContext.Provider>
                </span>
              </li>
              <li className="country">
                <div className="img-wrapper">
                  <div className="bg" />
                  <img src={continentMap} alt="continent-img" />
                </div>
                <div className="content">
                  <h2 className="name">France</h2>
                  <span className="cases">3346</span>
                </div>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                <BiRightArrowCircle />
              </IconContext.Provider>
                </span>
              </li>
              <li className="country">
                <div className="img-wrapper">
                  <div className="bg" />
                  <img src={continentMap} alt="continent-img" />
                </div>
                <div className="content">
                  <h2 className="name">France</h2>
                  <span className="cases">3346</span>
                </div>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                <BiRightArrowCircle />
              </IconContext.Provider>
                </span>
              </li>
              <li className="country">
                <div className="img-wrapper">
                  <div className="bg" />
                  <img src={continentMap} alt="continent-img" />
                </div>
                <div className="content">
                  <h2 className="name">France</h2>
                  <span className="cases">3346</span>
                </div>
                <span className="extend">
                  <IconContext.Provider value={{ className: 'icon ' }}>
                <BiRightArrowCircle />
              </IconContext.Provider>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
