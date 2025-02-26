import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { headerVerify } from './src/middleware/headerVerify.middle.js'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: "*",
}))


app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true, limit: "50kb" }))
app.use(express.static("public"))
app.use(cookieParser())



// ---------Routes Import---------
import userRouter from './src/routes/user.routes.js'
import adminRouter from './src/routes/admin.routes.js'

app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.status(200).end();
});


//-------------------Routes Declaration ---------------------
app.use('/api/v1/admin', headerVerify, adminRouter)
app.use('/api/v1/user', headerVerify, userRouter)


export { app }