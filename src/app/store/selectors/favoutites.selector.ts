import {createFeatureSelector, createSelector} from "@ngrx/store";
import {adapter, FavouritesState} from "../state/favourites.state";

export const selectFavouritesState = createFeatureSelector<FavouritesState>("favourites");

const {
  selectAll,
  selectIds,
} = adapter.getSelectors();

export const selectFavourites = createSelector(
  selectFavouritesState,
  selectAll,
);

export const selectFavouritesIds = createSelector(
  selectFavouritesState,
  selectIds,
);

export const selectFavouritesCount = createSelector(
  selectFavouritesState,
  (state) => state.ids.length,
);
