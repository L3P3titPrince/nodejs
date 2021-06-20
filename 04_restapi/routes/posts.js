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


var request = require('request');
//***********************test part *************************
// this is part is test for modifing bubble database from a get request to mongodb
router.get('/modifyBubble', (req,res) =>{
    var url_bubble="https://data136.bubbleapps.io/version-test/api/1.1/obj/test_mongo";
    var requestData={
        "Date":"20234-02-21",
        "investment_returns":"1666633333"
    };
    httprequest(url_bubble,requestData);
    console.log(requestData);
 
    function httprequest(url,data){
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
                "Authorization":"Bearer 44bb385fff2a717d2a437866f42829b3"
            },
            body: requestData
        }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // 请求成功的处理逻辑
            }
        });

    };
    console.log("test hereeeee");
    res.send("test for modifing Bubble from MongoDB JS");
    // res.json(requestData);
});
//***********************test part *************************


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

