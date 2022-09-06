const express = require('express');
const router = express.Router();

const posts = [
  { id: 1, topic: 'test1', text: 'test text1' },
  { id: 1, topic: 'test2', text: 'test text2' },
  { id: 1, topic: 'test3', text: 'test text3' },
];

router.get('/', (req, res) => {
  res.json({ posts });
});
router.get('/:id', (req, res) => {
  const [post] = posts.filter(item => item.id === req.params.id);
});
router.post('/', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = { postsRouter: router };
