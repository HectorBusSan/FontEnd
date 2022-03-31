<template>
    <OrderUno nombre="Héctor" numero="8921379" correo="hector@hotmail.com" cake="Chocolate" adorno="Chispas" cantidad="1"/>
</template>

<script>
import OrderUno from './components/Pedido.vue'


export default {
    name:'orderUno',
    components:{
        OrderUno
    }
}
</script>
