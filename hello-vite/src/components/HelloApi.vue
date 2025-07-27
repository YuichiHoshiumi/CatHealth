<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2">APIレスポンス</h2>
    <p v-if="loading">読み込み中...</p>
    <p v-else-if="error" class="text-red-500">エラー: {{ error }}</p>
    <p v-else>{{ response }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const response = ref('')
const loading = ref(true)
const error = ref(null)

// Chalice APIのURL（開発中は localhost:8000 など）
const API_URL = '/api/'

onMounted(async () => {
  try {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    response.value = JSON.stringify(data)
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* 任意のスタイル */
</style>
