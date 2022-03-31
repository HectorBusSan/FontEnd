<template>
    <PastelS title="text" nombre="Nombre"/>
    <PastelS title="number" nombre="Numero"/>
    <PastelS title="mail" nombre="Correo"/>
</template>
<script>
import PastelS from './components/Pasteles.vue'

export default {
    name: 'pastelS',
    components: {
        PastelS
    }
}
</script>
