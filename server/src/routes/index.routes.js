const {Router}= require('express');
const router= Router();
const {home}= require('../controllers/functions');

router.get('/', home);

module.exports=router;