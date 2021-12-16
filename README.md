# Primera entrega del proyecto final - Fredy Papa
### (E-commerce Backend)

##### Nota:
Puede usar https://dillinger.io/ para ver este contenido con los formatos de MD

## Dependencias
El proyecto usa las siguientes ```dependencias```:
- cors
- dotenv
- express
 
Y ```dependencias de desarrollo```:
- nodemon

## Instalación del proyecto

Ejecutar el código ```npm install``` para reconstruir los módulos de Node.
Crear el archivo ```.env``` con el siguiente contenido
~~~
PORT=8080
~~~

## Arquitectura del proyecto
El proyecto fue desarrollado considerando la arquitectura ```SOA``` entre los archivos y carpetas principales tenemos:
- package.json: Ubicado en la raíz del poryecto, posee las configuraciones del proyecto y se añadieron los scripts start y dev.
- index.js : Ubicado en la raíz del poryecto, es el archivo inicial del proyecto, donde se instancia el servidor express y a partir del cual se hace el llamado a las rutas
- routes: Desde aquí se hace el llamado a los componentes del proyecto y la validación de las rutas válidas.
- components: Posee una estructura basada en controladores y servicios para ejecutar la lógica de la aplicación.
- files: En la carptea files se guardan los archivos TXT generados para la persistencia de los registros tanto de productos como carrito.

## Ubicación de la variable (flag) Administrador
Según el enunciado sólo se hace referencia a rutas disponibles para el Administrador en ```/api/productos``` por ese motivo se añadió el flag en una variable en:
~~~
components/controller/productoController.js
~~~
En las líneas 4 y 5 se podrá observar lo siguiente:
~~~
//Flag de administrador
const administrador = true;
~~~
En esa ubicación se podrá actualizar el flag a ```false```

## Prueba de funcionalidad
Los endpoints pueden ser validados con ```Postman``` 

## Proceso de Pruebas de funcionalidad
Para las pruebas debe ingresar en ```Postman``` los siguientes valores

### /api/productos
```Listar todos los productos```
| Verbo HTTP | URL |
| ------ | ------ |
| GET | http://localhost:8080/api/productos/ |

```Listar producto por id```
| Verbo HTTP | URL |
| ------ | ------ |
| GET | http://localhost:8080/api/productos/1 |

```Agregar producto``` (sólo permitido para el usuario Administrador)
| Verbo HTTP | URL |
| ------ | ------ |
| POST | http://localhost:8080/api/productos/ |

A considerar en el Body (como raw de tipo JSON):
~~~
{
    "nombre": "Lápiz",
    "descripcion": "Útiles de oficina para escribir o dibujar",
    "codigo": "OFI003",
    "foto": "https://image.shutterstock.com/image-vector/vector-illustration-set-rulers-flat-260nw-1052690225.jpg",
    "precio": 75,
    "stock": 150
}
~~~

```Actualizar producto``` (sólo permitido para el usuario Administrador)
| Verbo HTTP | URL |
| ------ | ------ |
| PUT | http://localhost:8080/api/productos/4 |

A considerar en el Body (como raw de tipo JSON):
~~~
{
    "nombre": "Escuadra 2",
    "descripcion": "Útiles de oficina 2",
    "codigo": "OFI001",
    "foto": "https://image.shutterstock.com/image-vector/vector-illustration-set-rulers-flat-260nw-1052690225.jpg",
    "precio": 1500,
    "stock": 1000
}
~~~

```Eliminar producto por id``` (sólo permitido para el usuario Administrador)
| Verbo HTTP | URL |
| ------ | ------ |
| DELETE | http://localhost:8080/api/productos/4 |


### /api/carrito
```Crear carrito```
| Verbo HTTP | URL |
| ------ | ------ |
| POST | http://localhost:8080/api/carrito/ |

A considerar en el Body (como raw de tipo JSON):
~~~
{
    "productos": 
                [{
                    "id": 1,
                    "timestamp": "2021-12-15T20:38:02.735Z",
                    "nombre": "Escuadra",
                    "descripcion": "Útiles de oficina",
                    "codigo": "OFI001",
                    "foto": "https://image.shutterstock.com/image-vector/vector-illustration-set-rulers-flat-260nw-1052690225.jpg",
                    "precio": 25,
                    "stock": 120
                },{
                    "id": 2,
                    "timestamp": "2021-12-15T20:38:02.735Z",
                    "nombre": "Borrador",
                    "descripcion": "Útiles de oficina para borrar",
                    "codigo": "OFI002",
                    "foto": "https://image.shutterstock.com/image-vector/vector-illustration-set-rulers-flat-260nw-1052690225.jpg",
                    "precio": 50,
                    "stock": 100
                },{
                    "id": 3,
                    "timestamp": "2021-12-15T20:38:02.735Z",
                    "nombre": "Lápiz",
                    "descripcion": "Útiles de oficina para escribir o dibujar",
                    "codigo": "OFI003",
                    "foto": "https://image.shutterstock.com/image-vector/vector-illustration-set-rulers-flat-260nw-1052690225.jpg",
                    "precio": 175,
                    "stock": 350
                }]
}
~~~

```Eliminar carrito por id``` 
| Verbo HTTP | URL |
| ------ | ------ |
| DELETE | http://localhost:8080/api/carrito/3 |

```Listar productos de un carrito por id``` 
| Verbo HTTP | URL |
| ------ | ------ |
| GET | http://localhost:8080/api/carrito/1/productos |

```Añadir producto al carrito por id```
| Verbo HTTP | URL |
| ------ | ------ |
| POST | http://localhost:8080/api/carrito/1/productos |

A considerar en el Body (como raw de tipo JSON):
~~~
{
    "id":   4,
    "timestamp":"2021-12-15T20:38:02.735Z",
    "nombre": "Lapicero",
    "descripcion": "Útiles de oficina para escribir",
    "codigo": "OFI004",
    "foto": "https://image.shutterstock.com/image-vector/vector-illustration-set-rulers-flat-260nw-1052690225.jpg",
    "precio": 15,
    "stock": 25
}
~~~

```Eliminar un producto del carrito según el id del carrito y el id del  producto```
| Verbo HTTP | URL |
| ------ | ------ |
| DELETE | http://localhost:8080/api/carrito/1/productos/1 |




