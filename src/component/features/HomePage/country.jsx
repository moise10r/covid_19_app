import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import propTypes from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { getCountryCases } from '../../../store/features/casesSlice';
import continentMap from './europ_map.png';

const Country = ({ country, confirmed }) => {
  const dispatch = useDispatch();

  return (
    <li key={country} role="menuitem" className="country" onClick={() => dispatch(getCountryCases(country))} onKeyPress={() => {}}>
      <Link to={`/country/${country}`}>
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
  );
};

Country.propTypes = {
  country: propTypes.string.isRequired,
  confirmed: propTypes.string.isRequired,
};

export default Country;
