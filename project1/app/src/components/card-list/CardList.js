import React from 'react';
import { Card } from 'components/card-list/Card.js';
import 'components/card-list/CardList.css';

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <h1 key={monster.id}>
          <Card monster={monster} />
        </h1>
      ))}
    </div>
  );
};
