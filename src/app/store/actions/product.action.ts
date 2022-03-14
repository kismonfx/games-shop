import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product.model";
import { Update } from "@ngrx/entity";

export enum EProductActions{
  GET_PRODUCTS = "[Product] Get Products",
  GET_PRODUCTS_SUCCESS = "[Product] Get Products Success",

  GET_PRODUCT = "[Product] Get Product",
  GET_PRODUCT_SUCCESS = "[Product] Get Product Success",

  DELETE_PRODUCT = "[Product] Delete Product",
  DELETE_PRODUCT_SUCCESS = "[Product] Delete Product Success",

  ADD_PRODUCT = "[Product] Add Product",
  ADD_PRODUCT_SUCCESS = "[Product] Add Product Success",

  UPDATE_PRODUCT = "[Product] Update Product",
  UPDATE_PRODUCT_SUCCESS = "[Product] Update Product Success",

  SEARCH_PRODUCTS = "[Product] Search Products",
}

export const getProducts = createAction(EProductActions.GET_PRODUCTS, props<{ platform: string, genre: string }>());
export const getProductsSuccess = createAction(EProductActions.GET_PRODUCTS_SUCCESS, props<{ products: Product[] }>());

export const searchProducts = createAction(EProductActions.SEARCH_PRODUCTS, props<{ title: string }>());

export const getProduct = createAction(EProductActions.GET_PRODUCT, props<{ id: string }>());
export const getProductSuccess = createAction(EProductActions.GET_PRODUCT_SUCCESS, props<{ product: Product }>());

export const deleteProduct = createAction(EProductActions.DELETE_PRODUCT, props<{ id: string }>());
export const deleteProductSuccess = createAction(EProductActions.DELETE_PRODUCT_SUCCESS, props<{ id: string }>());

export const addProduct = createAction(EProductActions.ADD_PRODUCT, props<{ product: Product }>());
export const addProductSuccess = createAction(EProductActions.ADD_PRODUCT_SUCCESS, props<{ product: Product }>());

export const updateProduct = createAction(EProductActions.UPDATE_PRODUCT, props<{ id: string, product: Product }>());
export const updateProductSuccess = createAction(EProductActions.UPDATE_PRODUCT_SUCCESS, props<{ update: Update<Product> }>());
