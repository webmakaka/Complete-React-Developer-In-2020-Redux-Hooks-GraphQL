import React, { useContext } from 'react';

import DirectoryContext from 'contexts/directory/directory.context';

import MenuItem from 'components/menu-item/MenuItem';

import 'components/directory/Directory.scss';

const Directory = () => {
  const sections = useContext(DirectoryContext);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
