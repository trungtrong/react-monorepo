import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { ErrorInfo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppInitializer } from '@libs/shared/core/app-initializer';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ErrorBoundaryFallback } from '@libs/shared/ui/pages';
import { AppLayout } from './layouts';
// eslint-disable-next-line @nx/enforce-module-boundaries
import store from '@libs/shared/store/store';

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="*"
            element={<AppLayout />}
            errorElement={<ErrorBoundaryFallback />}
        />
    )
);

export function App() {
    return (
        <ErrorBoundary
            fallbackRender={() => <ErrorBoundaryFallback />}
            onError={(error: Error, info: ErrorInfo) => {
                console.error(error);
                console.error(info);
            }}
        >
            <Provider store={store}>
                <AppInitializer>
                    <RouterProvider router={AppRouter} />
                </AppInitializer>
            </Provider>
        </ErrorBoundary>
    );
}

export default App;
