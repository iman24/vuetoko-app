<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container">
      <span class="navbar-brand mb-0 h1">VueToko</span>
    </div>
  </nav>

  <div class="container mt-5">
    <div class="row">
      <div class="col col-md-8">
        <h2 class="mb-5">List Product</h2>
        <list-product-component />
      </div>
      
      <div class="col col-md-4">
        <h2 class="mb-5">Cart</h2>
          <cart-component />
      </div>
    </div>

   
    
  </div>
</template>

<script>
import CartComponent from "./components/CartComponent.vue";
import ListProductComponent from "./components/ListProductComponent.vue";

export default {
  name: "App",
  setup() {},
  components: {
    CartComponent,
    ListProductComponent,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
