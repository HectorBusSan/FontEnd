<template>
    <label :for="nombre">Introducir {{nombre}}</label>
    <input :type="title" :name="nombre" :id="nombre" :placeholder="nombre">
</template>
<script>
export default {
    name: 'PastelS',
    props:{
        title: String,
        nombre: String
    }
}
</script>
