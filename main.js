/*jshint esversion: 6 */
// js for vue
// Vue.component('modal', {
//     template: '#modal-component'
// });

new Vue({
    el: '#app',
    data() {
        return {
            image1: `assets/dodo_1.jpg`,
            image2: `assets/dodo_2.jpg`,
            image3: `assets/dodo_3.jpg`,
            image4: `assets/dodo_4.jpg`,
            bufferImage: null
        };
    },
    methods: {
        getImgUrl(number) {
            if (number == 1) {
                return this.image1;
            } else if (number == 2) {
                return this.image2;
            } else if (number == 3) {
                return this.image3;
            } else if (number == 4) {
                return this.image4;
            }
        },
        hoverOver(number) {
            if (number == 1) {
                let youngest = document.getElementById("youngest");
                youngest.style.display = 'block';
            } else if (number == 2) {
                this.bufferImage = this.image2;
                this.image2 = this.image1;
            } else if (number == 3) {
                this.bufferImage = this.image3;
                this.image3 = this.image2;
            } else if (number == 4) {
                this.bufferImage = this.image4;
                this.image4 = this.image3;
            }
        }, hoverLeave(number) {
            if (number == 1) {
                let youngest = document.getElementById("youngest");
                youngest.style.display = 'none';
            } else if (number == 2) {
                this.image2 = this.bufferImage;
            } else if (number == 3) {
                this.image3 = this.bufferImage;
            } else if (number == 4) {
                this.image4 = this.bufferImage;
            }
        }

    }
});