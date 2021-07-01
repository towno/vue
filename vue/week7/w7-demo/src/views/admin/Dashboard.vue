<template>
  <router-view />
</template>
<script>
import UserProductModal from "@/components/UserProductModal.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    getApiData() {
      let domain = "https://vue3-course-api.hexschool.io";
      let apiUri = "/admin/signin";
      this.$http
        .post(`${domain}${apiUri}`, this.user)
        .then(res => {
          if (res.data.success) {
            this.user.username = "";
            this.user.password = "";
            const { token, expired } = res.data;
            // 寫入 cookie token
            // expires 設置有效時間
            document.cookie = `hexToken=${token};expires=${new Date(
              expired
            )}; path=/`;
            this.$router.push("/admin/products");
          } else {
            alert(res.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //驗證登入
    checkToken() {
      let url = `${process.env.VUE_APP_API}api/user/check`;
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );

      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;
        this.$http.post(url, { api_token: token }).then(res => {
          if (res.data.success) {
            //驗證成功
            this.$router.push("/admin/products");
          } else {
            //驗證失敗
            this.$router.push("/admin/login");
          }
        });
      } else {
        //驗證失敗
        this.$router.push("/admin/login");
      }

      // this.$router.push("/admin/products");
    }
  },
  mounted() {
    this.checkToken();
    // this.$router.push("/admin/products");
  },
  updated() {
    this.checkToken();
  },
  components: { UserProductModal }
};
</script>
<style>
</style>
