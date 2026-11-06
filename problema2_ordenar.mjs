const ejemplo = [
  { make: "Nokia", model: 216, color: "Black" },
  { make: "Mi Max", model: 2, color: "Gold" },
  { make: "Samsung", model: 7, color: "Blue" },
];

const [clave = "model", entrada] = process.argv.slice(2);

try {
  const diccionarios = entrada === undefined ? ejemplo : JSON.parse(entrada);
  if (!Array.isArray(diccionarios)) {
    throw new Error("La entrada debe ser una lista de diccionarios.");
  }

  const entradas = diccionarios.map((diccionario, indice) => {
    if (diccionario === null || typeof diccionario !== "object" || Array.isArray(diccionario)) {
      throw new Error(`El elemento ${indice + 1} debe ser un diccionario.`);
    }
    if (!Object.hasOwn(diccionario, clave)) {
      throw new Error(`Falta la clave "${clave}" en el diccionario ${indice + 1}.`);
    }

    const valor = diccionario[clave];
    if (typeof valor !== "string" && !Number.isFinite(valor)) {
      throw new Error(`La clave "${clave}" debe contener texto o un número finito.`);
    }
    return { diccionario, valor };
  });

  const tipo = typeof entradas[0]?.valor;
  if (entradas.some(({ valor }) => typeof valor !== tipo)) {
    throw new Error(`Los valores de la clave "${clave}" deben ser del mismo tipo.`);
  }

  const resultado = entradas
    .sort(({ valor: a }, { valor: b }) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
    .map(({ diccionario }) => diccionario);

  console.log(JSON.stringify(resultado));
} catch (error) {
  console.error(error instanceof SyntaxError ? "La entrada contiene JSON inválido." : error.message);
  process.exitCode = 1;
}
