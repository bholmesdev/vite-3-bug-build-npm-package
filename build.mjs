import { build } from 'vite'

;(async() => {
  await build({
    build: {
      rollupOptions: {
        input: [
          // Fails when resolving the npm package alone
          'is-odd',
          // ...but succeeds if that npm package is used by another input.
          // Uncomment this line to fix the error 👇
          // 'src/test-module.js',
        ],
      }
    }
  })
})()