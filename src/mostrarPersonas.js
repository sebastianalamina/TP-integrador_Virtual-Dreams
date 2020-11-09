// La biblioteca request-promise es obsoleta, por lo
// que, en su lugar, se utilizará "https".
const https = require('https')
const url = 'https://reclutamiento-14cf7.firebaseio.com/personas.json'

// Se utiliza el método 'get' pues es la versión simplificada
// del método 'request' cuando se trata del verbo GET...
var x = https.get(url, (res) => {
  // Imprimimos información sobre la consulta...
  console.log(`Código de estado: ${res.statusCode} - ${res.statusMessage}`);
  console.log(`Headers:`)
  console.log(res.headers)
  // Leemos los datos, pedazo por pedazo. El evento 'data'
  // se emite cuando el flujo le envía un pedazo de datos
  // al consumidor.
  let raw = '';
  res.on('data', (chunk) => { raw += chunk; });
  // El evento 'end' se emite cuando el flujo ya no tiene
  // más datos por enviar al consumidor.
  res.on('end', () => {
    // Convertimos la cadena de datos crudos (JSON) en un
    // objeto, para imprimirse de forma más amigable.
    const jsonObject = JSON.parse(raw);
    console.log(`Cuerpo:`)
    console.log(jsonObject);
  });
});

// Cabe mencionar que este código no es robusto, pues
// no considera ni maneja posibles errores.