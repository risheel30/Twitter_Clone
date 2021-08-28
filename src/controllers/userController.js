const User=require('../models/user');

const profile = function (req, res) {
  res.render("users/user_profile", {
    title: "User Profile",
    layout: __dirname + "/../../src/views/layouts/user_layout",
  });
};

const signIn = function (req, res) {
  if(req.isAuthenticated()){
    return res.redirect('/users/profile');
  }
  return res.render("users/user_sign_in", {
    title: "Twitter | Sign Up",
  });
};

const signUp = function (req, res) {
  if(req.isAuthenticated()){
    return res.redirect('/users/profile');
  }
  return res.render("users/user_sign_up", {
    title: "Twitter | Sign In",
  });
};

const create = function (req, res) {
    console.log(req.body);
  if(req.body.password!=req.body.confirm_password){
      return res.redirect('back');
  }
  User.findOne({email:req.body.email},function(err,user){
      if(err){
          console.error(e);
          return;
      }
      if(!user){
          User.create(req.body,function(err,user){
            if(err){
                console.error(e);
                return;
            }
            return res.redirect('/users/signin');
          })

      }
      else{
          return res.redirect('/users/signin');
      }
  })
 
};

const createSession = function (req, res) {
  return res.redirect('/');
};

module.exports = {
  profile,
  signIn,
  signUp,
  create,
  createSession,
};
