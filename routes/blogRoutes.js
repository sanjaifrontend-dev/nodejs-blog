const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


// Get all blogs
router.get('/', blogController.blog_index);
  
// Post Request
router.post('/', blogController.blog_create_post);
// Create blog get
router.get('/create', blogController.blog_create_get);

// Get a Single blog
router.get('/:id', blogController.blog_details);

// Delete a Blog
router.delete('/:id', blogController.blog_delete);
  

module.exports = router;