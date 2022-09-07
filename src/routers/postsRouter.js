const express = require('express');
const router = express.Router();

const { addPostValidation, putPostValidation } = require('../middlewares/validationMiddleware');

const {
  getPosts,
  getPostsById,
  addPost,
  changePost,
  deletePost,
} = require('../controllers/postController');

router.get('/', getPosts);
router.get('/:id', getPostsById);
router.post('/', addPostValidation, addPost);
router.put('/:id', putPostValidation, changePost);
router.delete('/:id', deletePost);

module.exports = { postsRouter: router };
