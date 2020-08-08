# Menú simple

**Descripción**: El menú simple fue desarrollado en clases durante el módulo de introducción a HTML y CSS. Consiste en una lista de opciones presentadas en la parte superior de la pantalla que se destacan al pasar el cursor del ratón por encima. Una de las opciones del menú tiene un submenú.

**Estrucutra HTML**: El menú se basa en marcadores de listas sin orden ```ul``` y ```li```. El ```ul``` más externo tiene clase ```menu``` para ayudar a presentar el estilo de cada opción del menú. La clase ```submenu``` se utiliza para señalara el ítem que contiene un submenú.

```HTML
    <ul class="menu">
        <li><a href="#perfil">Perfil</a></li>
        <li><a href="#dominio">Dominios</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li class="submenu">
            <a href="#">Contacto</a>
            <ul>
                <li><a href="#contacto">Correo</a></li>
                <li><a href="#contacto">Teléfono</a></li>
                <li><a href="#contacto">RRSS</a></li>
            </ul>
        </li>
    </ul>
```
**Hoja de estilo**: 

La clase ```menu``` define el alto y el color de la barra de menú.
```css
.menu {
    height: 64px;
    background-color: lavender;
    text-decoration: none;
    padding: 0px;
}
```
Los elelemntos ```li``` que están bajo la clase ```menu``` se despliegan cnetrados, alineados arriba.
```css
.menu li {
    display: inline-block;
    background-color: lavender;
    text-align: center;
    font-size: 16px;
    vertical-align: top;
    line-height: 64px;
    width: 10em;
    font-family: Arial, Helvetica, sans-serif;
}
```
Los enlaces ```a href``` se despliegan sin decoración.
```css
.menu li a {
    color: black;
    text-decoration:none;
}
```
Cuando el cursor del ratón pasa por encima de alguna de las opciones, se dibuja una sombra para destacar.
```css
.menu li:hover {
    background-color: lightsteelblue;
    box-shadow: 0px 8px 10px 4px gray;
    position: relative;
}
```
La clase ```submenu``` despliega los elementos ```li``` cuando el ratón pasa por encima de la opción. Notar que los elemenos por defecto no se despliegan (```display: none```).
```css
.menu .submenu ul {
    display: none;
    position: absolute;
    max-width: 200px;
    padding: 0px;
    margin-left: 0px;
    box-shadow: 0px 8px 10px 4px gray;
}
```
Si bien el submenú no está visible, se puede indicar su formato de todas maneras.
```css
.menu .submenu ul li {
    min-width: 100%;
    float: left;
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 0px;
}
```
El submenú se vuelve sibile si el ratón pasa por encima.
```css
.menu .submenu:hover ul {
    display: block;
}
```
Además cada ítem del submenú cambia de color cuando el ratón pasa por encima.
```css
.menu .submenu li:hover {
    background-color: lightsteelblue;
    box-shadow: none;
}
```

[Ver demo del menú simple](https://rodrigogalvez.github.io/didactica/menu/menu.html)

