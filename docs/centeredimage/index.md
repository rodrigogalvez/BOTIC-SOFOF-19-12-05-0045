# Centrar imagen en cuatro diferentes maneras

**Descripción**: Este ejercicio fue hecho después de una de las pruebas del módulo 1. Se pidió a los estudiantes crear una página de rescate de perritos en adopción, basada en una galería de imágenes que debía mostrar una fotografía pequeña y grande de cada perrito. Los estudiantes tuvieron problemas para centrar las imagenes, por lo que desarrollé este ejercicio específico para aclarar.

**Estrucutra HTML**: La estructura es muy sencilla. Incluye cada imagen dentro de un tag semnántico ```div``` con clase ```imagecontainer``` para especificar un espacio cuadrado. Luego cada imagen se presenta con dos clases diferentes:
* ```centeredcoverimage```: presenta la imagen ocupando todo el espacio disponible en el ```div``` contenedor.
* ```imagecenteredadjusted```: presenta la imagen ajustada para que se vea completa en el ```div``` contenedor.

La imagen de *Maya.jpg* es tipo paisaje (más ancha que alta) y la imagen *Pexel.jpg* es de tipo retrato (más alta que ancha).

```xml
    <div class="imagecontainer">
        <img class="centeredcoverimage" src="Maya.jpg" alt="">
    </div>
    <div class="imagecontainer">
        <img class="centeredcoverimage" src="Pexel.jpg" alt="">
    </div>
    <div class="imagecontainer">
        <img class="imagecenteredadjusted" src="Maya.jpg" alt="">
    </div>
    <div class="imagecontainer">
        <img class="imagecenteredadjusted" src="Pexel.jpg" alt="">
    </div>
```

**Hoja de estilo**: 
La clase ```imagecontainer``` prepara un contenedor cuadrado para presentar una imágen.
```css
.imagecontainer {
    height: 20vmin;
    width: 20vmin;
    border: 1px solid black;
    display: inline-block;
}
```
La clase ```centeredcoverimage``` presenta la imagen centrada y cubriendo todo el tamaño del contenedor.
```css
.centeredcoverimage {
    height: 100%;
    width: 100%;
    object-fit: cover;
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%, -50%);
}
```
La clase ```imagecenteredadjusted``` presenta la imagen ajustada al borde más grande para que aparezca completa en el espacio del contenedor.
```css
.imagecenteredadjusted {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
```

[Ver demo de imágenes centradas](https://rodrigogalvez.github.io/didactica/centeredimage/centeredimage.html)

