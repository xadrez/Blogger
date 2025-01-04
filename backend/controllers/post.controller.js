import ImageKit from 'imagekit'
import Post from '../models/post.model.js'
import User from '../models/user.model.js'

export const getPosts = async (req,res)=>{
    
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 2

    const posts = await Post.find()
    .populate('user','username')
        .limit(limit).skip((page - 1) * limit)

    const totalPosts = await Post.countDocuments()
    const hasMore = page * limit < totalPosts
    res.status(200).json({posts,hasMore})
}

export const getPost = async (req,res)=>{
    const post = await Post.findOne({slug:req.params.slug}).populate('user','username img')
    res.status(200).json(post)
}

export const createPost = async (req, res) => {
    const clerkUserId = req.auth.userId;

    //console.log(req.auth);

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    if (!user) {
        return res.status(404).json("User not found!");
    }
//console.log(req.body)
    let slug = req.body.title.replace(/ /g, "-").toLowerCase();

    let existingPost = await Post.findOne({ slug });
//console.log(`Still have the slug: ${slug}`)
    let counter = 2;

    while (existingPost) {
        slug = `${slug}-${counter}`;
        existingPost = await Post.findOne({ slug });
        counter++;
    }
//console.log(user)
//console.log(`After while loop slug: ${slug}`)
    const newPost = new Post({ user: user._id, slug, ...req.body });
    const post = await newPost.save();
    res.status(200).json(post);
};

export const deletePost = async (req,res)=>{
    //Get the user ID from the request.auth
    const clerkUserId = req.auth.userId
    //If it does not exist return
    if(!clerkUserId){
        return res.status(401).json('Not authenticated')
    }
    //If it does we find it from the DB
    const user = await User.findOne({clerkUserId})

    const deletePost = await Post.findByIdAndDelete({
        _id: req.params.id, 
        user:user._id
    })
    if(!deletePost){
        return res.status(403).json('Operation not allowed.')
    }
    res.status(200).json("The post was deleted")
}
    //Create an instance of Imagekit
    const imagekit = new ImageKit({
        urlEndpoint: process.env.IK_URL_ENDPOINT,
        publicKey: process.env.IK_PUBLIC_KEY,
        privateKey: process.env.IK_PRIVATE_KEY
    })

    export const uploadAuth = async (req,res)=>{
        const result = imagekit.getAuthenticationParameters();
        res.send(result)
    }

