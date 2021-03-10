const express = require('express');
const app = express();
//dont need to import db, Characters and Group if you dont use them in the file
const {db,seed, Characters, Group } = require('./db');


app.use('/southpark', require('./router'));
app.use(express.static(__dirname + '/public'));
app.get('/',async(req,res)=>{
    try{
        res.redirect('/southpark');
    }catch(err){
        res.sendStatus(500);
    }
})




const init = async()=>{
    try{
        await seed();
        const port = process.env.PORT || 3000;
        app.listen(port, ()=>console.log(`listening on port ${port}`));
    }catch(ex){
        console.log(ex);
    }
};

init();
