import React from 'react';

import 'components/menu-item/MenuItem.scss';

export const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <spna className="subtitle">SHOW NOW </spna>
    </div>
  </div>
);
