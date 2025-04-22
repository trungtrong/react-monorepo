import axios, {
    AxiosError,
    AxiosRequestConfig,
    AxiosResponse,
    HttpStatusCode,
} from 'axios';

//
import {
   ERROR_SOMETHING_BAD_HAPPENED,
    REQUEST_HEADER_AUTH_KEY,
    SERVER_ERROR,
    TOKEN_TYPE,
    USER_TOKEN,
    WARNING_YOUR_SESSION_HAS_EXPIRED,
} from '../constants';
import { AppErrorCode } from '../enums';
import { ApiErrorModel } from '../models';
import environment from '../environments';
import { RoutePathsEnum } from '../configs';
// @ts-ignore
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppStorage } from './../../../utils';

const BaseService = axios.create({
    baseURL: environment.ENV_API_BASE_URL,
    withCredentials: true,
} as AxiosRequestConfig);


BaseService.interceptors.request.use(
    (config) => {
        const accessToken = AppStorage.getStorageValue({
            storage: 'local',
            key: USER_TOKEN,
            valueType: 'string',
            isDecode: true,
        });

        if (accessToken) {
            config.headers[
                REQUEST_HEADER_AUTH_KEY
            ] = `${TOKEN_TYPE}${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

BaseService.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error: AxiosError<ApiErrorModel>) => {
        const { response } = error;
        if (!response) {
            return Promise.reject(error);
        }
        //
        let errorCode: AppErrorCode = response?.data?.code as unknown as AppErrorCode;
        let messageError: string;
        switch (response.status) {
            case HttpStatusCode.Unauthorized:
                // UserStorage.clearStorage();
                //
                errorCode = AppErrorCode.Warning;
                messageError = WARNING_YOUR_SESSION_HAS_EXPIRED;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                window.location.href =
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    window.location.origin + RoutePathsEnum.SignIn;
                break;
            case HttpStatusCode.Forbidden:
                messageError = ERROR_SOMETHING_BAD_HAPPENED;
                break;
            default:
                messageError = response?.data?.message?.trim()
                    ? response?.data?.message?.trim()
                    : SERVER_ERROR;
                break;
        }
        switch (errorCode) {
            case AppErrorCode.Error:
                console.error({ message: messageError });
                break;
            case AppErrorCode.Warning:
                console.info({ message: messageError });
                break;
            case AppErrorCode.Info:
                console.info({ message: messageError });
                break;
            default:
                console.error({ message: messageError });
                break;
        }

        return Promise.reject(error);
    }
);

export default BaseService;
