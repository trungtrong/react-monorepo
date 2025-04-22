import { useCallback, useEffect, useRef, useState } from 'react';

import { UsersService } from '../services/UsersService';
import useApiMutation from '../hooks/useApiMutation';
import { useInject } from '../injector';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UserStorage } from './../../../utils';

const useAppInitializer = () => {
    const usersServiceRef = useRef(useInject<UsersService>(UsersService.dependencyName));

    const [isInitializer, setIsInitializer] = useState(false);
    //
    const { mutate: getApisInitializedMutate } = useApiMutation({
        mutationFn: () => {
            return Promise.all([
                usersServiceRef.current.getUserInfo()
            ]);
        },
        onSuccess: ([userInfo]) => {
            // Store Response Data
            console.log(userInfo);
        },
        onError: () => {
            signOut();
        },
        onSettled: () => {
            setIsInitializer(() => {
                return true;
            });
        },
    });

    useEffect(() => {
        if (UserStorage.isLoggedIn()) {
            getApisInitializedMutate();
        } else {
            signOut();
            setIsInitializer(() => {
                return true;
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signOut = useCallback(() => {
      //
    }, []);

    return isInitializer;
};

export default useAppInitializer;
