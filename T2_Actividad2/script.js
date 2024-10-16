/* Ejercicio 1 */

let gastosAlojamiento = parseFloat(prompt("Introduzca el coste de alojamiento: "));
let gastosAlimentacion = parseFloat(prompt("Introduzca el coste de alimentación: "));
let gastosEntretenimiento = parseFloat(prompt("Introduzca el coste de entretenimiento: "));

let costeTotal = (gastosAlojamiento + gastosAlimentacion + gastosEntretenimiento).toFixed(2);

console.log("El coste total es " + costeTotal + " €");

/* Ejercicio 2 */

let edadPerro = parseInt(prompt("Introduzca la edad del perro: "));
let edadHumano = 7 * edadPerro;

console.log("La edad del perro en años humano es " + edadHumano + " años");

/* Ejercicio 3 */

let peso = parseFloat(prompt("Introduzca el peso (kg) de su persona: "));
let altura = parseFloat(prompt("Introduzca la altura (m) de su persona: "));

let imc = (peso / (altura ** 2));

if (imc < 18.5) {
    console.log("Imc: "+ imc +". Infrapeso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Imc: "+ imc +". Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Imc: "+ imc +". Sobrepeso");
} else if(imc >= 30) {
    console.log("Imc: "+ imc +". Obesidad");
}

/* Ejercicio 4 */

let precioOriginal = parseFloat(prompt("Inserte el precio original del producto: "));

let porcentajeDescuento = prompt("Inserte el porcentaje de descuento a aplicar: ");

function calcularPrecioFinal(precio, porcentaje) {
    return (precio * ((100 - porcentaje)/100)).toFixed(2);
}

console.log("El precio final del producto después de aplicar un descuento del "+ porcentajeDescuento +"% es " + calcularPrecioFinal(precioOriginal, porcentajeDescuento)) + " €";

/* Ejercicio 5 */

let primerLimite = parseInt(prompt("Inserte el primer número: "));
let segundoLimite = parseInt(prompt("Inserte el segundo número: "));
let salida;

if (primerLimite < segundoLimite) {
    salida = "Los números primos entre " + primerLimite + " y " + segundoLimite+ " son: ";
    generarNumerosPrimos(primerLimite, segundoLimite, salida);
} else if (primerLimite > segundoLimite) {
    salida = "Los números primos entre " + segundoLimite + " y " + primerLimite+ " son: ";
    generarNumerosPrimos(segundoLimite, primerLimite, salida);
}

function generarNumerosPrimos(numero1, numero2, salida) {
    let indice = numero1;
    for (let i = indice; i <= numero2; i++) {
        if (esPrimo(i)) {
            salida += i + ", ";  
        }
    }
    console.log(salida);
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            return false; 
        }
    }

    return true; 
}

/* Ejercicio 6 */

let termino = prompt("Inserte el número de los primeros términos de la secuencia de Fibonacci que quiera que se muestre: ");
let fraseSalida = "Los primeros " + termino + " términos de la secuencia Fibonacci son: ";

function secuenciaFibonacci(numero) {
    if (numero <= 1) {
        return numero;
    }

    let a = 1;
    let b = 0;

    for (let i = 2; i <= numero; i++) {
        let temp = a;
        a = a + b;
        b = temp;
    }

    return a;
}

for (let i = 0; i < termino; i++) {
    fraseSalida += secuenciaFibonacci(i) + ", ";
}

console.log(fraseSalida);

/* Ejercicio 7*/

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertirTemperatura() {
    let tipoConversion = parseInt(prompt("¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius):"));

    switch (tipoConversion) {
    case 1:
        let temperaturaCelsius = parseFloat(prompt("Inserta la temperatura en grados Celsius:"));
        return console.log(temperaturaCelsius + " grados Fahrenheit equivales a " + (celsiusAFahrenheit(temperaturaCelsius)) + " grados Fahrenheit");
    case 2: 
        let temperaturaFahrenheit = parseFloat(prompt("Inserta la temperatura en grados Fahrenheit:"));
        return console.log(temperaturaFahrenheit + " grados Fahrenheit equivales a " + (fahrenheitACelsius(temperaturaFahrenheit)) + " grados Fahrenheit");
    default: 
        alert("Por favor, selecciona una opción válida (1 o 2).");
        return "";
    }
}

convertirTemperatura();

/* Ejercicio 8 */

function calcularFactorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i; 
    }
    return resultado;
}

let numero1 = prompt("Ingresa un número entero no negativo:");

if (isNaN(numero1) || numero1 < 0) {
    alert("Por favor, ingresa un número entero no negativo.");
} else {
    let factorial = calcularFactorial(numero1);
    console.log("El factorial de "+  numero1 + " es: " + factorial);
}