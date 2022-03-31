<template>
    <CakeSel info="Chispas $10" nombre="complemento1" valor="Chispas"/>
    <CakeSel info="Nueces $15" nombre="complemento2" valor="Nueces"/>
    <CakeSel info="Cajeta $10" nombre="complemento3" valor="Cajeta"/>
    <CakeSel info="Naranja $8" nombre="complemento4" valor ="Naranja"/>
    <CakeSel info="Gomitas $18" nombre="complemento5" valor="Gomitas"/>
</template>

<script>
import CakeSel from './components/Cakes.vue'
export default {
    name: 'CompCake',
    components:{
        CakeSel
    }
}
</script>
