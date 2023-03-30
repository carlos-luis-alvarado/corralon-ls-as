const { response } = require('express');
const express = require('express');
const router = express.Router();


router.get('/',(req,res=response)=>{
    res.status(200).json({
        msg:'Pagina principal'
    })
})


module.exports = router;