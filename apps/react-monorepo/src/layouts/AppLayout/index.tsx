import { Outlet, Route, Routes } from 'react-router-dom';
import { lazy, memo, Suspense } from 'react';

// const environment = require('../../../../libs/shared/core/src/environments');
// eslint-disable-next-line @nx/enforce-module-boundaries
import environment from '../../../../../libs/shared/core/src/environments';
// eslint-disable-next-line @nx/enforce-module-boundaries
import useAppInitializer from '../../../../../libs/shared/core/src/app-initializer/useAppInitializer';

/*
TODO: Fix Absolute import
- We cannot use import "@react-monorepo/"
+ it breaks detecting Dependencies when we import 2 libs in the same file.
// import { Orders } from '@react-monorepo/orders';
// import { Products } from '@react-monorepo/products';
*/
// eslint-disable-next-line @nx/enforce-module-boundaries
const Products = lazy(
    // eslint-disable-next-line @nx/enforce-module-boundaries
    () => import('../../../../../libs/products/src/lib/products')
);
// eslint-disable-next-line @nx/enforce-module-boundaries
const Orders = lazy(() => import('../../../../../libs/orders/src/lib/orders'));

interface AppLayoutProps {
    isInitializer: boolean;
}

function Home() {
    console.log(environment);
    return (
        <h1 className="bg-primary-100 m-0.5">
            Welcome react-store {environment.ENV_NAME}
        </h1>
    );
}

const Layout = ({ isInitializer }: AppLayoutProps) => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
            </Route>

            {/* <Route path="/" element={<Home />}>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
            </Route> */}
        </Routes>
    );
};

const LayoutMemo = memo(Layout);

const AppLayout = () => {
    const isInitializer = useAppInitializer();

    return (
        <Suspense
            fallback={<div className="flex flex-auto flex-col h-[100vh]"></div>}
        >
            <LayoutMemo isInitializer={isInitializer}></LayoutMemo>
        </Suspense>
    );
};

export default memo(AppLayout);
