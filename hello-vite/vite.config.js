import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        // クラウド環境デプロイ時要確認
        target: 'https://vpju8lld5i.execute-api.ap-northeast-1.amazonaws.com/api',
        // target: 'http://localhost:8000',　// ローカル設定
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
