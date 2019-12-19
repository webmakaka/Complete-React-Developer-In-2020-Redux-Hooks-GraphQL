import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from 'firebase/firebase.utils';

import CollectionsOverview from 'components/collections-overview/CollectionsOverview';

import CollectionPage from 'pages/collection/CollectionPage';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
