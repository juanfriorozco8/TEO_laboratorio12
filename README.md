Universidad del Valle de Guatemala

Facultad de Ingeniería

Teoría de la Computación

# Laboratorio 12

## Programación funcional con funciones lambda

Juan Francisco Orozco Mijangos

24647

## Descripción del proyecto

Implementamos tres ejercicios en JavaScript para practicar cómo podemos transformar datos con funciones lambda. Ordenamos una lista de diccionarios al comparar sus valores por la clave que indiquemos. Para transponer una matriz, recorremos sus columnas y armamos una fila nueva con los valores de cada una. También filtramos una lista para quedarnos con los elementos que no aparecen en la lista de exclusión.

## Instalación

Necesitamos Node.js 22 o superior. Podemos comprobar la versión con `node --version`. Los programas usan solo módulos integrados en Node.js.

## Ejecución

Desde la raíz del proyecto, ejecutamos los ejemplos del enunciado con estos comandos.

```sh
node problema2_ordenar.mjs
node problema3_transponer.mjs
node problema4_eliminar.mjs
```

Los tres programas imprimen sus resultados en JSON. Con los ejemplos del laboratorio, el primero ordena los modelos como `2`, `7` y `216`. El segundo devuelve `[[1,4,7],[2,5,8],[3,6,9]]` y el tercero devuelve `["rojo","verde","azul","gris","negro"]`.

### Entradas propias

```sh
node problema2_ordenar.mjs model '[{"make":"Nokia","model":216},{"make":"Mi Max","model":2}]'
node problema3_transponer.mjs '[[1,2,3],[4,5,6]]'
node problema4_eliminar.mjs '["rojo","blanco","azul","blanco"]' '["blanco","cafe"]'
```

- `problema2_ordenar.mjs` usa `model` de forma predeterminada. La clave debe existir en cada diccionario y todos sus valores deben ser números finitos o todos deben ser textos. Los empates conservan el orden de entrada.
- `problema3_transponer.mjs` admite matrices rectangulares. Para una matriz vacía o sin columnas devuelve `[]`.
- `problema4_eliminar.mjs` quita todas las coincidencias y conserva el orden de los elementos restantes. Compara listas y objetos por su contenido.
