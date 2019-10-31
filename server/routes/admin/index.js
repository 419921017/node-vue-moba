const express = require('express');
const inflection = require('inflection');
const multer = require('multer');
const path = require('path');

const router = express.Router({
  mergeParams: true
})

module.exports = app => {
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model)
  })

  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10);
    res.send(items)
  })

  router.get('/:id', async (req, res) => {
    const {params: {id}} = req;
    const model = await req.Model.findById(id);
    res.send(model)
  })

  router.put('/:id', async (req, res) => {
    const {params: {id}, body} = req;
    const model = await req.Model.findByIdAndUpdate(id, body);
    res.send(model)
  })

  router.delete('/:id', async (req, res) => {
    const {params: {id}} = req;
    await req.Model.findByIdAndDelete(id);
    res.send({success: true})
  })

  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = inflection.classify(req.params.resource);
    req.Model = require(`./../../models/${modelName}`);
    next();
  }, router);

  const upload = multer({
    dest: __dirname+ '/../../uploads'
  })

  app.post('/admin/api/upload', upload.single('file'), (req, res) => {
    const file = req.file
    file.url = `http://localhost:3001/uploads/${file.filename}`;
    res.send(req.file);
  })
}