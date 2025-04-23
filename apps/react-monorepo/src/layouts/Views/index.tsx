import { Outlet, Route, Routes } from 'react-router-dom';
import { lazy, memo } from 'react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import Home from '../../modules/Home';

/*
TODO: Fix Absolute import
- We cannot use import "@react-monorepo/"
+ it breaks detecting Dependencies when we import 2 libs in the same file.
// import { Orders } from '@react-monorepo/orders';
// import { Products } from '@react-monorepo/products';
*/
// eslint-disable-next-line @nx/enforce-module-boundaries
const ProductsModule = lazy(
    // eslint-disable-next-line @nx/enforce-module-boundaries
    () => import('../../../../../libs/products/src/lib/products.module')
);
// eslint-disable-next-line @nx/enforce-module-boundaries
const Orders = lazy(() => import('../../../../../libs/orders/src/lib/orders'));

const View = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<ProductsModule />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
            </Route>
        </Routes>
    );
};

export default memo(View);

