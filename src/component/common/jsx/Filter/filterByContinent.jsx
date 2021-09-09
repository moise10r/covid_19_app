import React from 'react';
import continents from '../../../../services/continentList';

const FilterByContinent = () => (
  <div className="continents-container">
    <ul className="continent-list">
      {
        continents.map(({ id, name }) => (
          <li key={id} className="continent">{name}</li>
        ))
      }
    </ul>
  </div>
);

export default FilterByContinent;
