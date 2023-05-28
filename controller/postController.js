//create Post and Fetch post

const Post = require("../model/postModel");

exports.createPost = async(req,res) => {

    try{
        const { title, body} = req.body;
        const post = new Post({
            title,body
        });

        const savedPost = await post.save();


        //response
        res.json({
            post: savedPost ,
            message: "Post Created Succefully",
        })
        

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data: "Internal server error",
                message: err.message
            }
        )

    }
};

//fetching data
exports.getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find()
        .populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data: "Internal server error",
                message: err.message
            }
        )
    }

}

// http://localhost:4000/api/v1/posts/create
// tesing for post 
// {
//     "title": "Sanchit Jain",
//     "body": "Kya pdhate ho"
// }
// send in postman

//For Get Post
// http://localhost:4000/api/v1/posts
