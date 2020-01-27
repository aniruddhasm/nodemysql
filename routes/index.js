const express = require('express')
const router = express.Router()

const customerController = require('../api/contollers/customer')

module.exports = () => {
  router.get('/', customerController.list)
  router.post('/add', customerController.save)
  router.get('/update/:id', customerController.edit)
  router.post('/update/:id', customerController.update)
  router.get('/delete/:id', customerController.delete)
  return router
}
