import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/users.js"


const app = express()


app.use(bodyParser.json())


app.use('/api', userRouter)


app.listen(3000, function() {
    console.log('Hey are you there?');
})