// Valores necesarios para la creación y ejecución del servidor...
const express = require('express'); // Biblioteca "express".
const app = express(); // Aplicación-servidor Express.
const puerto = 3000; // Puerto sobre el cual se alojará el servidor.
app.listen(puerto, () => console.log(`Escuchando en el puerto ${puerto}...`));

// Estos métodos permiten visualizar los JSON de los requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Valores auxiliares.
const url = 'https://reclutamiento-14cf7.firebaseio.com/personas.json'; // URL de la BD.
const path = require('path'); // Biblioteca "path".
const archivoHTML = path.join(__dirname, "crearPersonas.html"); // Ubicación del archivo HTML.
const https = require('https'); // Biblioteca "https".

// Cuando se abra la página localhost:[puerto],
// cargamos el archivo HTML (del ejercicio 6).
app.get("/", (req, res) => {
  res.sendFile(archivoHTML);
});

// Al enviar un request POST...
app.post("/", (req, res) => {

  // Analizaremos los valores del request...
  var dni = req.body.dni;
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var errorString = "";

  // El apellido y el DNI son obligatorios.
  if (!errorString && !dni || !apellido) {
    errorString = "El apellido y el DNI son obligatorios.";
  }

  // El nombre y el apellido son cadenas de texto.
  if (!errorString && typeof apellido != "string" || (nombre && typeof nombre != "string")) {
    errorString = "El nombre y el apellido deben ser cadenas de texto.";
  }

  // El DNI es de máximo 10 caracteres.
  if (!errorString && String(dni).length > 10) {
    errorString = "El DNI es de máximo 10 dígitos.";
  }

  // El DNI es numérico.
  if (!errorString && isNaN(Number(dni))) {
    errorString = "El DNI debe ser numérico.";
  }
  req.body.dni = Number(dni);

  // Si el usuario manda un JSON con más atributos que
  // los mencionados, se notifica un error.
  var atributos = Object.keys(req.body).length;
  if (!errorString && atributos > 3 || (!nombre && nombre != "" && atributos > 2)) {
    errorString = "Los únicos atributos permitidos son 'nombre', 'apellido' y 'dni'.";
  }

  // Se notifica el error, en caso de surgir alguno.
  if (errorString != "") {
    return res.status(401).json({ error: errorString });
  }

  // Se inserta la información recibida en la BD
  // utilizando un POST de HTTPS...

  // Se ajustan las opciones del request.
  var opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  var data = JSON.stringify(req.body);

  // Se realiza el request.
  const postReq = https.request(url, opciones, (postRes) => {
    var resultado = ""; // Respuesta del request POST.
    // Se le agrega la respusta a la variable...
    postRes.on('data', (chunk) => {
      resultado = resultado.concat(chunk);
    });
    // Se devuelve la respuesta con el código 201...
    postRes.on('end', () => {
      res.status(201).json( JSON.parse(resultado) );
    });
  });

  // En caso de ocurrir un error no previsto, se notifica.
  postReq.on('error', (err) => {
    return res.status(500).json(err);
  });

  // Se escribe la información en el cuerpo del request y se finaliza.
  postReq.write(data);
  postReq.end();

});