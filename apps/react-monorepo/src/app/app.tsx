import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// const environment = require('../../../../libs/shared/core/src/environments');
// eslint-disable-next-line @nx/enforce-module-boundaries
import environment from '../../../../libs/shared/core/src/environments';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppInitializer } from '../../../../libs/shared/core/src/public_api';
// eslint-disable-next-line @nx/enforce-module-boundaries
/*
TODO: Fix Absolute import
- We cannot use import "@react-monorepo/"
+ it breaks detecting Dependencies when we import 2 libs in the same file.
// import { Orders } from '@react-monorepo/orders';
// import { Products } from '@react-monorepo/products';
*/

// eslint-disable-next-line @nx/enforce-module-boundaries
const Products = lazy(() => import('../../../../libs/products/src/lib/products'));
// eslint-disable-next-line @nx/enforce-module-boundaries
const Orders = lazy(() => import('../../../../libs/orders/src/lib/orders'));

function Home() {
    console.log(environment);
    return (
        <h1 className="bg-primary-100 m-0.5">
            Welcome react-store {environment.ENV_NAME}
        </h1>
    );
}
export function App() {
    return (
        <AppInitializer>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
            </Routes>
        </AppInitializer>
    );
}

export default App;
