import { isDeepStrictEqual } from "node:util";

const colores = ["rojo", "verde", "azul", "amarillo", "gris", "blanco", "negro"];
const coloresAEliminar = ["amarillo", "cafe", "blanco"];
const argumentos = process.argv.slice(2);

try {
  if (argumentos.length !== 0 && argumentos.length !== 2) {
    throw new Error("Indica la lista original y la lista de exclusión en JSON.");
  }

  const [lista, excluir] = argumentos.length === 0
    ? [colores, coloresAEliminar]
    : argumentos.map((entrada) => JSON.parse(entrada));

  if (!Array.isArray(lista) || !Array.isArray(excluir)) {
    throw new Error("Ambas entradas deben ser listas.");
  }

  const resultado = lista.filter(
    (elemento) => !excluir.some((excluido) => isDeepStrictEqual(elemento, excluido)),
  );
  console.log(JSON.stringify(resultado));
} catch (error) {
  console.error(error instanceof SyntaxError ? "La entrada contiene JSON inválido." : error.message);
  process.exitCode = 1;
}
