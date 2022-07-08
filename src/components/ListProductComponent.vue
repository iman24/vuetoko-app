<template>
  <div class="container row">
    <div class="col-4 mb-3" v-for="buku in data" :key="buku.name">
        <div class="card p-2">
            <img :src="buku.image" />
            <div class="card-body row">
                <h5 class="card-title fs-3 fw-bold">{{ buku.name }}</h5>
                <div class="card-susbtitle green-text fw-bold text-success">Rp. {{ buku.price }}</div>
                <button class="btn btn-primary btn-block mt-3" @click="buy(buku)">Add to Cart</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  name: "ListProductComponent",
  setup() {
    const data = reactive([
      {
        name: "Buku",
        price: 2000,
        image: "/buku.jpg",
        qty: 1,
      },
      {
        name: "Pulpen",
        price: 1000,
        image: "/pulpen.jpg",
        qty: 1,
      },
      {
        name: "Pulpen Super",
        price: 5000,
        image: "/pulpen.jpg",
        qty: 1,
      },
      {
        name: "Stabillo",
        price: 5000,
        image: "/pulpen.jpg",
        qty: 1,
      },
    ]);

    let store = useStore();

    let buy = (id) => {
      store.dispatch("addCart", id);
    };

    return {
      data,
      buy,
    };
  },
};
</script>

<style scoped>
img {
    width: 200px;
    height: 200px;
}

</style>