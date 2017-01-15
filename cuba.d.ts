/// <reference path="../node_modules/rx/ts/rx.lite.d.ts" />
/// <reference types="whatwg-fetch" />
/// <reference types="es6-promise" />
interface IResponseError extends Error {
    response?: any;
}
declare type ContentType = 'text' | 'json' | 'blob';
interface IFetchOptions extends RequestInit {
    handleAs?: ContentType;
}
declare class Cuba {
    name: string;
    apiUrl: string;
    restClientId: string;
    restClientSecret: string;
    defaultLocale: string;
    static REST_TOKEN_STORAGE_KEY: string;
    static USER_NAME_STORAGE_KEY: string;
    static LOCALE_STORAGE_KEY: string;
    loginSubject: Rx.Subject<{
        access_token: string;
    }>;
    tokenExpirySubject: Rx.Subject<{}>;
    messagesSubject: Rx.BehaviorSubject<any>;
    enumsSubject: Rx.BehaviorSubject<any>;
    localeSubject: Rx.BehaviorSubject<string>;
    constructor(name?: string, apiUrl?: string, restClientId?: string, restClientSecret?: string, defaultLocale?: string);
    restApiToken: string;
    locale: string;
    login(login: string, password: string): Promise<{
        access_token: string;
    }>;
    logout(): Promise<any>;
    loadEntities(entityName: any, options?: {
        view?: string;
        sort?: string;
        limit?: number;
        offset?: number;
    }): Promise<any[]>;
    loadEntity(entityName: any, id: any, options?: {
        view?: string;
    }): Promise<any>;
    deleteEntity(entityName: any, id: any): Promise<any>;
    commitEntity(entityName: string, entity: any): Promise<any>;
    invokeService(serviceName: string, methodName: string, params: any, fetchOptions?: IFetchOptions): Promise<any>;
    query(entityName: string, queryName: string, params?: any): Promise<any>;
    queryCount(entityName: string, queryName: string, params?: any): Promise<any>;
    loadMetadata(): Promise<any>;
    loadEntityMetadata(entityName: string): Promise<any>;
    loadEntitiesMessages(): Promise<any>;
    loadEnums(): Promise<any>;
    getPermissions(): Promise<any>;
    getUserInfo(): Promise<any>;
    private _getBasicAuthHeaders();
    private clearAuthData();
    ajax(method: any, path: any, data?: any, fetchOptions?: IFetchOptions): Promise<any>;
    checkStatus(response: Response): any;
    static isTokenExpiredResponse(resp: Response): boolean;
}
declare const Symbol: {
    iterator: symbol;
};
declare type IterableIterator<T> = any;
declare type IteratorResult<T> = any;
