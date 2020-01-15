

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
const DATABASE_URL = 'mongodb+srv://anirudh:rj13sl1608@cluster0-lcda6.mongodb.net/test?retryWrites=true&w=majority';

app.set('view engine','ejs')
app.set('views', __dirname +'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))



app.use('/',indexRouter)

mongoose.connect(DATABASE_URL,{
    useNewUrlParser:true
})
const db=mongoose.connection
db.on('error',error=> console.error(error))
db.once('open',()=> console.error('connected to mongoose'))

app.listen(process.env.PORT || 3000)