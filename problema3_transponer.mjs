const ejemplo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [entrada] = process.argv.slice(2);

try {
  const matriz = entrada === undefined ? ejemplo : JSON.parse(entrada);
  if (!Array.isArray(matriz) || !matriz.every(Array.isArray)) {
    throw new Error("La matriz debe ser una lista de listas.");
  }

  const columnas = matriz[0]?.length ?? 0;
  if (matriz.some((fila) => fila.length !== columnas)) {
    throw new Error("Todas las filas deben tener la misma longitud.");
  }

  const resultado = Array.from(
    { length: columnas },
    (_, columna) => matriz.map((fila) => fila[columna]),
  );
  console.log(JSON.stringify(resultado));
} catch (error) {
  console.error(error instanceof SyntaxError ? "La entrada contiene JSON inválido." : error.message);
  process.exitCode = 1;
}
