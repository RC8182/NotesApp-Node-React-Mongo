const express= require('express');
const app= express();
const PORT= process.env.PORT || 4000 // Si está definido en el entorno, usarlo. Si no, el 4000;
// DB connection
require('./src/db/index.db')

// Middleware
const methodooverride=require('method-override');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodooverride('_method'));

// Routes
const routes= require('./src/routes/index.routes');
app.use(routes);

app.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`)
});