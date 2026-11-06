Universidad del Valle de Guatemala

Facultad de Ingeniería

Teoría de la Computación

# Laboratorio 12

## Programación funcional con funciones lambda

Juan Francisco Orozco Mijangos

24647

## Descripción del proyecto

En el laboratorio se estudiaron conceptos de cálculo lambda y se usaron funciones flecha de JavaScript para transformar datos.

- **Problema 1.** Se aplicó la reducción β a la negación de los booleanos de Church. Se usó el factorial para explicar la recursión y la aplicación repetida de una función para representar un ciclo. También se dieron ejemplos de cuándo conviene usar programación funcional. [Solución en PDF](problema%201/problema1.pdf)
- **Problema 2.** Se implementó un programa que ordena una lista de diccionarios por la clave indicada.
- **Problema 3.** Se implementó un programa que transpone una matriz representada como lista de listas. Cada columna de la matriz original pasa a ser una fila del resultado.
- **Problema 4.** Se implementó un filtro que elimina los elementos indicados en una segunda lista y conserva el orden de los elementos restantes.

## Instalación

Se requiere Node.js 22 o superior. Se puede comprobar la versión con `node --version`. Los programas solo usan módulos integrados de Node.js.

## Ejecución

Desde la raíz del proyecto, se ejecutan los ejemplos del enunciado con estos comandos.

```sh
node problema2_ordenar.mjs
node problema3_transponer.mjs
node problema4_eliminar.mjs
```

También se pueden pasar listas en formato JSON como argumentos.

```sh
node problema2_ordenar.mjs model '[{"make":"Nokia","model":216},{"make":"Mi Max","model":2}]'
node problema3_transponer.mjs '[[1,2,3],[4,5,6]]'
node problema4_eliminar.mjs '["rojo","blanco","azul","blanco"]' '["blanco","cafe"]'
```
