import { defineStore } from 'pinia';
export const useBrowseStore = defineStore('browse', {
    state: () => ({
        browse: [],
    }),
    actions: {
        setBrowse(browse) {
            this.browse = browse;
        },
        async fetch() {
            const res = await $fetch((useRuntimeConfig().public.edge_url || '')+'/api/fetch', {
                //no cors
                mode: 'no-cors',
            });
            this.setBrowse(res);
        }
    },
})