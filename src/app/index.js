const express = require('express');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const products = require('./books');
const users = require('./users');

module.exports =  function app(port, publicDir) {
    const server = express();

    // Enable security, CORS, compression, favicon and body parsing
    server.use(helmet());
    server.use(cors());
    server.use(compress());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    // Expose Routes for app components
    const root = express.Router();
    root.use(books);
    root.use(users);
    root.use(auth);
    

    server.use('/api', root);

    server.listen(port || 5000);
}