const fs = require("fs");
const path = require("path");

// Función para convertir de RGB a Hexadecimal
const rgbToHex = (r, g, b) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = parseInt(x).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

let colors = {};

// Leer el contenido del archivo CSS de manera síncrona
const data = fs.readFileSync(path.join(__dirname, "material-theme/light.css"), "utf8");

// Modificamos la expresión regular para manejar RGB con o sin comas
const regex = /--md-sys-color-(.+?): rgb\((\d+)\s*(\d+)\s*(\d+)\);/g;
let match;

while ((match = regex.exec(data)) !== null) {
  const hexColor = rgbToHex(match[2], match[3], match[4]);
  colors[`qmc-${match[1]}`] = hexColor;
}

// Exportación del objeto colors
module.exports = { colorTheme: colors };
