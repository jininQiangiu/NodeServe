var express = require('express');
var router = express.Router();
var log = require('console');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
      status:1,
      info:'成功'
  });
});

let  fixAction = (req,res,nex) => {
    var type = req.param('name') || '';
res.send({
    status:1,
    info:type
})
};
router.post('/',fixAction);

module.exports = router;
