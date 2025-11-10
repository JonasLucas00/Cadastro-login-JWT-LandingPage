const express = require('express');
const app = express();
require('dotenv').config();
const userForm = require('./src/routes/userFormRouter.js');
const loginRouter = require('./src/routes/loginRouter.js');
const registerRouter = require('./src/routes/registerRouter.js');
const homeRouter = require('./src/routes/homeRouter.js');
const logoutRouter = require('./src/routes/logoutRouter.js');
const viewConfig = require('./src/config/viewsConfig.js');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
viewConfig(app);

app.use(express.static('/public'));

app.use('/', homeRouter);
app.use('/form', userForm);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/register', registerRouter);


app.listen(process.env.PORT, () => {
    console.log(`Online http://${process.env.USER_CONNECTION}:${process.env.PORT}`)
});

