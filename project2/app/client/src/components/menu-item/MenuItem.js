import React from 'react';

import 'components/menu-item/MenuItem.scss';

export const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <spna className="subtitle">SHOW NOW </spna>
    </div>
  </div>
);
