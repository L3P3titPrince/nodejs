const express = require('express');
// call as function
const router = express.Router();
// import models
const Post = require('../models/spySchema');

// this function only used for test, if you need get all data, 
// router.get('/', (req, res) =>{
//     res.send('router posts here');
// });

// get all data from collection
router.get('/', async (req, res)=>{
    try{
        const posts = await Post.find().limit(3);
        res.json(posts);
    }catch(err){
        res.json({message:"GET Error"});
    }
})

router.get('/specific', (req,res) =>{
    res.send("Specific post");
})


router.post('/', async (req, res) =>{
    // output the request context
    // console.log(req.body);
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:"save error"});
    };
});



module.exports = router;




// router.post('/', (req, res) =>{
//     // output the request context
//     // console.log(req.body);
//     const post = new Post({
//         title:req.body.title,
//         description:req.body.description
//     });

//     post.save()
//     .then(data =>{
//         res.json(data);
//     })
//     .catch(err=>{
//         res.json({message:error});
//     });
// });

