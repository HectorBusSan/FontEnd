<template>
    <MenuP textP="Chispas" price="$10"/>
    <MenuP textP="Nuez" price="$10"/>
    <MenuP textP="Cajeta" price="$15"/>
    <MenuP textP="Naranja" price="$20"/>
    <MenuP textP="Gomitas" price="$10"/>
</template>

<script>
import MenuP from './components/MenuP.vue'

export default {
  name: 'menuDos',
  components: {
    MenuP
  }
}
</script>
<style>
.item__pastel{
    color:#f00;
}
</style>