# Welcome to my bug report!

To reproduce...

1. Run `npm install`
2. Run `npm run build`. This will run `build.mjs` and should log the following error:

```sh
Unexpected early exit. This happens when Promises returned by plugins cannot resolve. Unfinished hook action(s) on exit:
(vite:optimized-deps-build) load "/Users/benholmes/Sandbox/vite-server-build-simulaneously/node_modules/.vite/deps_build-dist/is-odd.js"
```

3. Head to `build.mjs` and uncomment "src/test-module.js." This should resolve the error.