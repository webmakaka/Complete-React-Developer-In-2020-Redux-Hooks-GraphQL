import React from 'react';
import 'components/card-list/Card.css';

export const Card = ({ monster }) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${monster.id}?set=set2&size=200x180`}
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);
