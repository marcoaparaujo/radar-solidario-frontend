//#region Imports

import Authentication from 'views/authentication';
import Home from 'views/home';

//#endregion

export const ROUTE_NAMES = {
    HOME: 'Home',
    AUTHENTICATION: 'Authentication'
};

export const STACK_ROUTES = [
    {
        Component: Authentication,
        name: ROUTE_NAMES.AUTHENTICATION
    }
];

export const TAB_ROUTES = [
    {
        Component: Home,
        name: ROUTE_NAMES.HOME
    }
];
