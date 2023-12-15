const { default: mongoose } = require("mongoose")

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDb database`)
    } catch (error) {
        console.log(`Error connecting to Mongo ${error}`)
    }
}

module.exports = connectToDb