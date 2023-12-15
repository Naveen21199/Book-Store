const express = require('express')
const { createBookController, getAllBook, getSingleBook, updatebook, deleteBook } = require('../controllers/bookController')
const router = express.Router()

router.post('/createBook', createBookController)
router.get('/getBooks', getAllBook)
router.get('/getBook/:id', getSingleBook)
router.put('/updateBook/:id', updatebook)
router.delete('/deleteBook/:id', deleteBook)

module.exports = router

