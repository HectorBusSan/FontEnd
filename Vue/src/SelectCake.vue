<template>
    <CakeSel info="Pastel de Chocolate $200" nombre="topping1" valor="Chocolate"/>
    <CakeSel info="Pastel de Tres Leches $200" nombre="topping2" valor="Leches"/>
    <CakeSel info="Pastel de Limon $180" nombre="topping3" valor="Limon"/>
    <CakeSel info="Pastel de Cajeta $300" nombre="topping4" valor ="Cajeta"/>
    <CakeSel info="Pastel de Cacahuate $200" nombre="topping5" valor="Cacahuate"/>
</template>

<script>
import CakeSel from './components/Cakes.vue'

export default {
    name: 'cakeSel',
    components:{
        CakeSel
    }
}
</script>
