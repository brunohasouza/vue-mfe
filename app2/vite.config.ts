import vue from '@vitejs/plugin-vue'

export default {
  rollupOptions: {
    input: 'src/main.js',
    format: 'system',
    preserveEntrySignatures: true
  },
  server: {
    port: 3000
  },
  base: 'http://localhost:3000',
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  })],
}