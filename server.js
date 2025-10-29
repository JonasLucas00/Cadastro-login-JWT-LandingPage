const express = require('express');
const app = express();
require('dotenv').config();
const homeRouter = require('./src/routes/homeRouter.js');
const loginRouter = require('./src/routes/loginRouter.js');
const registerRouter = require('./src/routes/registerRouter.js');
const viewConfig = require('./src/config/viewsConfig.js')
const jwtAuthMiddleware = require('./src/Middlewares/jwtMiddlware.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

viewConfig(app);

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);


app.listen(process.env.PORT, () => {
    console.log(`Online http://${process.env.USER_CONNECTION}:${process.env.PORT}`)
});

