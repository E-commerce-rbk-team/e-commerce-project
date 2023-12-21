const express = require('express')
const db = require('./database/index.js')
const cookieParser =require('cookie-parser');
const PORT = 3000
const app = express()
const cors = require('cors')
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))
const commerceRoutes = require('./routes/commerce.js')
const userRoutes=require('./routes/usersRoute.js')
const cartRoutes = require('./routes/cartRoute.js')
const productRoute = require('./routes/productRoute.js')
app.use('/api', commerceRoutes); 
app.use('/api', cartRoutes); 
app.use('/api',userRoutes)
app.use('/api', productRoute); 

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})