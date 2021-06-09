import userProductModal from './modal/userProductModal.js';
const apiUri = "https://vue3-course-api.hexschool.io/api";
const apiPath = "taonong";
const app = Vue.createApp({
    data() {
        return {
            loadingStatus: {
                loadingItem: '',
            },
            products: []
        }
    },
    methods: {
        getProducts() {
            const url = `${apiUri}/${apiPath}/products`;
            axios.get(url).then((res) => {

                if (res.data.success) {
                    this.products = res.data.products;

                }
            });

        }
    },
    mounted() {
        this.getProducts();
        this.$refs.userProductModal.openModal();
    }
});

app.component('userProductModal', userProductModal);
app.mount('#app');

