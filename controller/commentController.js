//import model
const Post = require("../model/postModel");
const Comment = require("../model/commentModel");


//business logic
exports.createComment = async (req,res) => {
    try{
        //fetch data from req body
        const { post, user, body} = req.body;

        //create a comment object
        const comment = new Comment({
            post, user, body
        });

        //save the new comment into the database
        const savedComment = await comment.save();

        //find the post by ID, add the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post,
             {$push: {comments: savedComment._id}},
             {new: true} ) //update document return to me / by default: old document
             .populate("comments") //populate the comments array with comment document
             .exec();
        
        res.json({
            post: updatedPost,
        })

        //we are using save here to create db//alternative to create

    }
    catch(error){
        return res.status(500).json({
            error: "Error while Creating comment"
        })

    }
}

//http://localhost:4000/api/v1//comments/create
//Testing steps in Postman
//Create a Post manually in DB using Add Data
// {
//     "title": "Check Post",
//     "body": "Check Post"
//    }
// we want to comment in this post
// copy id of this post from DB
//Now add this Id and run comment create url in postman
//{
//     "post": "6473401198f311ce6c1ac612",
//     "user": "Praveen Sahu",
//     "body": "This is for testing comment"

// }


