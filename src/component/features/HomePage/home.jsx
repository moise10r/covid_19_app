import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { getAllCases, getCountryCases } from '../../../store/features/casesSlice';
import './home.scss';
import continent from './europe.png';
import continentMap from './europ_map.png';
import TopBar from '../../common/jsx/TopBar/topBar';
import casesCounter from '../../../utils/casesCounter';

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
                 <li key={country} role="menuitem" className="country" onClick={() => dispatch(getCountryCases(country))} onKeyPress={() => {}}>
                   <Link to={`/${country}`}>
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
                   </Link>
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
