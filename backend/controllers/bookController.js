const bookModel = require("../models/bookModel")

const createBookController = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body
        if (!title || !author || !publishYear) {
            return res.status(404).send({
                success: false,
                message: 'Please Enter the all fields'
            })
        }
        const book = await bookModel(req.body)
        await book.save()
        return res.status(200).send({
            success: true,
            message: 'Book saved successfully',
            book
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error in create book '
        })
    }
}

const getAllBook = async (req, res) => {
    try {
        const books = await bookModel.find({})
        return res.status(200).send({
            success: true,
            message: 'All books fetched Successfully',
            bookCount: books.length,
            books
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error in Get all book '
        })
    }
}

//single books
const getSingleBook = async (req, res) => {

    try {
        const { id } = req.params
        const book = await bookModel.findById(id)
        if (!book) {
            return res.status(404).send({
                success: false,
                message: 'Book not found with this id'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Book found with this id',
            book
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error in fetch single book '
        })
    }
}

//update book
const updatebook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await bookModel.findByIdAndUpdate(id, req.body)
        if (!book) {
            return res.status(404).send({
                success: false,
                message: 'Book not found',
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Book updated successfully',
            book
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error in update book api '
        })
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await bookModel.findByIdAndDelete(id)
        if (!book) {
            return res.status(404).send({
                success: false,
                message: 'Book not found',
            })
        }
        return res.status(200).send({
            success: true,
            message: 'Book deleted successfully',
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error in delete book api '
        })
    }
}
module.exports = { createBookController, getAllBook, getSingleBook, updatebook, deleteBook }