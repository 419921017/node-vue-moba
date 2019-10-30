const express = require('express');
const Category = require('./../../models/Category');

const router = express.Router()

module.exports = app => {
  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body);
    res.send(model)
  })

  router.get('/categories', async (req, res) => {
    const items = await Category.find().limit(10);
    res.send(items)
  })

  router.get('/categories/:id', async (req, res) => {
    const {params: {id}} = req;
    const model = await Category.findById(id);
    res.send(model)
  })

  router.put('/categories/:id', async (req, res) => {
    const {params: {id}, body} = req;
    const model = await Category.findByIdAndUpdate(id, body);
    res.send(model)
  })

  router.delete('/categories/:id', async (req, res) => {
    const {params: {id}} = req;
    await Category.findByIdAndDelete(id);
    res.send({success: true})
  })

  app.use('/admin/api', router);
}