import React, { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { getCasesByContinent } from '../../../store/features/casesSlice';
import './home.scss';
import continent from './europe.png';
import continentMap from './europ_map.png';
import TopBar from '../../common/jsx/TopBar/topBar';
import casesCounter from '../../../utils/casescCounter';

const Home = () => {
  const { cases } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCountryName = (country) => {
    console.log(country);
  };

  console.log(casesCounter(cases));
  useEffect(() => {
    if (cases.length === 0) dispatch(getCasesByContinent());
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
                  <li role="menuitem" key={country} className="country" onClick={() => handleCountryName(country)} onKeyPress={() => {}}>
                    <div className="img-wrapper">
                      <div className="bg" />
                      <img src={continentMap} alt="continent-img" />
                    </div>
                    <div className="content">
                      <h2 className="name">{country}</h2>
                      <span className="cases">{`${confirmed.toLocaleString('en-US')} cases`}</span>
                    </div>
                    <span className="extend">
                      <IconContext.Provider value={{ className: 'icon ' }}>
                        <BiRightArrowCircle />
                      </IconContext.Provider>
                    </span>
                  </li>
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
