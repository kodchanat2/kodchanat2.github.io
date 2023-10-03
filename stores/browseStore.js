import { defineStore } from 'pinia';
export const useBrowseStore = defineStore('browse', {
    state: () => ({
        browse: [],
    }),
    actions: {
        setBrowse(browse) {
            this.browse = browse;
        },
    },
})