import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { ErrorInfo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppInitializer } from '../../../../libs/shared/core/src/public_api';
// eslint-disable-next-line @nx/enforce-module-boundaries
import ErrorBoundaryFallback from '../../../../libs/shared/ui/src/pages/ErrorBoundaryFallback';
import { AppLayout } from '../layouts';
// eslint-disable-next-line @nx/enforce-module-boundaries

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
            <AppInitializer>
                <RouterProvider router={AppRouter} />
            </AppInitializer>
        </ErrorBoundary>
    );
}

export default App;
