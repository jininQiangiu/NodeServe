/**
 * Created by fangshufeng on 2017/11/8.
 */

let express = require('express');
let router = express.Router();
var fs = require('fs');

let PATH = './public/data/'
/**
 *
 * */
router.get('/',function (req, res, next) {
    // let type =  req.param('type') ;
    let subPath =  'finacceList';

    fs.readFile(PATH + subPath + '.json',function (err,data) {
        if(err){
            return  res.send(null);
        }
        let jsonData = JSON.parse(data.toString());
        res.send(jsonData);
    });
});

router.post('/',function (req, res, next) {
    // let type =  req.param('type') ;
    let subPath =  'finacceList';

    fs.readFile(PATH + subPath + '.json',function (err,data) {
        if(err){
            return  res.send(null);
        }
        let jsonData = JSON.parse(data.toString());
        res.send(jsonData);
    });
});



module.exports = router;