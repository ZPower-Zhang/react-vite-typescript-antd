import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
// import externalGlobals from 'rollup-plugin-external-globals'

const resolve = (dir) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        // {
        //   libName: 'lodash',
        //   libDirectory: '',
        //   camel2DashComponentName: false,
        // },
        {
          libName: 'antd',
          style(name) {
            // use less
            return `antd/es/${name}/style/index.js`
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
      components: resolve('./src/components'),
      views: resolve('./src/views'),
      utils: resolve('./src/utils'),
      layouts: resolve('./src/layouts'),
      router: resolve('./src/router'),
      assets: resolve('./src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1890ff;',
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3306,
  },
  build: {
    manifest: true,
  },
  // build: {
  //   rollupOptions: {
  //     external: ['react'],
  //     plugins: [
  //       externalGlobals({
  //         react: 'React',
  //         antd: 'antd',
  //       }),
  //     ],
  //   },
  // },
})
