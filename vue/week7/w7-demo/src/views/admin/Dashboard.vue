<template>
  <router-view/>
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
          console.log("res~~~", res);
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
            console.log("sdsd");
          } else {
            alert(res.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    console.log("1212sdsdadwa");
    this.$router.push("/admin/products");
  },
  components: { UserProductModal }
};
</script>
<style>
</style>
