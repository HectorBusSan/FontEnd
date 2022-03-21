const input = document.getElementById('pokeInput');
const pokeImg= document.getElementById('pokeImg');
const pokeType = document.getElementById('pokeType');
const pokeF = document.getElementById('pokeF');
const pokeA=document.getElementById('pokeAltura');
const pokeW= document.getElementById('pokePeso');
// powers
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialattack = document.getElementById('special-attack');
const specialdefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const button = document.getElementById('button').addEventListener('click',()=>{
    let namePoke = input.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${namePoke}`;
    fetch(url).then(res=>{
        console.log(namePoke)
        return res.json();
    }).then(data=>{
        let pokemonImg = data.sprites.front_default;
        pokeImg.src = pokemonImg;
        
        let pokeshowType = data.types[0].type.name;
        // console.log(pokeshowType)
        pokeType.innerHTML= `Tipo: ${pokeshowType}`;
        let pokeshowF = data.moves[0].move.name;
        // console.log(pokeshowF)
        pokeF.innerHTML= `Fortaleza: ${pokeshowF}`
        let altura = data.height;
        // console.log(altura)
        pokeA.innerHTML= `Altura: ${altura} ft`;
        let peso = data.weight;
        // console.log(peso)
        pokeW.innerHTML=`Peso: ${peso} pounds`;

        // powers
        let pokehp = data.stats[0].base_stat;
        let pokeattack = data.stats[1].base_stat;
        let pokedefense = data.stats[2].base_stat;
        let pokespecialattack = data.stats[3].base_stat;
        let pokespecialdefense = data.stats[4].base_stat;
        let pokespeed = data.stats[5].base_stat;
        let showpokehp = `${pokehp}px`
        // console.log(pokehp)
        hp.style.height = showpokehp;
        attack.style.height = `${pokeattack}px`;
        defense.style.height=`${pokedefense}px`;
        specialattack.style.height=`${pokespecialattack}px`;
        specialdefense.style.height=`${pokespecialdefense}px`;
        speed.style.height=`${pokespeed}px`;
        
    }).catch(e=>{
        console.log(`${e} Pokemon no encontrado`);
        pokeImg.src ="img/luka.png";
        hp.style.height = "0px";
        attack.style.height = "0px";
        defense.style.height="0px";
        specialattack.style.height="0px";
        specialdefense.style.height="0px";
        speed.style.height="0px";

        pokeA.innerHTML= `Altura:`;
        pokeW.innerHTML=`Peso:`;

        pokeType.innerHTML= `Tipo: `;
        pokeF.innerHTML= `Fortaleza: `;
    })
});