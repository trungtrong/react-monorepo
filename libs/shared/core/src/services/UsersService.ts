import {
    IUserLoggedIn,
} from '@/shared/models';

import { ApiService } from './ApiService';
import { ApiEndpoints } from './api-endpoints.constant';
import { Injectable } from '../injector/injector-root';

export class UsersService {
    static dependencyName: string = 'UsersService';

    public getUserInfo() {
        return ApiService.get<IUserLoggedIn>({
            url: `${ApiEndpoints.Users}/info`,
        });
    }
};

Injectable<UsersService>(UsersService.dependencyName, new UsersService());
