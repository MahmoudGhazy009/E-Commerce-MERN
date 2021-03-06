const express = require('express');
const controller = require('./users.controller');
const { hidePassword, encryptPassword } = require('./middlewares');
const resource = '/users';

const router = express.Router();
const route = express.Router();

route.use(encryptPassword);

route.route('')
    .get(controller.getAll)
    .post(controller.create);

route.use(hidePassword);

router.use(resource, route);

module.exports = router;