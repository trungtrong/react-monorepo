import { memo } from 'react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { Button } from './../../../shared/ui/src/ui';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
    useAppDispatch,
    useAppSelector,
} from './../../../shared/store/src/public_api';
import { ProductsSelector } from './store/products-active.selectors';
import { ProductsActions } from './store/products-active.actions';

export function Products() {
    const dispatch = useAppDispatch();
    const productCount = useAppSelector(ProductsSelector.getProductsCount);

    return (
        <div className="p-1 m-1px bg-primary-50 truncate button-red">
            <h1>Welcome to Products!</h1>
            <div className='flex flex-row gap-1'>
                <Button
                    aria-label="Decrement productCount"
                    onClick={() => dispatch(ProductsActions.decreaseProductCount())}
                >
                    Decrease
                </Button>
                <span aria-label="Count">{productCount}</span>
                <Button
                    aria-label="Increment productCount"
                    onClick={() => dispatch(ProductsActions.increaseProductCount())}
                >
                    Increase
                </Button>
            </div>
        </div>
    );
}

export default memo(Products);
