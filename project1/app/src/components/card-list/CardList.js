import React from 'react';
import { Card } from 'components/card/Card.js';
import 'components/card-list/CardList.css';

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
