const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router()

router.get('/', async (req, res) => await UserController.login(req, res))
router.post('/formulario', async (req, res) => await UserController.store(req, res))

module.exports = router
