const express = require('express')

const router = express.Router()

const sourceController = require('../controllers/sourcesController')

module.exports = () => {
  const controller = sourceController()

  router.route('/').get(controller.getAll).post(controller.create)

  router
    .route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.remove)

  return router
}
