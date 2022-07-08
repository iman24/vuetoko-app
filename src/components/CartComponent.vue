<template>
    <div>
        <div class="list" v-for="cart in carts" :key="cart.name">
            <div class="item">
                <div class="card rounded-3 mt-1">
                    <div class="card-body row justify-content-between">
                        <div class="col">
                            <span class="d-block fs-5 fw-bold">{{ cart.name }}</span>
                            <span class="d-block">{{ cart.qty }} x {{ cart.price }}</span>
                        </div>
                    <div class="col text-end">
                        Rp {{ cart.qty * cart.price }} 
                    </div>
                    <span @click="deleteItem(cart)" class="delete badge bg-danger">x</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5 justify-content-around">
            <button @click="clearAll" class="col-4 btn btn-danger">Clear</button>
            <button class="col-4 btn btn-success">Pay</button>
        </div>

    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'

import { useStore } from 'vuex'
export default {
    name: 'CartComponent',
    setup() {

        let store = useStore()
        let carts = computed(() => {
            return store.getters.cart
        }) 

        const deleteItem = (item) => {
            store.dispatch('removeCart', item)
        }

        const clearAll = () => {
            store.dispatch('clearAll')
        }

        return {
            carts,
            deleteItem,
            clearAll
        }
       
    },
}
</script>

<style scoped>

.card-body {
    position: relative !important;
    height: 100px;
}

.delete {
    position: absolute;
    top: 0px;
    right: 10px;
    background-color: red;
    cursor: pointer;
    width: 15px;
    text-align: center;
    padding: 5px;
}
</style>