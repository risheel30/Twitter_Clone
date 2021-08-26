module.exports.profile=function(req,res){
    res.render('users/user_profile',{title:"User Profile",layout:__dirname+'/../../src/views/layouts/user_layout'});
}