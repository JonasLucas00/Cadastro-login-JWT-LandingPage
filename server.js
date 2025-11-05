const express = require('express');
const app = express();
require('dotenv').config();
const homeRouter = require('./src/routes/homeRouter.js');
const loginRouter = require('./src/routes/loginRouter.js');
const registerRouter = require('./src/routes/registerRouter.js');
const protectedRouter = require('./src/routes/protectedRouter.js');
const logoutRouter = require('./src/routes/logoutRouter.js');
const viewConfig = require('./src/config/viewsConfig.js');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
viewConfig(app);

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/register', registerRouter);
app.use('/protected', protectedRouter);


app.listen(process.env.PORT, () => {
    console.log(`Online http://${process.env.USER_CONNECTION}:${process.env.PORT}`)
});

