const express = require('express');
const router = express.Router();


router.route('/').get((req,res)=>{
  res.send('All Items')
})
//const app = express()

module.exports = router