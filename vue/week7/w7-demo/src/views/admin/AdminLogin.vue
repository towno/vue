<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form class="form-signin">
          <div class="form-floating mb-3">
            <input
              v-model="user.username"
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button @click="getApiData" class="btn btn-lg btn-primary w-100 mt-3" type="button">登入</button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">© 2021~∞ - Carol</p>
  </div>
  <router-view />
</template>
<script>
import UserProductModal from "@/components/UserProductModal.vue";

export default {
  name: "AdminLogin",
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
            console.log("token~~212~~", token);
            // this.$router.push("/admin/products");
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
    // this.$router.push("/admin/products");
  },
  components: { UserProductModal }
};
</script>
<style>
</style>
