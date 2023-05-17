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
}