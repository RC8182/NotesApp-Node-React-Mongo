require('dotenv').config();
const { json } = require('express');
const express= require('express');
const app= express();
const PORT= process.env.PORT;
// DB connection
require('./src/db/index.db')

// Middleware
app.use(express.json());

// Routes
const routes= require('./src/routes/index.routes');
app.use(routes);

app.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`)
});