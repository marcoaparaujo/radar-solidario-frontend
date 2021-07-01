//#region Imports

import Authentication from 'views/authentication';
import Historical from 'views/historical';
import Profile from 'views/profile';
import Search from 'views/search';
import FamilyRegister from 'views/search/register';
import Stock from 'views/stock';

//#endregion

export const ROUTE_NAMES = {
    TABS: 'tabs',
    STOCK: 'stock',
    PROFILE: 'profile',
    HISTORICAL: 'historical',
    AUTHENTICATION: 'authentication',
    FAMILY: {
        SEARCH: 'family-search',
        REGISTER: 'family-register'
    }
};

export const STACK_ROUTES = [
    {
        Component: Authentication,
        name: ROUTE_NAMES.AUTHENTICATION,
        options: { title: 'Login' }
    },
    {
        Component: FamilyRegister,
        name: ROUTE_NAMES.FAMILY.REGISTER,
        options: { title: 'Cadastrar Família' }
    }
];

export const TAB_ROUTES = [
    {
        Component: Search,
        name: ROUTE_NAMES.FAMILY.SEARCH,
        options: { title: 'Pesquisa', tabBarIcon: 'search' }
    },
    {
        Component: Stock,
        name: ROUTE_NAMES.STOCK,
        options: { title: 'Estoque', tabBarIcon: 'box' }
    },
    {
        Component: Historical,
        name: ROUTE_NAMES.HISTORICAL,
        options: { title: 'Histórico', tabBarIcon: 'history' }
    },
    {
        Component: Profile,
        name: ROUTE_NAMES.PROFILE,
        options: { title: 'Perfil', tabBarIcon: 'user' }
    }
];
