const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
require('dotenv').config()

//importamos las rutas
const sessionRouter = require('./routes/session')
const userRouter = require('./routes/user')
const blogRoutes = require("./routes/blog");
const contactoRoutes = require("./routes/contacto");
const portafolioRoutes = require("./routes/portafolio");
const resumenRoutes = require("./routes/resumen");
const educacionRoutes = require("./routes/educacion");
const experienciaRoutes = require("./routes/experiencia");
const servicioRoutes = require("./routes/servicio");
const tecnologiaRoutes = require("./routes/tecnologia");
const testimonioRoutes = require("./routes/testimonio");
const principalRoutes = require("./routes/principal");
const redeRoutes = require("./routes/rede")

//setup
const app = express()
const port = process.env.PORT || 8000
mongoose.set('strictQuery', true)

//middleware
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/uploads'
}));
app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use('/api', sessionRouter)
app.use('/api', userRouter)
app.use('/api', blogRoutes)
app.use('/api', contactoRoutes)
app.use('/api', portafolioRoutes)

app.use('/api', resumenRoutes)
app.use('/api', educacionRoutes)
app.use('/api', experienciaRoutes)
app.use('/api', servicioRoutes)
app.use('/api', tecnologiaRoutes)
app.use('/api', testimonioRoutes)

app.use('/api', principalRoutes)
app.use('/api', redeRoutes)


app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

mongoose.connect(process.env.MONGODB_URI, {dbName: 'MyApp'})
.then(() => {
    console.log('Connected to MongoDB Atlas')
})
.catch((error) => {
    console.error(error)
})

app.listen(port, () =>{
    console.log('Server listening at port', port)
})