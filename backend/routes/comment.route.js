import express from 'express'

const router = express.Router()

router.get("/comments",(req,res)=>{
    res.status(200).send('Comment route')
})

export default router