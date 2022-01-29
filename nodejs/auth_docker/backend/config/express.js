require('dotenv').config();
const express = require('express');
const cors = require('cors');

// routes
const authRoute = require('../app/routes/auth');
const dashboardRoute = require('../app/routes/dashboard.route');

// Exceptions
const errorHandler = require('../app/exceptions/handler');



module.exports = () => {
    const app = express();

    // middleware
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // routes
    app.use('/auth', authRoute);
    app.use('/dashboard', dashboardRoute);

    app.use(errorHandler);

    return app
}