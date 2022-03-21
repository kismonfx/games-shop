import {createAction, props} from "@ngrx/store";
import {Product} from "../../models/product.model";

export enum EFavouritesActions{
  GET_FAVOURITES = "[Favourites] Get Favourites",
  GET_FAVOURITES_SUCCESS = "[Favourites] Get Favourites Success",

  ADD_FAVOURITE = "[Favourites] Add Favourite",
  ADD_FAVOURITE_SUCCESS = "[Favourites] Add Favourite Success",

  DELETE_FAVOURITE = "[Favourites] Delete Favourite",
  DELETE_FAVOURITE_SUCCESS = "[Favourites] Delete Favourite Success",
}

export const getFavourites = createAction(EFavouritesActions.GET_FAVOURITES);
export const getFavouritesSuccess = createAction(EFavouritesActions.GET_FAVOURITES_SUCCESS, props<{ favourites: Product[] }>());

export const addFavourite = createAction(EFavouritesActions.ADD_FAVOURITE, props<{ productId: string }>());
export const addFavouriteSuccess = createAction(EFavouritesActions.ADD_FAVOURITE_SUCCESS, props<{ favourite: Product }>());

export const deleteFavourite = createAction(EFavouritesActions.DELETE_FAVOURITE, props<{ productId: string }>());
export const deleteFavouriteSuccess = createAction(EFavouritesActions.DELETE_FAVOURITE_SUCCESS, props<{ productId: string }>());
