import React from 'react';

import 'components/search-box/SearchBox.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
