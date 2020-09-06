"use strict";

// https://validarutchile.cl/calcular-digito-verificador.php

function verificaRUT(RUT) {
    // Si el RUT es muy corto o está en blanco, abortar.
    if (!RUT||RUT.length<3) return false;

    let [numero,digitoVerificador]=RUT.toUpperCase().split("-");

    return calculaDigitoVerificador(numero)==digitoVerificador;
}



function calculaDigitoVerificador(numero) {

    // Convertir numero (que es una cadena de texto)
    // en una lista de dígitos (números enteros)
    let digitos=numero.split("").map((digito)=>{return parseInt(digito);});

    // Invertir la lista.
    let digitosInvertidos=digitos.reverse();

    // Factores para multiplicar
    let factores=[2,3,4,5,6,7];

    // Multiplicar los dígitos invertidos por los
    // factores y sumar definir una función para 
    // multiplicar y sumar. Para hacer todo esto,
    // se define una función que acumulará las 
    // multiplicaciones una por una.
    function multiplicaDigitoPorFactor(acumulado,digito,indice) {
        return acumulado+digito*factores[indice%6];
    }

    // Ejecutar la función para multipliar y sumar
    // en la lista de dígitos invertidos
    let suma=digitosInvertidos.reduce(multiplicaDigitoPorFactor,0);

    // Calcula el módulo 11 de la suma
    let residuo=suma%11;

    // Calcula el valor del dígito verifiador como número
    let verificadorCalculado=11-residuo;

    // El resultado final es el dígito verificador 
    // calculado como texto.
    // Si el dígito verificador calculado como número
    // es 11, el dígito verificador es "0".
    // Si el dígito verificador calculado como número 
    // es 10, el dígito verificador es "K".
    // En cualquier otro caso, el dígito verificador 
    // es el mismo calculado convertido en texto. 
    switch(verificadorCalculado){
        case 11:
            return "0";
        case 10:
            return "K";
        default:
            return verificadorCalculado.toString();
    }
}