//#region Imports

import Authentication from 'views/authentication';
import FamilyRegister from 'views/family/register';
import FamilySearch from 'views/family/search';
import FoodStampRegister from 'views/food-stamp/register';
import FoodStampAvailability from 'views/food-stamp/availability';
import Historical from 'views/historical';
import Profile from 'views/profile';
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
    },
    FOOD_STAMP: {
        REGISTER: 'food-stamp-register',
        AVAILABILITY: ' food-stamp-availability'
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
        options: { title: 'Cadastro de família', headerShown: true }
    },
    {
        Component: FoodStampRegister,
        name: ROUTE_NAMES.FOOD_STAMP.REGISTER,
        options: { title: 'Cadastro de cesta', headerShown: true }
    },
    {
        Component: FoodStampAvailability,
        name: ROUTE_NAMES.FOOD_STAMP.AVAILABILITY,
        options: { title: 'Disponibilidade de cestas', headerShown: true }
    }
];

export const TAB_ROUTES = [
    {
        Component: FamilySearch,
        name: ROUTE_NAMES.FAMILY.SEARCH,
        options: { title: 'Pesquisa', tabBarIcon: 'search' }
    },
    {
        Component: Stock,
        name: ROUTE_NAMES.STOCK,
        options: { title: 'Estoque', tabBarIcon: 'archive' }
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
