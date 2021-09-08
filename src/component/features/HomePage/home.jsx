import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCases } from '../../../store/features/casesSlice';
import continent from './europe.png';
import TopBar from '../../common/jsx/TopBar/topBar';
import casesCounter from '../../../utils/casesCounter';
import Country from './country';
import './home.scss';

const Home = () => {
  const { cases } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCases());
  }, []);
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
                <span>
                  {`${casesCounter(cases)} cases`}
                </span>
              </div>
            </div>
          </div>
          <div className="countries-container">
            <h2 className="title">STATS BY COUNTRY</h2>
            <ul className="countries-list">
              {
               cases.map(({ confirmed, country }) => (
                 <Country key={country} country={country} confirmed={confirmed} />
               ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
