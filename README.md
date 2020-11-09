# Virtual Dreams :cloud:

TP Integrador.

## Autor :bust_in_silhouette:
-  [sebastianalamina](https://github.com/sebastianalamina) (Sebastián Alamina)

## Ejecución :computer:

Para ejecutar el script del **ejercicio 4**, basta con correr el archivo *mostrarPersonas.js* dentro de la carpeta *src* con Node.

Es decir, en una terminal, "pararse" dentro de la carpeta *src* y ejecutar el comando:

```node mostrarPersonas.js```

## Ejercicio 2 :heavy_check_mark:

1. ¿Qué es un servidor HTTP?

Primero, necesitamos conocer la diferencia entre Internet y World Wide Web, pues solemos creer erróneamente que se tratan de la misma cosa. Mientras que el Internet consta de la red que conecta a todas las computadoras entre sí, la World Wide Web consta de la colección de páginas web que se encuentra sobre esta red de computadoras.

Así, nuestro navegador web utiliza Internet para acceder a la World Wide Web. Esta WWW utiliza el protocolo HTTP (HyperText Transfer Protocol); un formato preestablecido con el cual la WWW define cómo se formatean y transfieren los mensajes, y qué acciones deben realizar los servidores web y los navegadores web como respuesta a distintos comandos.

Por lo tanto, un servidor HTTP es software que entiende este protocolo HTTP y URLs (direcciones web), y controla cómo los usuarios acceden a los recursos en la red.

2. ¿Qué son los verbos HTTP? Mencionar los más conocidos.

Los servidores HTTP funcionan mediante el manejo de *recursos*. Los verbos HTTP (o *request methods*) son los métodos que indican la acción que será realizada sobre estos recursos, por ejemplo...

* El método **GET** busca y recupera recursos del servidor. 
* El método **POST** reemplaza el recurso del servidor por otro (o crea uno nuevo).
* El método **PUT** actualiza recursos del servidor.
* El método **DELETE** elimina recursos del servidor.

3. ¿Qué es un request y un response en una comunicación HTTP? ¿Qué son
los headers?

En el protocolo HTTP, clientes y servidores se comunican entre sí mediante el envío de mensajes individuales; el mensaje enviado por el cliente es el *request* (una consulta), mientras que el mensaje enviado por el servidor como respuesta es el *response* (una respuesta).

Estos mensajes consisten de:

* una línea (*request line* en consultas y *status line* en respuestas)
* *headers*
* una línea vacía
* un cuerpo opcional que incluye un mensaje

Los componentes de la sección *headers* definen los parámetros que se utilizarán para operar en una comunicación HTTP.

4. ¿Qué es un queryString? (En el contexto de una url)

Una URL (*Uniform Resource Locator*) representa la dirección de un recurso único en la web.

Así, un *query string* permite interactuar con dicho recurso al añadir ciertos valores que el servidor web utilizará antes de devolver el recurso.

Para ello, se debe incluir una serie de parámetros en la URL, cada uno con su respectivo valor. Estos parámetros son una lista de parejas tipo llave/valor separadas por el símbolo *&*.

5. ¿Qué es el responseCode? ¿Qué significado tiene los posibles valores
devueltos?

Los *response status codes* son códigos que envía el servidor como respuesta a una consulta del cliente. Indican si la consulta fue completada exitosamente y ayudan a identificar la causa del problema, si es que surge alguno.

Estos códigos se dividen en 5 grupos...
* respuestas informativas (códigos 100 al 199): indican que la consulta fue recibida y entendida.
* peticiones correctas (códigos 200 al 299): indican que la consulta fue recibida, entendida y aceptada.
* redirecciones (códigos 300 al 399): indican que el cliente debe hacer algo más para completar la consulta.
* errores del cliente (códigos 400 al 499): indican que hubo un error por parte del cliente.
* errores del servidor (códigos 500 al 599): indican que hubo un error por parte del servidor.

6. ¿Cómo se envía data en un *GET* y cómo en un *POST*?

En un **GET**, los datos se envían en la URL de la consulta.

En un **POST**, los datos se envían en el cuerpo de la consulta.

7. ¿Qué verbo HTTP utiliza el navegador cuando accedemos a una página?

**GET**, pues es el método que permite recuperar información de una URL.

8. Explicar brevemente qué son las estructuras de datos JSON y XML dando
ejemplo de estructuras posibles.

Se tratan de formatos que nos permiten almacenar y manipular datos de manera estructurada.

XML (*eXtensible Markup Language*) no tiene tags predefinidos, por lo que permite crear los propios (por eso es *eXtensible*). Un ejemplo de una estructura XML sería la siguiente:

```xml
<?xml version="1.0"?>
  <listaDeProductos title="Inventario">
    <producto>
      <nombre>Producto 1</nombre>
      <costo>$59</costo>
      <cantidad>440</cantidad>
    </producto>
    <producto>
      <nombre>Producto 2</nombre>
      <costo>$25</costo>
      <cantidad>847</cantidad>
    </producto>
    <producto>
      <nombre>Producto 3</nombre>
      <costo>$71</costo>
      <cantidad>268</cantidad>
    </producto>
  </listaDeProductos>
```

JSON (*JavaScript Object Notation*) se integra fácilmente con JavaScript. Tiene integrado tipos (cadenas, números, booleanos, etc) y un archivo JSON consta de uno de estos tipos. Generalmente, se utiliza un array o un objeto para almacenar más información dentro del archivo. Un ejemplo de una estructura JSON utilizando un objeto sería la siguiente:

```json
{
  "llave" : "valor",
  "número" : 1538,
  "objeto" : {
    "nombre" : "José",
    "edad" : 30,
    "esProgramador" : true,
    "áreas" : ["Realidad virtual" , "Salesforce"]
  },
  "arreglo de objetos" : [
    { "nombre" : "objeto 1", "número" : 1 },
    { "nombre" : "objeto 2", "número" : 2 },
    { "nombre" : "objeto 3", "número" : 3 }
  ]
}
```

9. Explicar brevemente el estándar SOAP.

SOAP (*Simple Object Access Protocol*) es un protocolo de mensajería que especifica el intercambio de información estructurada en la web; fue diseñado para comunicarse a través de Internet. Está basado en XML y su enfoque principal son las consultas a través de HTTP. Provee una forma de comunicación entre aplicaciones de diferentes sistemas operativos, diferentes tecnologías y diferentes lenguajes de programación.

Un mensaje SOAP es simplemente un documento XML que contiene los siguientes elementos:
* Un elemento *Envelope* que identifica a este documento XML como un mensaje SOAP.
* Un elemento opcional *Header* que contiene información específica de la aplicación.
* Un elemento *Body* que contiene el mensaje como tal.
* Un elemento *Fault* que contiene información de los errores y estados del mensaje.

10. Explicar brevemente el estándar RESTful.

REST (*REpresentational State Transfer*) es un estilo de arquitectura de software para crear *servicios web RESTful* (una arquitectura de software indica la estructura, funcionamiento y demás reglas que debe cumplir cierto software al momento de ser creado).

Igual que el estándar SOAP, estos servicios web RESTful proveen interoperabilidad entre aplicaciones de diferentes lenguajes de programación y tecnologías, permitendo a los clientes accesar y manipular representaciones textuales de los recursos en la web.

El estándar REST define 6 restricciones que deben seguirse para que una interfaz sea considerada RESTful...

* La línea de separación cliente-servidor debe ser clara.
* Cada consulta debe contener toda la información necesaria para realizarse, sin considerar consultas o estados anteriores.
* Para toda información enviada, debe especificarse si se puede guardar en caché o no.
* El servidor debe estar compuesto de distintas capas, cada una con una responsabilidad única y bien definida.
* La interfaz debe ser estandarizada; cada capa del sistema debe ser independiente.
* Opcionalmente, el servidor puede enviar scripts de código para extender la funcionalidad del cliente.

11. ¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?

En un request, el header es información que el navegador del cliente envía al servidor web. En esta información se incluyen los detalles sobre lo que el navegador quiere y aceptará del servidor.

También se incluye el tipo, versión y capacidades del navegador que realiza la consulta para que el servidor regrese data compatible. Así, la llave *Content-type* es un campo dentro del header que indica el tipo de medio (o contenido) del recurso que se está manipulando.

En una *response*, la llave *Content-type* le dice al cliente qué tipo de contenido le está devolviendo mientras que, en una *request*, la llave *Content-type* le dice al servidor qué tipo de contenido le está enviando (como en **POST** o en **PUT**).