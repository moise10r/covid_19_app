import React from 'react';
import { Link } from 'react-router-dom';
import continents from '../../../services/continentList';
import TopBar from '../../common/jsx/TopBar/topBar';
import './filterByContinent.scss';

const FilterByContinent = () => (
  <>
    <TopBar year="" title="Select a continent" />
    <div className="continents-container">
      <ul className="continent-list">
        {
          continents.map(({ id, name }) => (
            <li key={id} className="continent">
              <Link to={`/continent/${name}`}>
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </>
);

export default FilterByContinent;
