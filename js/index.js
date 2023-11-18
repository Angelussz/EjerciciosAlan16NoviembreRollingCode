// Tarea
const esNumeroEntero = (numero) => {
  let expresionEntero = /^\d+$/;
  return expresionEntero.test(numero);
};
const esNumeroDecimal = (numero) => {
  let expresionEntero = /^(-?\d+)?(\.\d+)?$/;
  return expresionEntero.test(numero);
};

const esSoloPalabra = (palabra) => {
  let expresionsoloLetras = /^[a-zA-Z]+$/;
  return expresionsoloLetras.test(palabra);
};

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
const parOImpar = () => {
  let numero = prompt("Ingrese número para saber si es par o impar");
  if (!esNumeroEntero(numero)) {
    return;
  }
  numero = parseInt(numero);
  if (numero % 2 === 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
};
// parOImpar()

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
const posiNegaCero = () => {
  let numero = prompt(
    "Ingrese número para saber si es positivo, negativo o cero"
  );
  if (!esNumeroDecimal(numero)) {
    return;
  }
  numero = parseFloat(numero);
  if (numero > 0) {
    console.log("número positivo");
  } else if (numero < 0) {
    console.log("número negativo");
  } else {
    console.log("número cero");
  }
};
// posiNegaCero()

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
const mayorDosNumeros = () => {
  let numero1 = prompt("Ingrese primer número");
  let numero2 = prompt("Ingrese segund número");
  if (!esNumeroDecimal(numero1) || !esNumeroDecimal(numero2)) {
    return;
  }
  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);
  console.log(`Número maximo: ${Math.max(numero1, numero2)}`);
};
// mayorDosNumeros();

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
const validarContrasenia = () => {
  let contrasenia = prompt("Ingrese contraseña mayor a 8 caracteres");
  while (contrasenia.length < 8) {
    contrasenia = prompt("Ingrese contraseña mayor a 8 caracteres");
  }
  let regexcontra = /^[a-zA-Z0-9_\-!¡?¿*&%$#@(){}]+$/;
  if (regexcontra.test(contrasenia)) {
    console.log("Contraseña valida");
  } else {
    console.log("Contraseña invalida");
  }
};
// validarContrasenia();

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
const calificacionAprobatoria = () => {
  let nota = prompt("Ingrese notas");
  if (!esNumeroEntero() || parseInt(nota) > 100) {
    return;
  } else {
    if (nota >= 70) {
      console.log("Haz aprobado");
    } else {
      console.log("No haz aprobado");
    }
  }
};
// calificacionAprobatoria();

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
const letraProbar = () => {
  let letra = prompt("Ingrese una letra");
  if (!esSoloPalabra(letra) || letra.length > 1) {
    return;
  } else {
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      console.log("Es vocal");
    } else {
      console.log("Es consonante");
    }
  }
};
// letraProbar();

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
const diaSemana = () => {
  const semana = {
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    7: "Domingo",
  };
  let dia = prompt(
    "Ingrese un numero del 1 al 7 para saber el dia se la semana"
  );
  if (!esNumeroEntero(dia) || parseInt(dia) > 7) {
    return;
  } else {
    console.log(`Ese valor corresponde a: ${semana[dia]}`);
  }
};
// diaSemana();

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
const esPrimo = () => {
  let numero = prompt("Ingrese un numero");
  if (!esNumeroEntero(numero)) {
    return;
  } else {
    numero = parseInt(numero);
    if (numero == 0 || numero == 1 || numero == 4) {
      console.log("No es primo");
      return;
    }
    for (let x = 2; x < numero / 2; x++) {
      console.log(numero / 2);
      if (numero % x == 0) {
        console.log("No es primo");
        return false;
      }
    }
    console.log("Es primo");
  }
};
// esPrimo();

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
const personaMayor = () => {
  let numero = prompt("Dame tu edad");
  if (!esNumeroEntero(numero)) {
    return;
  } else {
    if (parseInt(numero) >= 18) {
      console.log("Es mayor de edad");
    } else {
      console.log("Es menor de edad");
    }
  }
};
// personaMayor();

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
const sumaNumerosMayor100 = () => {
  let numero1 = prompt("Dame un número");
  let numero2 = prompt("Dame otro número");
  if (!esNumeroDecimal(numero1) || !esNumeroDecimal(numero2)) {
    return;
  } else {
    let resultado = parseFloat(numero1) + parseFloat(numero2);
    if (resultado > 100) {
      console.log(`El número ${resultado} es mayor a 100`);
    } else if (resultado < 100) {
      console.log(`El número ${resultado} es menor a 100`);
    } else {
      console.log(`El número ${resultado} es igual a 100`);
    }
  }
};
// sumaNumerosMayor100();

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
const numeroMayor3 = () => {
  let numero1 = prompt("Dame un número");
  let numero2 = prompt("Dame otro número");
  let numero3 = prompt("Dame otro número más");
  if (
    !esNumeroDecimal(numero1) ||
    !esNumeroDecimal(numero2) ||
    !esNumeroDecimal(numero3)
  ) {
    return;
  } else {
    let mayor = Math.max(
      parseFloat(numero1),
      parseFloat(numero2),
      parseFloat(numero3)
    );
    console.log(`Número mayor de los 3 es: ${mayor}`);
  }
};
// numeroMayor3();

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
const mayusMinus = () => {
  let letra = prompt("Ingrese una letra");
  if (!esSoloPalabra(letra) || letra.length > 1) {
    return;
  } else {
    if (letra === letra.toUpperCase()) {
      console.log("Es letra mayúscula");
    } else {
      console.log("Es letra minúscula");
    }
  }
};
// mayusMinus();

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
const numeroPerfecto = () => {
  let numero = prompt("Ingrese número");
  if (!esNumeroEntero(numero)) {
    return;
  } else {
    numero = parseInt(numero);
    if (numero <= 1) {
      console.log(`${numero}, no es número perfecto`);
      return;
    }
    let suma = 1;
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        suma += i;
      }
    }
    if (numero === suma) {
      console.log(`${numero} es número perfecto`);
    } else {
      console.log(`${numero}, no es número perfecto`);
    }
  }
};
// numeroPerfecto();

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
const factoresPrimos = () => {
  let numero = prompt("Ingrese número");
  if (!esNumeroEntero(numero)) {
    return;
  } else {
    let descomponer= ""
    numero = parseInt(numero);
    let dividir = 2;
    while (Math.abs(numero) != 1) {
      if (numero % dividir === 0) {
        numero = numero / dividir;
        // console.log(dividir)
        descomponer = descomponer+dividir.toString() +"x";
      } else {
        dividir++;
      }
    }
    console.log(descomponer.slice(0,-1))
  }
};
// factoresPrimos();

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
const fechaValida = ()=>{
    let dia = prompt("Ingrese día"); 
    let mes = prompt("Ingrese mes"); 
    let anio = prompt("Ingrese año");
    if(!esNumeroEntero(dia) ||!esNumeroEntero(mes) || !esNumeroEntero(anio)){
        return;
    }
    else{
        dia = parseInt(dia);
        mes = parseInt(mes);
        anio = parseInt(anio);
        if (mes < 1 || mes > 12) {
            console.log(`${dia}/${mes}/${anio} Fecha no valida`)
            return;
        }
        
        if (anio < 1) {
              console.log(`${dia}/${mes}/${anio} Fecha no valida`)
              
            return;
          }
          let diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          let esBisiesto = (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;
        
          // Validación
          if (esBisiesto && mes == 2) {
            if(dia <= 29){
                console.log(`${dia}/${mes}/${anio} Fecha valida`)
            }
            else{
                console.log(`${dia}/${mes}/${anio} Fecha no valida`)
            }
        } else {
            if(dia <= diasDelMes[mes - 1]){
                console.log(`${dia}/${mes}/${anio} Fecha valida`)
            }
            else{
                console.log(`${dia}/${mes}/${anio} Fecha no valida`)
            }
          }
    } 
}
// fechaValida();

//TAREA 1 Switch

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

//TAREA 2 Ciclos

// Imprimir los números pares del 2 al 20 en la consola.
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

//TAREA 3 Arrays

// Dado un array de números, escribir una función que retorne el número más grande del array.

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
