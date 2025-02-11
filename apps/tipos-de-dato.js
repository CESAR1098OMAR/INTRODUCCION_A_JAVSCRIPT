let numero = 42;
let numeroLetra = 'Veinticinco';
let numeroString = "22";
let numeroNegativo = -666;
let cero = 0;
let vacio = null;
let sinvalor;
let falso = false;
let verdadero = true;

console.log(numero);
console.log(typeof numero);//Tipo de valor = number
console.log(numeroLetra);
console.log(typeof numeroLetra);//Tipo de valor = string
console.log(numeroString);
console.log(typeof numeroString);//Tipo de valor = string (ya que está dentro de las comillas)
console.log(numeroNegativo);
console.log(typeof numeroNegativo);//Tipo de valor = number (no hace distinción entre números enteros, decimales,positivos y negativos)
console.log(cero);
console.log(typeof cero);//Tipo de valor = number (pasa lo mismo con los numeros negativos, no hay distinción)
console.log(vacio);//Tipo de valor = null (es un valor que se puede asignar para indicar que algo está vacío o no tiene valor.)
console.log(sinvalor);//Tipo de valor = undefined (se asigna automáticamente cuando algo no tiene un valor definido. Por ejemplo, si declaras una variable pero no le das un valor, JavaScript le asigna undefined de manera predeterminada)
console.log(falso)
console.log(typeof falso);//Tipo de valor = boolean
console.log(verdadero);
console.log(typeof verdadero);//Tipo de valor = boolean

console.log(numero + numeroString); //Concatenar (Unir 2 o mas elementos que por lo menos alguno sea string)
console.log(numero + numeroNegativo); //Operacion básica  (suma)

let nombre = 'César';
let edad = 25;
let estado = 'Zacatecas';
let pais = 'México';

console.log("Hola, mi nombre es " + nombre + " tengo " + edad +" años de edad y vivo en el Estado de " + estado + ", " + pais + ".");//Se pueden crear textos entre comillas ("") dentro de la impresora y se concatena con lo ya definido
