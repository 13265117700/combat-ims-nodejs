const classify = require('./../models/classify.js');
const {formatTime} = require('./../utils/date.js');

const classifyController = {
  show:async function(req,res,next){
    try{
      const classifys = await classify.all();
      res.locals.classifys = classifys.map(data=>{
        data.created_time_display = formatTime(data.created_time);
        return data
      });
      res.render('admin/classify.tpl',{title:'分类管理'});
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals);
    }
  },
  insert:async function(req,res,next){
    let name = req.body.name;
    let created_time = new Date();
    if(!name){
      res.json({code:0,message:'缺少参数'});
      return
    }

    try{
      const classifys = await classify.insert({
        name,created_time
      });
      res.json({code:200,data:classifys})
    }catch(e){
      res.json({code:0,message:'内部错误'})
    }
  },
  delete:async function(req,res,next){
    let id = req.body.index;
    console.log(id)
    if(!id){
      res.json({code:0,data:'params empty!'})
      return
    }

    try{
      const classifys = await classify.delete(id);
      res.json({code:200,data:classifys})
    }catch(e){
      res.json({code:0,data:e})
    }
  },
  renderClassifyCreate:function(req,res,next){
    res.render('admin/classify_create',{title:'添加分类'})
  },
}

module.exports = classifyController;