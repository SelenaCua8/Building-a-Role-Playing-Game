//Realice una funcion que sume 2 numeros
function sumar(a, b){
    return a + b;
}
console.log(sumar(50,70))

//Realiza una función que dado 3 números, corrobore si la multiplicación de los 2 primeros es igual al tercer numero
/*let num1= parseInt(prompt("ingrese un numero: "));
let num2= parseInt(prompt("ingrese otro numero: "));
let num3= parseInt(prompt("ingrese ingrese el último numero: "));

function cuentas(){
    let resultado = num1 * num2;

    if(resultado === num3){
        return "el resultado de los 2 primeros numeros es igual al numero tres."
    }
}
console.log(cuentas())
function tresnumeros(a, b, c){
    return a*b === c;
}
console.log(tresnumeros(2, 3, 10))*/

//Realiza una función que dado 3 parametros los sume y devuelva su promedio 
function prom(a, b, c){
    return (a + b + c) / 3
}
console.log(prom(2, 3, 10))

//Calcular el porcentaje de capacidad de un estadio. PAsando por parámetro la capacidad de asistendes
function estadio(capacidad, asistentes){
    return (asistentes * 100) / capacidad;
}
console.log(estadio(50000, 25000))

//Realiza una funcion que imprima un saludo con el nombre y apellido
/*let nombre = prompt('Ingrese su nombre: ');
let apellido = prompt('Ingrese su apellido: ');

function saludar(){
    return `Hola ${nombre} ${apellido}, cómo estas?`

}
saludar();
console.log(saludar())*/
//Programa una función que cuente el numero de caracteres que tenemos en una cadena de texto

//let texto = prompt('Ingrese un texto: ');
/*function textolargo(){
    return texto.length;
}
console.log(textolargo());*/

//Crea una funcion para contar el numero de veces que se repite una palabra en un texto: ej: oh bela chau chau chau el rto sera 3
const repeticion = (cadena = "", palabra = "") => {
    if (!cadena) return console.log("No ingresaste una cadena de texto larga.");
    if (!palabra) return console.log("No ingresaste una palabra para contar las repeticiones.");

    let contador = 0;
    let i = 0;

    while (i !== -1) {
        i = cadena.indexOf(palabra, i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    return console.log(`La palabra "${palabra}" se repite ${contador} veces en el texto.`);
};

repeticion('oh bela chau chau chau el rto será', 'chau');

const contarRepeticiones = (texto = "", palabra = "") => {
    if (!texto) return console.log("No ingresaste un texto.");
    if (!palabra) return console.log("No ingresaste una palabra para contar las repeticiones.");

    const palabras = texto.split(" ");
    const repeticiones = palabras.filter(pal => pal === palabra).length;

    return console.log(`La palabra "${palabra}" se repite ${repeticiones} veces en el texto.`);
};

contarRepeticiones("oh bela chau chau chau el rto será", "chau");
//Crea una función que invierta las palabras de una cadena de texto ejemplo "hola" resultado será aloh
function cadena(string){
    return string.split("").reverse().join("");
}
console.log(cadena("holaaaaa"));



//crea una función que valide si una palabra dada, es un palindrome (capicua que se lee de igual sentido que en otro) ej: salas

let palabra = prompt("ingrese una palabra: ");
function palindrome(){
    if (palabra.split("").reverse().join("") === palabra){
        return "is a palindrome"
    }else{
        return "is not a palindrome"
    }
}
console.log(palindrome());

//programa una funcion que elimine cierto patron de caractares de un texto dado ejemplo (abc1, abc2, abc3, abc4) y devuelve 1, 2, 3, 4
function eliminarPatron(texto, patron) {
    if (!texto) {
        console.log("No ingresaste un texto.");
        return [];
    }
    if (!patron) {
        console.log("No ingresaste un patrón para eliminar.");
        return [];
    }

    const regex = new RegExp(patron, "g");
    const ocurrencias = texto.match(regex) || [];
    const resultados = ocurrencias.map(function(ocurrencia) {
        return ocurrencia.replace(/[^\d]/g, '');
    });

    return resultados;
}

const texto = "abc1 def2 ghi3 jkl4";
const patron = "abc\\d"; // Patrón para buscar "abc" seguido de un número

const resultado = eliminarPatron(texto, patron);
console.log(resultado); // Output: ["1", "2", "3", "4"]

//tenemos una url y necesitamos el ultimo valor ejemplo "https://www.api.com/people/9" queremos acceder al id 9

const url = "https://api.com/people/9/";

function acceder(dato){
    return dato.split("/").slice(-2)(0);

}
console.log(acceder(url));
