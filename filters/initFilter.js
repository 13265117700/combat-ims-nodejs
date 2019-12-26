module.exports = function(req,res,next){
  res.locals.seo = {
    title:'ims',
    keywords:'ims、Nodejs',
    description:'ims to study Nodejs on Web'
  }
  next();
}