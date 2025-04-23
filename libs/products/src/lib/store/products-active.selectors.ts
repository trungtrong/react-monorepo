import { createSelector } from '@reduxjs/toolkit';


import { IProductsState } from './products-active.model';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  RootState
} from '../../../../shared/store/src/public_api';

export class ProductsSelector {
  private static getState = (state: RootState): IProductsState => {
    return state?.products as IProductsState;
  };

  static getProductsCount = createSelector(
    [this.getState],
    (state: IProductsState) => {
      return state?.productsCount;
    }
  );

  static increaseProductsCount = createSelector(
    [this.getState],
    (state: IProductsState) => {
      return state?.productsCount + 1;
    }
  );

  static decreaseProductsCount = createSelector(
    [this.getState],
    (state: IProductsState) => {
      return state?.productsCount - 1;
    }
  );
}
