<template>
  <li class="item__pastel">{{textP}} <p>{{price}}</p></li>
</template>

<script>
export default {
  name: 'MenuP',
  props: {
    textP: String,
    price: String
  }
}
</script>
<style scoped>
    .item__pastel{
        color: #fff;
    }
</style>
