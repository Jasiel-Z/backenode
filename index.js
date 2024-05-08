const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv')
const app = express()

//configuraciones de swagger
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')


// 1-> cargar la configuración del .env
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

var corsOption = {
    origin:["http://localhost:3001", "http://localhost:8080"],
    methods: "GET, PUT,POST,DELETE"
}


//ruta de swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//Iniciar el servidor en el puerto que definimos
app.use("/api/categorias", require('./routes/categorias.routes'))
app.use("/api/peliculas", require('./routes/peliculas.routes'))
app.get('*',(req,res) => { res.status(404).send() });

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Aplicación de ejemplo escuchando el puerto ${process.env.SERVER_PORT}`)

})