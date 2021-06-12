/**
 * Created by fangshufeng on 2017/10/18.
 */
let express = require('express');
let router = express.Router();
var fs = require('fs');

let PATH = './public/data/'
/**
 * 获取运营数据
 * */
router.get('/',function (req, res, next) {
    // let type =  req.param('type') ;
    let subPath =  'launch';

    fs.readFile(PATH + subPath + '.json',function (err,data) {
        if(err){
            return  res.send(null);
        }
        let jsonData = JSON.parse(data.toString());
        res.send(jsonData);
    });
});


module.exports = router;