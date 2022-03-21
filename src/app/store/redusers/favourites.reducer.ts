import {adapter} from "../state/product.state";
import {createReducer, on} from "@ngrx/store";
import {FavouritesState} from "../state/favourites.state";
import * as FavouritesActions from "../actions/favourites.action";

export const initialState: FavouritesState = adapter.getInitialState({});

export const favouritesReducer = createReducer(
  initialState,

  on(FavouritesActions.getFavouritesSuccess, (state, { favourites }) => {
    return adapter.setAll(favourites, state);
  }),

  on(FavouritesActions.addFavouriteSuccess, (state, { favourite }) => {
    return adapter.addOne(favourite, state);
  }),

  on(FavouritesActions.deleteFavouriteSuccess, (state, { productId }) => {
    return adapter.removeOne(productId, state);
  }),
);
