/*jshint esversion: 6 */
// js for vue
// Vue.component('modal', {
//     template: '#modal-component'
// });

new Vue({
    el: '#app',
    data() {
        return {
            currentFoxUrl: null,
            favorites: [],
        };
    },
    methods: {
        getImgUrl(number) {
            return `assets/dodo_${number}.jpg`;
        }
    }
});