const essay = require('./../models/essay.js');
const Classify = require('./../models/classify.js');
const {formatTime} = require('./../utils/date.js');

const essayController = {
  show:async function(req,res,next){
    try{
      const role = res.locals.userInfo.role;
      const user_id = res.locals.userInfo.id;
      let params = {};
      if (role == 2) {
        params.user_id = user_id
      }
      const essays = await essay.all(params).leftJoin('classify','classify.id','essay.essay_id').select('essay.*',{'classify_name':'classify.name'});
      res.locals.essays = essays.map(data=>{
        data.created_time_display = formatTime(data.created_time);
        return data
      });
      res.render('admin/essay.tpl',{title:'文章管理'})
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals);
    }
  },
  insert:async function(req,res,next){
    let title = req.body.title;
    let essay_id = req.body.essay_id;
    let user_id = req.body.user_id;
    let content = req.body.content;
    let created_time = new Date();
    if(!title || !essay_id || !user_id || !content){
      res.json({code:0,message:'缺少参数'});
      return
    }

    try{
      const essays = await essay.insert({
        title,essay_id,user_id,content,created_time
      });
      res.json({code:200,data:essays});
    }catch(e){
      res.json({code:0,message:'内部错误'})
    }
  },
  edit:async function(req,res,next){
    try{
      const id = req.params.id;
      const essays = await essay.select({id});
      res.locals.essay = essays[0];
      const classify = await Classify.all();
      console.log(classify)
      res.locals.classify = classify;
      res.render('admin/essay_edit.tpl', { title: '修改文章' })
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals);
    }
  },
  updated:async function(req,res,next){
    let title = req.body.title;
    let essay_id = req.body.essay_id;
    let content = req.body.content;
    let id = req.params.id;
    console.log(title,essay_id,content,id)
    if(!title || !essay_id || !content){
      res.json({code:0,message:'缺少参数'});
      return
    }

    try{
      const essays = await essay.update(id,{
        title,essay_id,content
      });
      console.log(essays)
      res.json({code:200,data:essays})
    }catch(e){
      res.json({code:0,message:'内部错误'})
    }
  },
  delete:async function(req,res,next){
    let id = req.body.index;
    if(!id){
      res.json({code:0,data:'params empty!'});
      return
    }

    try{
      const essays = await essay.delete(id);
      res.json({code:200,data:essays})
    }catch(e){
      res.json({code:0,data:e})
    }
  },
  renderEssayCreate:async function(req,res,next){
    try{
      const classify = await Classify.all();
      console.log(classify)
      res.locals.classify = classify;
      res.render('admin/essay_create',{title:'新建文章'})
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals);
    }
    
  }
}

module.exports = essayController;