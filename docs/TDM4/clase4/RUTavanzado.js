"use strict";

// https://validarutchile.cl/calcular-digito-verificador.php

function verificaRUT(RUT) {
    // Si el RUT es muy corto o está en blanco, abortar.
    if (!RUT||RUT.length<3) return false;

    // Separa el número del dígito verificador.
    let [numero,digitoVerificador]=RUT.toUpperCase().split("-");

    // Calcula el dígito verificador correcto y
    // lo compara con el ingresado.
    return calculaDigitoVerificador(numero)==digitoVerificador;
}

function calculaDigitoVerificador(numero) {
    // El numero está escrito como texto. Se 
    // convierte a una lista de números, se 
    // inverte y se multiplica cada dígito 
    // por el factor 2,3,4,5,6 y 7. Si hay más 
    // de seis dígitos, se comienza denuevo
    // por el 2. Se suman todas estas 
    // multiplicaciones y se calcula la 
    // diferencia contra 11. Eso entrega el
    // dígito verificador calculado.

    // Nota: El factor se puede calcular usando el
    // índice del arreglo módulo 6 y sumando 2. 
    // Esta fórmula produce la misma secuencia de 
    // factores 2,3,4,5,6,7,2,3,4,5,6,7...

    let verificadorCalculado=11-
        numero
        .split("")
        .map((digito)=>{return parseInt(digito);})
        .reverse()
        .reduce((acumulado,digito,indice)=>{ return acumulado+digito*(indice%6+2);},0)%11;
    
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