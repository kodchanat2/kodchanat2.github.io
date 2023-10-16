import { defineStore } from 'pinia';
export const useRouteStore = defineStore('route', {
    state: () => ({
        route: 'home',
    }),
    actions: {
        setRoute(route) {
            this.route = route;
        },
    },
})