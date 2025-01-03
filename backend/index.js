import express from 'express'
import connectDB from './lib/connectDB.js'
import userRouter from './routes/user.route.js'
import commentRouter from './routes/comment.route.js'
import postRouter from './routes/post.route.js'
import webhookRouter from './routes/webhook.route.js'
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 2828

app.use(clerkMiddleware())
app.use('/webhooks', webhookRouter)
app.use(express.json())

app.use(cors(process.env.CLIENT_URL))

app.get('/test', async (req,res)=>{
    res.status(200).send(process.env.test)
})

/* app.get("/auth-state", (req, res)=>{
    const authState = req.auth
    res.json(authState)
}) 
    app.get("/protect", (req, res)=>{
        const { userId } = req.auth
        if(!userId){
            return res.status(401).json('Not authenticated')
        }
        res.status(200).json('Content')
    })
*/


app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

// allow cross-origin requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

/*
app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    
    req.json({
        message:error.message || "Oops! somehing went wrong...",
        status:error.status,
        stack:error.stack
    })
})*/

app.listen(PORT,()=>{
    connectDB()
    console.log(`Up and kicking at port: ${PORT}`)
    console.log(process.env.test)
})