<template>
  <div class="Products">
    <div class="container">
      <div class="mt-4">
        <!-- 產品列表 -->
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th>功能</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td class="w-25">
                <div class="productImage" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
              </td>
              <td class="w-25">{{item.title}}</td>
              <td class="w-25">
                <div class="h5">
                  <span class="h6">原價</span>
                  <del class="h6">NT${{item.origin_price}}</del>
                </div>
                <div class="h5">現在只要 NT${{item.price}}</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="getProduct(item.id)"
                  >
                    <i v-if="loadingStatus.loadingItem===item.id" class="fas fa-spinner fa-pulse"></i>查看更多
                  </button>

                  <button type="button" class="btn btn-outline-danger">
                    <i v-if="loadingStatus.loadingItem===item.id" class="fas fa-spinner fa-pulse"></i>加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 購物車列表 -->
        <div class="text-end">
          <button class="btn btn-outline-danger" @click="deleteAllCarts">清空購物車</button>
        </div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th>數量/單位</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(item.id)"
                    :disabled="loadingStatus.loadingItem===item.id"
                  >
                    <i class="fas fa-spinner fa-pulse" v-if="loadingStatus.loadingItem ===item.id"></i>x
                  </button>
                </td>
                <td>
                  <div class="input-group input-group-sm">{{item.product.title}}</div>
                </td>
                <td>{{item.qty}}/{{item.product.unit}}</td>
                <td>NT${{item.product.price}}</td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{cart.total}}</td>
            </tr>
            <tr v-if="cart.final_total!==cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{cart.final_total}}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <UserProductModal />
  </div>
</template>
<script>
import UserProductModal from "@/components/UserProductModal.vue";

export default {
  name: "Products",
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
  methods: {},
  mounted() {
    const test = `${process.env.VUE_APP_API}`;
    console.log("test~", test);
  },
  components: { UserProductModal }
};
</script>
<style>
.productImage {
  height: 100px;
  width: 77px;
  background-size: cover;
  background-position: center center;
}
</style>
