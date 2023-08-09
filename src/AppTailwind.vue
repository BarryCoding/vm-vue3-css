<script setup lang="ts">
import { ref } from 'vue'
import ProductDisplay from './components/ProductDisplay.vue'

const cart = ref<number[]>([])
const premium = ref(true)

function updateCart(id: number) {
  cart.value.push(id)
}
</script>

<template>
  <div class="h-[60px] mb-[25px] bg-gradient-to-r from-ocean to-leaf"></div>

  <div
    class="my-6 mx-25 p-7 border border-solid border-mist bg-white float-right"
  >
    Cart({{ cart.length }})
  </div>
  <product-display
    :premium="premium"
    @add-to-cart="updateCart"
  ></product-display>
</template>

<style scoped>
/* .nav-bar {
  height: 60px;
  margin-bottom: 25px;
  background: linear-gradient(90deg, #16c0b0, #84cf6a);
}

.cart {
  margin: 25px 100px;
  padding: 30px;
  border: 1px solid #d8d8d8;
  background-color: white;
  float: right;
} */
</style>
