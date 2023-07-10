const express = require('express')
const router = express.Router()
const { createUsers, userLogin } = require('../controllers/authService')

router.route('/register')
      .post(createUsers)
router.route('/login')
      .post(userLogin)
      
module.exports = router