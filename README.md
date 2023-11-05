# Software Engineer GOTO Test

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# to run
npm run dev

yarn dev
# build
npm run build

yarn build

#test
npm run test
yarn test
```

And then

```
1. Create file .env.local
2. Fill with NEXT_PUBLIC_BASE_URL=https://endpoint
3. Example NUXT_PUBLIC_BASE_URL=http://localhost:8000/api
4. Fill with NEXT_PUBLIC_WSS_URL=wss://endpoint
5. Example NEXT_PUBLIC_WSS_URL=WSS://localhost:8000/api
```

## Demo and Feature

1. Fetch And Loading

![Demo 1](fetch-loading.gif)

2. Load More

![Demo 2](load-more.gif)

3. Use debounce Search, hit api when 1 second keyup

![Demo 3](use-debounce-search.gif)

4. Responsive Design

![Demo 4](responsive-design.gif)
