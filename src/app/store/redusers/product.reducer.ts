import { createReducer, on } from "@ngrx/store";
import { adapter, ProductState } from "../state/product.state";
import * as ProductActions from "../actions/product.action";

export const initialState: ProductState = adapter.getInitialState({
  selectedProductId: "",
});

export const productReducer = createReducer(
  initialState,

  on(ProductActions.getProductsSuccess, (state, { products }) => {
    return adapter.setAll(products, {
      ...state,
      selectedProductId: ""
    });
  }),

  on(ProductActions.getProductSuccess, (state, { product }) => {
    return adapter.addOne(product, {
      ...state,
      selectedProductId: product._id
    });
  }),

  on(ProductActions.deleteProductSuccess, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),

  on(ProductActions.addProductSuccess, (state, { product }) => {
    return adapter.addOne(product, state);
  }),

  on(ProductActions.updateProductSuccess, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),

);
