<template>
    <h3 id="nameC">{{ nombre }}</h3>
    <h4>Contacto:</h4>
    <p id="numberC">{{ numero }}</p>
    <p class="correoC">{{ correo }}</p>
    <h4>Pastel Sabor(es)</h4>
    <p id="saborC">{{ cake }}</p>
    <h4>Ingredientes:</h4>
    <p id="aditamentosC">{{ adorno }}</p>
    <h4>Cantidad:</h4>
    <p id="numeroC">{{ cantidad }}</p>
</template>
<script>
export default {
    name: 'OrderUno',
    props: {
        nombre: String,
        numero: String,
        correo: String,
        cake: String,
        adorno: String,
        cantidad: String
    }
}
</script>