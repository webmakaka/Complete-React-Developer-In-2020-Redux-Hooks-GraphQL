import React from 'react';

import 'components/collection-item/CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span classNam="name">{name}</span>
        <span classNam="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
