// This is the test version 1, only for verfication process between Bubble and MongoDB
const express = require('express');
// call as function
const router = express.Router();
// import models
const col_ben = require('../models/benSchema');
const col_stock = require('../models/stockinfoSchema.js');
const col_user = require('../models/userSchema.js');
const col_watch = require('../models/watchSchema');

// this function only used for test, if you need get all data, 
// router.get('/', (req, res) =>{
//     res.send('router posts here');
// });

// get all data from collection, root
router.get('/', async (req, res)=>{
    try{
        const posts = await col_ben.find().limit(10);
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



//***********************test part *************************
// this is part is test for modifing bubble database from a get request to mongodb
const request = require('request');
router.get('/modifyBubble', async (req,res) =>{
    var url_bubble="https://data136.bubbleapps.io/version-test/api/1.1/obj/test_mongo";
    var requestData={
        "_id":"1212",
        "Date":"sdfasf",
        "investment_returns":"1666633333"
    };
    const colData = await col_ben.find().limit(10);
    // console.log(colData[0]);
    // console.log(colData.length);
    var i;
    for (i=0; i<colData.length; i++){
        httprequest(url_bubble,colData[i]);
        console.log(colData[i]);
    };
    // httprequest(url_bubble,colData[0]);
    // console.log(requestData);
 
    function httprequest(url,data){
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
                "Authorization":"Bearer 30b65f3e2de2e73fdd685fb35e470f56"
            },
            body: data
        }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body); // ???????????????????????????
                console.log("suceess running in here");
            }
        });

    };
    console.log("test hereeeee");
    // res.send("test for modifing Bubble from MongoDB JS");
    res.json({message: "success send psot"});
});
//***********************test part *************************




module.exports = router;



//*******************Abandand********************** */
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

