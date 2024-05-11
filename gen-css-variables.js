const fs = require("fs");

// Suponiendo que tokensData contiene tus tokens de diseño
const tokensData = fs.readFileSync("./tokens.json", "utf8");
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

// Separar tokens por tema
const lightTokens = tokens.entities.filter(
  (token) => token.category_id == "sys.color.light"
);
const darkTokens = tokens.entities.filter(
  (token) => token.category_id == "sys.color.dark"
);

// Función para procesar tokens y generar CSS
function processVariables(themeTokens, theme) {
  let cssVariablesContent = ":root {\n";
  let cssClassesContent = "";

  themeTokens.forEach((token) => {
    const cssVarName = convertToCssVarName(token.id);
    cssVariablesContent += `  ${cssVarName}: ${token.value};\n`;
  });

  cssVariablesContent += "}";

  // Combinar contenido de variables y clases CSS
  return cssVariablesContent + "\n" + cssClassesContent;
}

// Generar CSS para cada tema
const themeLightCss = processVariables(lightTokens, "light");
// const themeDarkCss = processTokens(darkTokens, "dark");

// Guardar en archivos
fs.writeFileSync("./theme-light.css", themeLightCss);
// fs.writeFileSync("./theme-dark.css", themeDarkCss);
