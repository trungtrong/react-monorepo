import { memo, Suspense } from 'react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { useAppInitializer } from '@libs/shared/core/app-initializer';
import Views from '../Views';
import Sidebar from '../Sidebar';
import styles from './index.module.css';

interface AppLayoutProps {
    isInitializer: boolean;
}

const AppLayout = () => {
    const isInitializer = useAppInitializer();

    return (
        <Suspense
            fallback={<div className="flex flex-auto flex-col h-[100vh]"></div>}
        >
            <div className={styles['app-container']}>
              <Sidebar></Sidebar>
              <Views></Views>
            </div>
        </Suspense>
    );
};

export default memo(AppLayout);
