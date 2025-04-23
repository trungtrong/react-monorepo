import { createSlice } from '@reduxjs/toolkit';

import { IProductsState } from './products-active.model';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppStateFeatureKeysEnum } from '../../../../shared/store/src/feature-keys.enums';

const initialState: IProductsState = {
  productsCount: 0
};

export const ProductsSlice = createSlice({
  name: AppStateFeatureKeysEnum.Products,
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },
    increaseProductCount(
      state: IProductsState,
    ) {
      state.productsCount = state.productsCount + 1;
    },

    decreaseProductCount(
      state: IProductsState,
    ) {
      state.productsCount = state.productsCount - 1;
    },
  },
});
