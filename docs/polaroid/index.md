# Efecto de imagen con sombra

**Descripción**: Este ejercicio fue hecho después de una de las pruebas del módulo 1. Se pidió a los estudiantes crear una página de rescate de perritos en adopción, basada en una galería de imágenes que debía mostrar una fotografía pequeña y grande de cada perrito. Para presentar la imagen más grande, me pareció interesante inclinarla y ponerle un marco como si fuera una foto tipo *Polaroid*.

**Estrucutra HTML**: La estructura es muy sencilla. Pero hay que tener en cuenta un detalle importante: se necesitan dos contenedores anidados (dos ```div``` anidados).

El primer ```div``` con clase ```polaroid```, que muestra un marco simple con bordes redondeados, inclinado cinco grados y con sombra. El segundo ```div``` con clase ```centeredimage``` para mostrar la imagen cuadrada ocupando todo el espacio disponible de este contenedor.

```HTML
    <div class="polaroid">
        <div class="centeredimage">
            <img src="polaroid.jpg" alt="">
        </div>
    </div>
```

**Hoja de estilo**: 
La clase ```polaroid``` presenta un marco inclinado con bordes redondeados y sombra.
```css
.polaroid {
    border: 1px solid gray;
    width: 60vmin;
    height: 60vmin;
    overflow: hidden;
    top: calc(50% - 30vmin);
    left: calc(50% - 30vmin);
    position: fixed;
    padding: 4px;
    border-radius: 8px;
    transform: rotate(5deg);
    box-shadow: 1vmin 5vmin 5vmin 0vmin gray;
}
```
La clase ```centeredimage``` prepara un contenedor cuadrado para presentar una imágen ocupando todo el espacio disponible.
```css
.centeredimage {
    height: 100%;
    width: 100%;
}
```
La misma clase modifica el elemento ```img``` para que aparezca centrado ocupando todo el espacio disponible.
```css
.centeredimage img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    position: relative;
}
```

[Ver demo de imágenes centradas](https://rodrigogalvez.github.io/didactica/centeredimage/centeredimage.html)

