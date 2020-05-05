import { createStructuredSelector } from 'reselect';
import { selectisLoading } from '../../redux/shop/shop.selectors';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from '../with-spinner/with-spinner.components';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectisLoading,
});
// This helps us a lot because compose reads from RTL
const collectionsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

// Or can be like this without compose
// const collectionsContainer = connect(mapStateToProps)(WithSpinner((CollectionsOverview)))
export default collectionsContainer;
