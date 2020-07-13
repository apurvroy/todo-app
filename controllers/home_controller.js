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
};

module.exports.delete=function(req,res){
    var items=[];
    for(var key in req.body){
        items=req.body[key];
    }
    List.deleteMany({_id:{$in:items}},function(err, data){
        if (err) 
       { console.log(err,'Error in deleting the task');
        return ;
       }
       return res.redirect('back');
        
    });
}