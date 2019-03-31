import express from "express";
const router = express.Router();
/*
Request
* */
let responseObject = {
    msg: "",
    result: ""
}

router.get("/getData",  (req, res) => {
    let result = Number(req.query.key1) + Number(req.query.key2);
    res.send({ result: result })
});

router.get("/getTriangle",  (req, res) => {
    let result = (1/2) * Number(req.query.key1) * Number(req.query.key2);
    res.send({ result: result })
});

router.get("/getBMI",  (req, res) => {
    let result = Number(req.query.weight) /(Number(req.query.height)/100 * Number(req.query.height)/100);
    res.send({ result: result.toFixed(2) })
});

/*
Request
* */
router.post("/postData",async  (req, res) => {
    responseObject = {
        msg: "",
        result: ""
    }
   
    if(!req.body.key){
        responseObject.msg = "Bad request";
    }else{
        responseObject.msg = "success";
        responseObject.result = req.body.key * 5;
    }
    res.send(responseObject);
});

module.exports = router;
