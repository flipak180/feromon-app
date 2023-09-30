import {defineStore} from "pinia";

export const useMainStore = () => {
    const innerStore = defineStore({
        id: 'main',
        state: () => ({
            favs: [],
            cart: [],
        }),
        actions: {

        },
    });
    const s = innerStore();
    if (!s.init) {
        s.init = true;
        s.getCoords();
    }
    return s;
}
