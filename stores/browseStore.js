import { defineStore } from 'pinia';
export const useBrowseStore = defineStore('browse', {
    state: () => ({
        browse: {},
        fetching: false,
    }),
    actions: {
        setBrowse(browse) {
            this.browse = browse;
        },
        async fetch() {
            if (this.browse.th || this.fetching) return;
            this.fetching = true;
            const res = await $fetch((useRuntimeConfig().public.edge_url || '')+'/api/fetch', {
                //no cors
                mode: 'no-cors',
            });
            this.setBrowse(res);
            this.fetching = false;
        }
    },
})