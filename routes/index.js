const express = require('express');
const router = express.Router();
const knex = require('../knex')

router.get('/' , (req, res, next)=>{
  knex('messages')
  .select('*')
  .orderBy('id')
  .then(result => {res.send(result)})
});

router.get('/:id', (req, res, next)=>{
  let id = req.params.id;
  knex('messages')
  .select('*')
  .where('id', id)
  .then(result => {res.send(result)})
});

router.post('/', (req, res, next)=>{
  let body = req.body;
  body.labels = [];
  knex('messages')
  .insert(body)
  .returning('*')
  .then((result)=> {
    res.send(result)
  })
});

router.patch('/:id', (req,res,next)=>{
  let id = req.params.id;
  let body = req.body;
  knex('messages')
  .update({
    read: body.read,
    starred: body.starred,
    labels: body.labels
  })
  .where('id', id)
  .then(result=>{res.send('updated')}).catch((err)=>console.log(err))
});

router.delete('/:id', (req,res,next)=>{
  let id = req.params.id;
  knex('messages')
  .del()
  .where('id',id)
  .then(() => {res.send('deleted')})
});

module.exports = router;
