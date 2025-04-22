import { useEffect } from 'react';
import { ICommonProps } from '../models';
import useAppInitializer from './useAppInitializer';


const AppInitializer = (props: ICommonProps) => {
  const isInitializer = useAppInitializer();

    useEffect(() => {
        // toast.init();

        return () => {
            // toast.removeAll();
        };
    });

    return (
        <>
            {props.children}
        </>
    );
};

export default AppInitializer;
