import userProductModal from './modal/userProductModal.js';

//驗證
const { defineRule, Form, Field, ErrorMessage, configure } = VeeValidate;
const { required, email, min, max } = VeeValidateRules;
const { localize, loadLocaleFromURL } = VeeValidateI18n;

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json');

configure({ generateMessage: localize('zh_TW')});

const apiUri = "https://vue3-course-api.hexschool.io/api";
const apiPath = "taonong";
const app = Vue.createApp({
    data() {
        return {
            loadingStatus: {
                loadingItem: '',
            },
            products: [],
            cart: { carts: [] },
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
        }
    },
    methods: {
        // 獲得商品清單
        getProducts() {
            const url = `${apiUri}/${apiPath}/products`;
            axios.get(url).then((res) => {

                if (res.data.success) {
                    this.products = res.data.products;

                }
            });

        },
        // 新增商品到購物車
        addCarts(id, qty = 1) {
            const url = `${apiUri}/${apiPath}/cart`;
            this.loadingStatus.loadingItem = id;
            const cart = {
                product_id: id,
                qty
            }
            axios.post(url, { data: cart }).then((res) => {
                // console.log("res~~~", res);
                this.loadingStatus.loadingItem = null;
                this.getCarts();
            });
        },
        //獲得購物車清單
        getCarts() {
            const url = `${apiUri}/${apiPath}/cart`;
            axios.get(url).then((res) => {
                this.cart = res.data.data;
                // console.log("this.cart.carts~~", this.cart.carts);
            });
        },
        //刪除購物車商品
        removeCartItem(id) {
            // console.log("id~~", id);
        },
        // 清空購物車
        deleteAllCarts() {
            // console.log("deleteAllCarts");
        },
        //送出會員資料
        createOrder() {
            // console.log("createOrder~~");
        }
    },
    mounted() {
        this.getProducts();
        this.getCarts();
        this.$refs.userProductModal.openModal();
    }

});

app.component('userProductModal', userProductModal);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');

