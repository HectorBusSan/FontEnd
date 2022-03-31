<template>
    <label :for="nombre">{{ info }}</label>
    <input type="checkbox" :id="nombre" :name="nombre" :value="valor">
</template>
<script>
export default {
    name: 'CakeSel',
    props:{
        nombre: String,
        valor: String,
        info: String
    }
}
</script>