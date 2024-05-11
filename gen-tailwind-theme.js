const fs = require("fs");

// Suponiendo que tokensData contiene tus tokens de diseño
const tokensData = fs.readFileSync("./material-theme/data/tokens.json", "utf8");
const tokens = JSON.parse(tokensData);

// Función para convertir el ID del token en nombre de variable CSS
function convertToCssVarName(id) {
  return (
    "--" +
    id
      .replace(/^md\.sys\.color\./, "")
      .replace(/\./g, "-")
      .replace(/-(light|dark)$/, "")
  );
}

// Variables
const colorTokens = tokens.entities.filter(
  (token) => token.category_id == "sys.color"
);

// Separar tokens por tema
const lightTokens = tokens.entities.filter(
  (token) => token.category_id == "sys.color.light"
);
const darkTokens = tokens.entities.filter(
  (token) => token.category_id == "sys.color.dark"
);

// Función para procesar tokens y generar CSS
function processTokens(themeTokens, theme) {
  const colors = themeTokens.map((token) => {
    return {
      [convertToCssVarName(token.name)
        .replace("--", "")
        .replace(/-light|-dark$/, "")]: token.value,
    };
  });

  return colors;
}

// Generar CSS para cada tema
const themeLightCss = processTokens(lightTokens, "light");
const themeDarkCss = processTokens(darkTokens, "dark");

export const lightThemeColors = themeLightCss.reduce((obj, item) => {
  const key = Object.keys(item)[0]; // Obtiene la clave del objeto actual
  obj[key] = item[key]; // Asigna el valor de la clave al objeto resultante
  return obj;
}, {});
