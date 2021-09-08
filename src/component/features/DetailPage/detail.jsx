/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { getCountryCases } from '../../../store/features/casesSlice';
import TopBar from '../../common/jsx/TopBar/topBar';
import continentMap from '../HomePage/europ_map.png';
import './detail.scss';

const Detail = () => {
  const { current } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { country } = useParams();
  useEffect(() => {
    dispatch(getCountryCases(country));
  }, []);
  const { All } = current;
  return (
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
                <h1>{All.country}</h1>
                <span>{All.confirmed.toLocaleString('en-US')}</span>
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
};

export default Detail;
