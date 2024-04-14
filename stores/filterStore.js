import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filter', () => {
    const { $const } = useNuxtApp();
    const $router = useRouter();

    const sortNewest = ref(true);
    const selected = reactive(Object.fromEntries(Object.keys($const.tag.tags).map(key => [key, false])));
    const groupSelected = computed(() => {
        const groupSelected = {};
        $const.tag.groups.forEach(group => {
            groupSelected[group.key] = {
                some: group.value.some(tag => selected[tag]),
                all: group.value.every(tag => selected[tag]),
            }
        });
        return groupSelected;
    });

    const toggleGroup = (key) => {
        const value = groupSelected.value[key].all ? false : true;
        $const.tag.groups.find(group => group.key === key).value.forEach(tag => {
            selected[tag] = value;
        });
        updateQuery();
    }

    const toggleTag = (tag) => {
        selected[tag] = !selected[tag];
        updateQuery();
    }

    const toggleSort = () => {
        sortNewest.value = !sortNewest.value;
        updateQuery();
    }

    const clearSelected = () => {
        Object.keys(selected).forEach(tag => {
            selected[tag] = false;
        });
        sortNewest.value = true;
        updateQuery();
    }

    const updateQuery = () => {
        const filter = [];
        Object.keys(groupSelected.value).forEach(group => {
            if (groupSelected.value[group].all) filter.push(group);
            else if (groupSelected.value[group].some) {
                $const.tag.groups.find(g => g.key === group).value.forEach(tag => {
                    if (selected[tag]) filter.push($const.tag.tags[tag].abbr);
                });
            }
        });
        const filterStr = filter.join(',');
        const query = {};
        if (filterStr) query.filter = filterStr;
        if (!sortNewest.value) query.sort = 'oldest';
        $router.replace({ query });
    }
    
    const readQuery = () => {
        const {filter, sort} = $router.currentRoute.value.query;
        if (filter) {
            filter.split(',').forEach(abbr => {
                const group = $const.tag.groups.find(group => group.key === abbr);
                if (group) {
                    group.value.forEach(tag => selected[tag] = true);
                }
                else {
                    const tag = Object.keys($const.tag.tags).find(tag => $const.tag.tags[tag].abbr === abbr);
                    if (tag) selected[tag] = true;
                }
            });
        }
        if (sort) sortNewest.value = false;
    }

    return { 
        sortNewest,
        selected, 
        groupSelected, 
        toggleGroup, 
        toggleTag, 
        toggleSort,
        clearSelected, 
        readQuery 
    }
})