<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Product {
  id: number
  sku: string
  name: string
  price: string
  stock: number
  category: {
    id: number
    name: string
  }
}

const products = ref<Product[]>([])

const loadProducts = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/product')

    console.log(data)

    products.value = data
  } catch (err) {
    console.error(err)
  }
}

onMounted(loadProducts)
</script>

<template>
  <div style="padding:40px">
    <h1>Product List</h1>

    <table border="1">
      <tr>
        <th>ID</th>
        <th>SKU</th>
        <th>Name</th>
      </tr>

      <tr v-for="item in products" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.sku }}</td>
        <td>{{ item.name }}</td>
      </tr>
    </table>
  </div>
</template>