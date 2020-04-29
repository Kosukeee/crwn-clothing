import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Collection from '../collection/Collection';
import withSpinner from '../../components/with-spinner/withSpinner';

import { firestore, convertCollectionsToSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(Collection);

class Shop extends Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot  => {
      const collectionsMap = convertCollectionsToSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot  => {
    //   const collectionsMap = convertCollectionsToSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> } />
        <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);