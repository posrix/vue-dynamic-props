# A Vue mixin to sync props to data in real-time

Real-time sync props to data. Useful when props receive async data that would change from time to time, and you also would like to mutate them rather than simply render them but to avoid the Vue warning.

## Install

```bash
yarn add vue-dynamic-props --dev
```

or npm

```bash
npm install vue-dynamic-props --save-dev
```

## Usage

Use default data key

```html
<template>
  <ul class="shopping-list">
    <li v-for="item in dynamicProps.items">
      {{ item }}
    </li>
  <ul/>
</template>

<script>
import dynamicProps from 'vue-dynamic-props'

export default {
    mixins: [
      dynamicProps()
    ],
    props: {
      items: Array
    }
}
</script>
```

Use a specified data key

```html
<template>
  <ul class="shopping-list">
    <li v-for="item in yourKey.items">
      {{ item }}
    </li>
  <ul/>
</template>

<script>
import dynamicProps from 'vue-dynamic-props'

export default {
    mixins: [
      dynamicProps('yourKey')
    ],
    props: {
      items: Array
    }
}
</script>
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
