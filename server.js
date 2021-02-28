const express = require('express');
const app = express();
const {db,seed, Characters, Group } = require('./db');
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

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