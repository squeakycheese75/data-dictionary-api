const { Source } = require('../data/database')

function sourcesController() {
  async function get(req, res) {
    const id = parseInt(req.params.sourceId, 10)
    Source.findByPk(id)
      .then((s) => {
        res.json(s)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        res.status(404).send(error)
      })
  }
  async function getAll(req, res) {
    Source.findAll({
      where: {
        is_deleted: false,
      },
    })
      .then((s) => {
        res.json(s)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        res.status(404).send(error)
      })
  }
  async function create(req, res) {
    const { source } = req.body
    Source.create(source)
      .then((s) => {
        res.json(s)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        res.status(404).send(error)
      })
  }

  async function update(req, res) {
    const { source } = req.body
    Source.update(source, {
      where: {
        id: req.params.id,
      },
    })
      .then((rows) => {
        res.json(rows)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        res.status(404).send(error)
      })
  }

  async function remove(req, res) {
    Source.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.send('Source successfully deleted')
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        res.status(404).send(error)
      })
  }

  return { get, getAll, create, update, remove }
}

module.exports = sourcesController
