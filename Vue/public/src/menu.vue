<template>
  <MenuP textP="Pastel de Chocolate" price="$200"/>
  <MenuP textP="Pastel de Tres leches" price="$200"/>
  <MenuP textP="Pastel de Limon" price="$180"/>
  <MenuP textP="Pastel de Cajeta" price="$200"/>
  <MenuP textP="Pastel de Cacahuate" price="$200"/>
</template>

<script>
import MenuP from './components/MenuP.vue'

export default {
  name: 'menuP',
  components: {
    MenuP
  }
}
</script>
<style>
.item__pastel{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
}
</style>