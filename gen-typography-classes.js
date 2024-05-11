const fs = require("fs");
const path = require("path");

// Lee el archivo JSON
const fontsDataPath = path.join(__dirname, "material-theme/data/fonts.json");
const fontsDataRaw = fs.readFileSync(fontsDataPath, "utf8");
const fontsData = JSON.parse(fontsDataRaw);

// Función para mapear los tokens a propiedades CSS
const mapTokenToCss = (tokens, fontFamily) => {
  const cssProperties = {};
  tokens.forEach((token) => {
    switch (token.key) {
      case "family":
        cssProperties.fontFamily = fontFamily;
        break;
      case "line-height":
        cssProperties.lineHeight = `${token.value}px`;
        break;
      case "weight":
        const fontWeightMap = { Regular: 400, Medium: 500 };
        cssProperties.fontWeight = fontWeightMap[token.value] || token.value;
        break;
      case "tracking":
        // Convertir tracking a ems basado en el tamaño de la fuente si es necesario
        cssProperties.letterSpacing = `${token.value}px`;
        break;
      case "size":
        cssProperties.fontSize = `${token.value}px`;
        break;
    }
  });
  return cssProperties;
};

// Función para generar clases de Tailwind
const generateTailwindClasses = (entities, fontFamily) => {
  return entities.reduce((acc, entity) => {
    const className = entity.id.split(".").pop().replace(/-/g, "-");
    const cssProperties = mapTokenToCss(entity.tokens, fontFamily);
    acc[`.${className}`] = cssProperties;
    return acc;
  }, {});
};

// Generar las clases de utilidades
export function typographyUtilityClasses(fontFamily = 'Roboto') {
  return generateTailwindClasses(fontsData.entities, fontFamily);
}
