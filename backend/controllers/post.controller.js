import Post from '../models/post.model.js'
import User from '../models/user.model.js'

export const getPosts = async (req,res)=>{
    const posts = await Post.find()
    res.status(200).json(posts)
}

export const getPost = async (req,res)=>{
    const post = await Post.findOne({slug:req.params.slug})
    res.status(200).json(post)
}

export const createPost = async (req, res) => {
    const clerkUserId = req.auth.userId;

    console.log(req.headers);

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    if (!user) {
        return res.status(404).json("User not found!");
    }

    let slug = req.body.title.replace(/ /g, "-").toLowerCase();

    let existingPost = await Post.findOne({ slug });

    let counter = 2;

    while (existingPost) {
        slug = `${slug}-${counter}`;
        existingPost = await Post.findOne({ slug });
        counter++;
    }

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

