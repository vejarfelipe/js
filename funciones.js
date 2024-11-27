/* estructura de una función normal 
function Nombre de la función(parametros){
cuerpo.
}
*/ 

function wenacabros (){
    console.log("wena cabros")
};

wenacabros();

function suma(){
    return 1+1;
}
const resultado = suma;
suma();
/* 
acá podemos ver math.random() genera un decimal aleatorio lo pasamos a una variable lo *10 para que tenga un valor 
significativo
*/
function numeroRandom (){
    let random1= Math.random()
    let multiplied = random1*10
    let  rounded = Math.floor(multiplied)
    let resultado2= rounded+1
    return resultado2;
}
numeroRandom();
console.log(suma())
console.log(numeroRandom())
