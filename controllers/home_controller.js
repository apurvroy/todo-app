const List=require('../models/list');
module.exports.home=function(req,res){
    List.find({},function(err,tasks){
        if(err){
          console.log('erroe in fetching the contacts from db');
          return ;
        };
    return res.render('home',{
        title:"TODO",
        list:tasks
    });
});
};

module.exports.create=function(req,res){
    List.create(req.body,function(err){
        if(err)
        {console.log('Error during creating a task');
        return;
        };
        return res.redirect('back');

    })
}