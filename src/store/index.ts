import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    state: () => ({
        loggedIn: false,
    }),
    getters: {},
    actions: {},
})
