const express = require('express');
const { addCategories, getcategories , deleteCategories, updateCategory } = require('../controllers/categoryController');
const router = express.Router();

// Routes GET | UPDATE | DELETE | POST For Category
router.get('/getCategories', getcategories);
router.get('/getCategories/:id', getcategories);
router.post('/addCategory', addCategories);
router.put('/updateCategory/:id', updateCategory);
router.delete('/deleteCategories', deleteCategories);
router.delete("/deleteCategories/:id", deleteCategories);


// Export Router
module.exports = router;