import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPrview } from 'redux/selectors/shop.selectors';

import CollectionPreview from 'components/collection-preview/CollectionPreview';

import 'components/collections-overview/CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPrview
});

export default connect(mapStateToProps)(CollectionsOverview);
