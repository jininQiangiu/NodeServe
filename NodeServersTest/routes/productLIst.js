/**
 * Created by fangshufeng on 2017/9/10.
 */

let express = require('express');
let router = express.Router();
var fs = require('fs');

let PATH = './public/data/'
router.get('/',function (req, res, next) {
   let type =  req.param('type') ;
    if (!type) {
        return  res.send(errorObjct('0','参数type没有传入'));
    }
   let subPath = '';
   if (type === '1'){ //计划类
       subPath = 'productList';
   }else if(type === '2') { //诺诺盈
       subPath = 'productListForNNy';
   }else if(type === '3')  {//债转
        subPath = 'productListDebt';
   }else if(type === '4') {
       subPath = 'operation';
   }
   fs.readFile(PATH + subPath + '.json',function (err,data) {
        if(err){
            return  res.send(null);
        }
        let jsonData = JSON.parse(data.toString());

       res.send(jsonData);

    });
});


let errorObjct = (code,errorMsg) => {
    return {
        status:code,
        info:errorMsg
    };
};

module.exports = router;