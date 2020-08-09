# Menú simple

**Descripción**: El menú basado en FlexGrid fue desarrollado en clases como demostración del uso de FlexGrid para crear secciones responsivas en una página HTML.

**Estrucutra HTML**: 

Para incluir la grilla FlexGrid, se utiliza un tag semántico ```link```. No es necesario descargarla. Basta con indicar el CDN donde se aloja.

```HTML
<link rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
    type="text/css">
```
El menú se basa en marcadores ```div``` con clase ```menu``` para adaptar la presentación. Cada opción o ítem en el menú está conentido en una columna de FlexGrid.

Recordar que siempre es necesario indicar todos los tamaños de pantalla para establecer la visualización correcta de la grilla. En cada tamaño de pantalla, se deben contar 12 columnas para que ocurra el salto de línea.

```HTML
    <div class="menu">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="menu_item">Perfil</div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="menu_item">Dominios</div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="menu_item">Experiencia</div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="menu_item">Contacto</div>
            </div>
        </div>
    </div>
```

De acuerdo a esta configuración, para pantallas muy pequeñas (```col-xs-*```) cada elemento del menú ocupará 12 columnas por lo que aparecerá una opción por línea. Para pantallas pequeñas (```col-sm-*```) y medianas (```col-md-*```); ocuparán 6 columnas por lo que aparecerán dos opciones por línea (6 x 2 = 12). Para pantallas grandes (```col-lg-*```); ocuparán 3 columnas por lo que apraecerán cuatro opciones por línea (3 x 4 = 12).

**Hoja de estilo**:

La clase ```menu``` cambia el color de la barra de menú.

```css
.menu {
    background-color: lavender;
}
```
La clase ```menu_item``` describe el formato de cada elemento del menú.
```css
.menu_item {
    display: inline-block;
    background-color: lavender;
    text-align: center;
    font-size: 16px;
    vertical-align: top;
    line-height: 64px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
}
```
El pseudo selector ```:hover``` agrega una sombra al ítem del menú cuando el cursor del ratón pasa por encima.
```css
.menu_item:hover {
    position: relative;
    background-color: lightsteelblue;
    box-shadow: 0px 8px 10px 4px gray;
}
```

[Ver demo del menú basado en FlexGrid](https://rodrigogalvez.github.io/didactica/menufg/menufg.html)