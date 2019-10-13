const List=require('../models/list');
module.exports.home=function(req,res){
    return res.render('home',{
        title:"TODO"
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