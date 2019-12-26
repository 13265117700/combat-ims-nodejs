const Classify = require('./../models/classify.js');
const Essay = require('./../models/essay.js');
const {formatTime} = require('./../utils/date.js');

const indexController = {
  show:async function(req,res,next){
    const classify = await Classify.all();
    res.locals.classify = classify.map(data=>{
      return data
    });
    const essay = await Essay.all().leftJoin('classify','classify.id','essay.essay_id').select('essay.*',{'classify_name':'classify.name'});
    res.locals.essay = essay.map(data=>{
      data.created_time_display = formatTime(data.created_time);
      return data
    })
    res.render('index.tpl',{title:'首页'})
  },
  paging:async function(req,res,next){
    try{
      const id = req.params.id;
      const essay = await Essay.select({essay_id:id});
      res.locals.essay = essay.map(data => {
        data.created_time_display = formatTime(data.created_time);
        return data
      });
      const classify = await Classify.all();
      res.locals.classify = classify;
      res.render('index_paging.tpl',{title:'首页'})
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals)
    }
  },
  renderEssayItem:async function(req,res,next){
    try{
      const id = req.params.id;
      const essay = await Essay.select({id});
      res.locals.essay = essay[0];
      const classify = await Classify.all();
      res.locals.classify = classify;
      res.render('index_essay.tpl',{title:'首页'})
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals)
    }
  }
}
module.exports = indexController;