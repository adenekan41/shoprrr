import shopTypes from './shop.types';

const initialState = {
  collections: {},
  isLoading: false,
  errors: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopTypes.SHOP_FETCHING_START:
      return {
        ...state,
        isLoading: true,
      };
    case shopTypes.SHOP_FETCHING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: action.payload,
      };
    case shopTypes.SHOP_FETCHING_FALIURE:
      return {
        ...state,
        collections: {},
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
