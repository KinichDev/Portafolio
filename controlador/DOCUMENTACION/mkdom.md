# Extensiones Personalizadas para el Prototipo de `HTMLElement`

Este proyecto extiende el prototipo nativo de `HTMLElement` para agregar métodos útiles que simplifican tareas comunes en la manipulación del DOM. Las funciones incluidas abarcan desde animaciones hasta la gestión de eventos y estilos dinámicos.

## Métodos Disponibles

### `displayNone`
Oculta un elemento HTML con una animación de desvanecimiento.

**Uso:**
```javascript
document.getElementById('miElemento').displayNone();
```
**Descripción:**
- Aplica una animación de desvanecimiento durante 0.5 segundos.
- Cambia el estilo `display` a `none` al finalizar la animación.

---

### `displayFlex`
Muestra un elemento HTML con una animación de aparición y lo configura en modo `flex`.

**Uso:**
```javascript
document.getElementById('miElemento').displayFlex();
```
**Descripción:**
- Aplica una animación de aparición durante 0.5 segundos.
- Cambia el estilo `display` a `flex` al finalizar la animación.

---

### `entradaSuave`
Aplica una animación cinematográfica suave a un elemento.

**Uso:**
```javascript
document.getElementById('miElemento').entradaSuave();
```
**Descripción:**
- Aplica una animación lenta que transforma el fondo, el brillo, y la escala del elemento.
- Si la animación no está definida, la crea dinámicamente como una regla CSS.

---

### `onScrollIntoView`
Ejecuta una función cuando el elemento entra en el viewport.

**Uso:**
```javascript
document.getElementById('miElemento').onScrollIntoView((entry) => {
    console.log('Elemento visible:', entry.target);
});
```
**Parámetros:**
- `callback` (función): Se ejecuta cuando el elemento es visible.
- `options` (opcional): Configura el comportamiento del observador.

**Retorno:**
- Devuelve el observador creado para desconexión manual si es necesario.

---

### `nivelScroll`
Calcula el porcentaje de desplazamiento dentro de un contenedor.

**Uso:**
```javascript
let porcentaje = document.getElementById('contenedor').nivelScroll();
console.log('Porcentaje de scroll:', porcentaje);
```
**Descripción:**
- Devuelve el porcentaje de scroll dentro de un elemento en un valor entre `0` y `100`.

---

### `removeElement`
Elimina un elemento HTML con una animación de desvanecimiento.

**Uso:**
```javascript
document.getElementById('miElemento').removeElement();
```
**Descripción:**
- Aplica una animación de desvanecimiento durante 0.3 segundos.
- Elimina el elemento del DOM al finalizar la animación.

---

### `toggleDisplayFlexNone`
Alterna entre mostrar un elemento como `flex` o ocultarlo como `none`.

**Uso:**
```javascript
document.getElementById('miElemento').toggleDisplayFlexNone();
```
**Descripción:**
- Cambia dinámicamente entre los estilos `display: flex` y `display: none` según el estado actual del elemento.

---

## Instalación
Puedes sencillamente descargar el .JS en tu carpeta de preferencia para importarla y comenzar a desarrollar.

## Requisitos
- Un navegador moderno con soporte para `IntersectionObserver`.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas agregar más métodos o mejorar los existentes, puedes ponerte en contacto .

---

## Licencia
Este proyecto es de dominio público. Puedes usarlo y modificarlo libremente.
