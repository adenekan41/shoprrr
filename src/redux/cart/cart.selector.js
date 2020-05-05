import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], cart =>
  cart.reduce(
    (accumulatedQuantity, cart) =>
      accumulatedQuantity + cart.quantity * cart.price,
    0
  )
);
export const selectCartItemsCount = createSelector([selectCartItems], cart =>
  cart.reduce(
    (accumulatedQuantity, cart) => accumulatedQuantity + cart.quantity,
    0
  )
);
