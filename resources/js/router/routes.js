const routes = [
    {
        path: '/',
        component: () => import('../pages/Dashboard.vue'),
        name: 'Dashboard'
    },
    {
        path: '/#/home',
        component: () => import('../pages/Home.vue'),
        name: 'Home'
    },
    {
        path: '/#/user',
        component: () => import('../pages/User.vue'),
        name: 'User'
    }
    ];

export default routes;