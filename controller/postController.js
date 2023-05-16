const Post = require("../model/postModel");

exports.postController = async(req,res) => {

    try{
        const { title, body} = req.body;
        const response = Post.create({title,body});

        //response
        res.status(200)
        .json({
            success:true,
            data: response,
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