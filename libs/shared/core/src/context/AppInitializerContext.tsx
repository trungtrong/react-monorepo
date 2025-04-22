import { toast } from '@elstar/ui';
import React, { useEffect } from 'react';

import { CommonProps } from '@/shared/models';

const AppInitializerContext = React.createContext({});
const AppInitializerProvider = AppInitializerContext.Provider;

const AppInitializer = (props: CommonProps) => {
    useEffect(() => {
        toast.init();

        return () => {
            toast.removeAll();
        };
    });

    return (
        <AppInitializerProvider value={{}}>
            {props.children}
        </AppInitializerProvider>
    );
};

export default AppInitializer;
