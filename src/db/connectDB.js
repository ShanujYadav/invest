import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        console.log("url--", process.env.MONGOURI)
        const conn = await mongoose.connect(process.env.MONGOURI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1);
    }
}
export default connectDB;