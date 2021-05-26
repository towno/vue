import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';
const apiUri = "https://vue3-course-api.hexschool.io/api";
const apiPath = "taonong";
let productModal = null;
let delProductModal = null;
createApp({
    data() {
        return {
            products: [],
            delProductId: "",
            detailProductId: "",
            processType: "",
            product: { data: { title: "", category: "", unit: "", origin_price: 0, price: 0, description: "", content: "", is_enabled: "" } },
            tempProduct: { data: { title: "", category: "", unit: "", origin_price: 0, price: 0, description: "", content: "", is_enabled: "" } }
        }
    },
    methods: {
        processProductMethod(e, productId) {
            this.processType = e.target.getAttribute("data-type");
            switch (this.processType) {
                case "delProduct":
                    this.delProductId = productId;
                    break;
                case "editProduct":
                    this.detailProductId = productId;
                    this.getProductDetailMethod();
                    break;
                case "addProduct":
                    this.detailProductId = productId;
                    break;
                default:

            };

        },
        getProductDetailMethod() {//取得單一產品品項內容
            console.log("wsddw==,",this.detailProductId);
            console.log("wsddw==,", this.products.filters(item => item.productId == this.detailProductId));

        },
        cancelProductMethod(e) {//取消刪除/編輯/修改單一品項產品(關閉視窗)
            this.processType = e.target.getAttribute("data-type");
            switch (this.processType) {
                case "delProduct":
                    this.delProductId = "";//將欲刪除商品編號清空
                    break;
                case "editProduct":
                    this.detailProductId = "";
                    break;
                case "addProduct":
                    this.detailProductId = "";
                    break;
                default:

            };
        },
        delProductMethod() {//刪除單一商品
            const url = `${apiUri}/${apiPath}/admin/product/${this.delProductId}`;
            if (this.delProductId) {
                //刪除單一商品API

                axios.delete(`${url}`).then(res => {
                    if (res.data.success) {
                        this.getDataMethod();
                        delProductModal.hide();
                    } else {
                        alert(res.data.message);
                        delProductModal.hide();
                    }
                });
                this.delProductId = "";//將欲刪除商品編號清空
            }
        },
        getDataMethod() {//取得產品列表
            const page = 1;
            const url = `${apiUri}/${apiPath}/admin/products?page=${page}`;

            axios.get(`${url}`).then(res => {

                if (res.data.success) {
                    this.products = res.data.products;

                } else {
                    alert(res.data.messages);
                    if (res.data.messages == "驗證錯誤, 請重新登入") {
                        window.location = "login.html";
                    }

                }
            });
        },
        addOrEditProductMethod() {//新增或編輯商品
            switch (this.processType) {
                case "editProduct":
                    this.editProductMethod();
                    break;
                case "addProduct":
                    this.addProductMethod();
                    break;
                default:

            };

        },
        editProductMethod() {//編輯商品API
            const url = `${apiUri}/${apiPath}/admin/product/${this.detailProductId}`;
            if (this.detailProductId) {
                //編輯單一商品API
                axios.put(`${url}`, this.product).then(res => {
                    if (res.data.success) {
                        this.getDataMethod();
                        productModal.hide();
                        this.tempProduct.data = {};
                        this.product.data = {};
                    } else {
                        alert(res.data.message);
                        productModal.hide();
                        this.product.data = {};
                    }
                });
                this.detailProductId = "";//將欲編輯商品編號清空
            }
        },
        addProductMethod() {//新增商品API
            this.product.data = { ...this.tempProduct.data };
            const url = `${apiUri}/${apiPath}/admin/product`;
            this.product.data.price = Number(this.product.data.price);
            this.product.data.origin_price = Number(this.product.data.origin_price);
            axios.post(`${url}`, this.product).then(res => {
                if (res.data.success) {
                    alert(res.data.message);
                    this.getDataMethod();
                    productModal.hide();
                    this.product.data = {};
                    this.tempProduct.data = {};
                } else {
                    alert(res.data.message);
                    productModal.hide();
                    this.product.data = {};
                }
            });
        }
    },
    mounted() {
        //處理產品(新增/編輯)的Modal
        productModal = new bootstrap.Modal(document.querySelector('#productModal'), {
            keyboard: false
        });
        //刪除產品的Modal
        delProductModal = new bootstrap.Modal(document.querySelector('#delProductModal'), {
            keyboard: false
        });
        // 取出 Token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        if (token === '') {
            alert('您尚未登入請重新登入。');
            window.location = 'login.html';
        }
        axios.defaults.headers.common.Authorization = token;
        this.getDataMethod();
    }
}).mount('#app');
