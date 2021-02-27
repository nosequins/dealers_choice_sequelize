const express = require('express');
const app = express();
const {db,seed, Characters, Group } = require('./db');

app.use('/api/southpark', require('./router'));
app.use(express.static(__dirname + '/public'));
app.get('/ageGroups', (req,res)=>
    res.sendFile(__dirname + './ageGroups')
)
app.get('/',async(req,res)=>{
    try{
        res.redirect('/api/southpark');
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