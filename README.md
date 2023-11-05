# arcane

A site build with Vue.js and Zola about code/linux/hack deployed at https://c-arcane.surge.sh

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
zola build
npm run dev
```

### Compile and Minify for Production and Deploy

```sh
zola build
npm run build
./node_modules/.bin/surge ./dist/
```

To force https

```sh
./node_modules/.bin/surge ./dist/ --domain https://c-arcane.surge.sh
```

### Deployed

On [surge](https://surge.sh/).  [example](https://github.com/yavisht/deploy-via-surge.sh-github-action-template/tree/master)
