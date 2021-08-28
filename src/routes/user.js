const express =require('express');
const passport=require('passport');
const userController=require('../controllers/userController');

const router=express.Router();
router.get('/profile',passport.checkAuthenticate,userController.profile);
router.get('/signin',userController.signIn);
router.get('/signup',userController.signUp);
router.post('/create',userController.create);

router.post('/create-session',passport.authenticate(
    'local',
    {
        successRedirect:'/',
        failureRedirect:'signin'

    }

),userController.createSession); 

module.exports=router;