const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const numero = document.getElementById('numero');
const content = document.getElementById('informe');

const button = document.getElementById('button');

let topping1 = document.getElementById('topping1');
let topping2 = document.getElementById('topping2');
let topping3 = document.getElementById('topping3');
let topping4 = document.getElementById('topping4');
let topping5 = document.getElementById('topping5');

let complemento1 = document.getElementById('complemento1');
let complemento2 = document.getElementById('complemento2');
let complemento3 = document.getElementById('complemento3');
let complemento4 = document.getElementById('complemento4');
let complemento5 = document.getElementById('complemento5');


button.addEventListener('click',()=>{

let check1='Chocolate';
let check2='Tres Leches';
let check3='Limon';
let check4='Cajeta';
let check5='Cacahuate';


console.log(topping1.checked)
if(topping1.checked == false){
    check1='';
}
if(topping2.checked == false){
    check2='';
}
if(topping3.checked==false){
    check3='';
}
if(topping4.checked==false){
    check4='';
}
if(topping5.checked==false){
    check5='';
}

let checked1='Chispas';
let checked2='Nueces';
let checked3='Cajeta';
let checked4='Naranja';
let checked5='Gomita';

if(complemento1.checked == false){
    checked1 ='';
}
if(complemento2.checked == false){
    checked2 = '';
}
if(complemento3.checked==false){
    checked3='';
}
if(complemento4.checked==false){
    checked4='';
}
if(complemento5.checked==false){
    checked5='';
}
console.log(topping1.checked);
let cantidad = document.getElementById('cantidad');
    content.innerHTML +=`<div class="informe" id="informe">
                <h2>Pedidos:</h2>
                    <div class="pedido">
                    <h3 id="nameC">${nombre.value}</h3>
                    <h4>Contacto:</h4>
                    <p id="numberC">${numero.value}</p>
                    <p class="correoC">${correo.value}</p>
                    <h4>Sabor del Pastel</h4>
                    <p id="saborC">
                        ${check1}, ${check2},${check3},${check4},${check5},
                    </p>
                    <h4>Ingredientes</h3>
                    <p id="aditamentosC">
                        ${checked1}, ${checked2}, ${checked3},${checked4},${checked5}
                    </p>
                    <h4>Cantidad:</h3>
                    <p id="numeroC">
                        ${cantidad.value}
                    </p>
                </div>
            </div>`
    
});