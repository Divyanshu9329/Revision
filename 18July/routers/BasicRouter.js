const router = require('express').Router();

router.get("/home",(req,res)=>
{
    res.render('calchome');
});

router.get("/add",(req,res)=>
{
    const {fnum,snum} = req.query;
    const z = fnum*1 + snum*1;
    res.render('result',{
        finalres : z
    });
});
router.post("/mul",(req,res)=>
{
    const {fnum,snum} = req.body;
    const z = fnum * snum;
     res.render('result',{
        finalres : z
    });
})
// ********************************

router.get("/pro",(req,res)=>
{
    const {fnum,snum} = req.query;
    const z = fnum - snum;
    res.render('result',{
        finalres : z
    });
});
router.post("/pro",(req,res)=>
{
    const {fnum,snum} = req.body;
    const z = fnum / snum;
     res.render('result',{
        finalres : z
    });
})

router.all("/test",(req,res)=>
{
    const {fnum,snum} = req.method=="GET"?req.query:req.body;
    const z = fnum % snum;
     res.render('result',{
        finalres : z
    });
});

module.exports = router;