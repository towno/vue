import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp({
    data() {
        return {
            products: [],
        }
    },
    methods: {
        addProduct() {
            // productModal.show();
        },
        getData() {
            console.log("wwdw22");
            const apiUri = "https://vue3-course-api.hexschool.io/api";
            const apiPath = "taonong";
            const page = 1;
            const url = `${apiUri}/${apiPath}/admin/products?page=${page}`;
            axios.get(`${url}`).then(res => {
                if (res.data.success) {
                    this.products = res.data.products;
                    console.log("this.products~~", this.products);
                } else {
                    alert(res.data.messages[0])
                }
            });
        }
    },
    mounted() {
        // 取出 Token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        if (token === '') {
            alert('您尚未登入請重新登入。');
            window.location = 'login.html';
        }
        axios.defaults.headers.common.Authorization = token;
        this.getData();
    }
}).mount('#app');
