import { createApp } from 'vue';

import MenuP from './menu.vue';
import menuDos from './menudos.vue';
import pastelS from './SelectP.vue';
import cakeSel from './SelectCake.vue';
import CompCake from './SelectComp.vue';
import orderuno from './ShowPedido.vue'
import homeTitle  from './ShowHome.vue'

createApp(MenuP).mount('#Lista-P');
createApp(menuDos).mount("#Lista-A");
createApp(pastelS).mount('#personal');
createApp(cakeSel).mount('#select-cake');
createApp(CompCake).mount('#ingredients-cake');
createApp(orderuno).mount('#pedido');
createApp(homeTitle).mount('#home')
