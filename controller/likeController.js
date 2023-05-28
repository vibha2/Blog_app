//import models
const Post = require("../model/postModel");
const Like = require("../model/likeModel");

//like a post
exports.likePost = async (req,res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });

        const savedLike = await like.save();

        //update the post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post,
         {$push: {likes: savedLike._id} },
         {new: true}).populate("likes").exec();

         res.json({
            post: updatedPost,
         })
    }
    catch(error){
        return res.status(500).json({
            error: "Error while Creating comment"
        })

    }
}

// exports.dummyController = async(req,res) => {

//     res.send("This is your Dummy Page");
// }

//Testing for Like
//  http://localhost:4000/api/v1/likes/like
// post type
// {
//     "post": "6473401198f311ce6c1ac612",
//     "user":  "Praveen Sahu"
// }