"use strict";

var appsuma = new Vue({
    el: "#appsuma",
    data: {
        // listado: Esto guarda los números ingresados
        listado: [],
        // numero: Este es el número ingresado por pantalla. Si bien es type=number, para 
        // que aparezca el placeholder, debe ser "" la primera vez.
        numero: "", 
        // suma: guarda la suma de todos los números.
        suma: 0
    },
    methods: {
        agregar() {
            // Si número es "" o es 0, se evalúa como FALSE. Si es 
            // otro valor, se evalúa como TRUE.
            // Para ejecutar el código, el número NO debe ser vacío o cero. 
            if (this.numero) {
                // push() agrega el número al final de la lista.
                this.listado.push(this.numero);
                // deja la entrada lista para otro número.
                this.numero = "";
                // ejecuta la suma.
                this.sumar();
            }
        },
        deshacer() {
            // pop() quita el último de la lista.
            this.listado.pop();
            // una vez quitado, hay que volver a sumar.
            this.sumar();
        },
        sumar() {
            /*
            La suma se hace con reduce().
            El método reduce() se ejecuta por cada elemento del arreglo.
            reduce() tiene dos parámetros:
              El primero es una función de dos parámetros que
              se ejecuta por cada elemento del arreglo. El segundo es el
              valor inicial de un acumulador.
            La función de dos parámetros funciona así:
              Se ejecuta esta función por cada elemento del arreglo. 
              El primer parámetro de esta función es el valor acumulado en
              la iteración anterior. El segundo parámetro, es el valor del
              arreglo que se está analizando en la iteración actual.
            
            Ejemplo: ¿Cuál es el valor de x si se ejecuta el siguiente código?
                x = lista.reduce(sumador,0)
            Suponiendo que el arreglo "lista" tiene los valores: [11,22,45], y
            que la función "sumador" se define así:
                function sumador(a,n) { return a+n; }
            
            Solución: La función "sumador" se ejecutará en tres iteraciones 
            ya que "lista" tiene tres elementos.

            Iteración 1: La primera vez "sumador" se invoca con los valores 
            a=0 y n=11. Notar que a=0 porque se indicó el segundo parámetro 
            de reduce() como 0. El resultado de "sumador" en la iteración 1 
            es 0+11=11.

            Iteración 2: La segunda vez, "sumador" se invoca con los valores 
            a=11 y n=22. El resultado de "sumador" en la iteración 2 es 11+22=33.

            Iteración 3: La tercera vez, "sumador" se invoca con los valores 
            a=33 y n=45. El resultado de "sumador" en la iteración 3 es 33+45=78.
            Ya no hay más elementos en el arreglo lista. Por lo tanto, en el 
            caso planteado, el valor de x es 78:
                x = lista.reduce(sumador,0) ==>> x = 78

            */

            // La función de sumatoria está escrita con notación de flecha y
            // es una función anónima.
            this.suma = this.listado.reduce((a, n) => a + n, 0);

            /* Nota: La notación de flecha: (a, n) => a + n
            Es equivalente a: 
                function (a, n) {
                    return a + n;
                }
            Dicho de otra manera, el código anterior sin la notación de 
            flecha queda así:
            this.suma = this.listado.reduce(
                function (a, n) {
                    return a + n;
                }, 0);
            Lo que, en este caso, resulta un poco más difícil de leer.
                
            */
        }
    }
});