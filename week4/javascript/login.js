import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp({
    data() {
        return {
            user: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        getApiData() {
            let domain = "https://vue3-course-api.hexschool.io";
            let apiUri = "/admin/signin";
            axios.post(`${domain}${apiUri}`, this.user).then(res => {
                if (res.data.success) {
                    this.user.username = "";
                    this.user.password = "";
                    const { token, expired } = res.data;
                    // 寫入 cookie token
                    // expires 設置有效時間
                    document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
                    window.location = "index3.html";

                } else {
                    alert(res.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }
}).mount('#app');
