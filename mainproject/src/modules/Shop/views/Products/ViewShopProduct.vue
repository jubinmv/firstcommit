<template>
  <div class="home">
    
    <div class="columns is-multiline">
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">My Products</h2>
      </div>

      <ProductBox 
        v-for="product in shopProducts"
        v-bind:key="product.id"
        v-bind:product="product" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import ProductBox from '@/modules/Shop/components/ProductBox.vue'

export default {
  name: 'Home',
  data() {
    return {
      shopProducts: []
    }
  },
  components: {
    ProductBox
  },
  mounted() {
    this.getShopProducts()

    document.title = 'Lease It | Shop'
  },
  methods: {
    async getShopProducts() {
      this.$store.commit('setIsLoading', true)

      axios
        .get('/user/shop/products')
        .then(response => {
          this.shopProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })

      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>
