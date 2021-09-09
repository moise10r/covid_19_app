import React from 'react';
import continents from '../../../services/continentList';
import TopBar from '../../common/jsx/TopBar/topBar';
import './filterByContinent.scss';

const FilterByContinent = () => (
  <>
    <TopBar year={null} title="Select a continent" />
    <div className="continents-container">
      <ul className="continent-list">
        {
          continents.map(({ id, name }) => (
            <li key={id} className="continent">{name}</li>
          ))
        }
      </ul>
    </div>
  </>
);

export default FilterByContinent;
