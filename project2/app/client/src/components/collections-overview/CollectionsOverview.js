import React, { useContext } from 'react';

import CollectionPreview from 'components/collection-preview/CollectionPreview';
import CollectionsContext from 'contexts/collections/collections.context';

import 'components/collections-overview/CollectionsOverview.scss';

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    key => collectionsMap[key]
  );

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
