import { createStructuredSelector } from 'reselect';
import { selectisLoading } from '../../redux/shop/shop.selectors';

import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.components';
import CategoryPage from './category.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => selectisLoading(state),
});

// const categoryContainer = () =>
//   compose(connect(mapStateToProps), WithSpinner)(CategoryPage);
const categoryContainer = connect(mapStateToProps)(WithSpinner(CategoryPage))
export default categoryContainer;
