const express = require('express');
const router= express.Router();
const {db,seed, Characters, Group } = require('./db');


router.get('/', async(req,res)=>{
    try{
        const characters= await Characters.findAll()
        
        res.send(
            `<html>
                <head>
                    <link rel="stylesheet" href="/style.css" />
                    <title>South Park</title>
                </head>
                <body>
                    <h1>South Park Characters</h1>
                    <div class='charcters'>
                    <ul>
                    ${characters.map(person=>
                        
                        `<li> &#10024 <a href='/southpark/${person.id}'>${person.firstName} ${person.lastName}</a> &#10024 </li>`

                    ).join('')}
                    </ul>
                    </div>
                </body>
            </html>`
        )
    }catch(err){
        console.log(err)
    }
})


router.get('/:id',  async(req,res)=>{
    try{ const charName= await Characters.findByPk(req.params.id);
         const related= await(Characters.findByPk(charName.relatedId))
         const group =await Group.findByPk(charName.groupId)
        res.send(`<html>
            <head>
                <link rel="stylesheet" href="/style.css" />
                <title>${charName.firstName} ${charName.lastName}</title>
                
            </head>
            <body>
                <div class= 'characterName'>
                <h1>${charName.firstName} ${charName.lastName}</h1>
                    <ul class='details'>
                        <li>Id: ${req.params.id}</li>
                        <li>Type: ${group.type}</li>
                        
                    </ul>
                </div>
            </body>
            <script>
            
            if(${charName.groupId} === 2 ){
                
                const li = document.createElement('li'); 
                li.innerHTML = 'Parent: ${related.firstName} ${related.lastName}';
                document.querySelector('.details').appendChild(li)
            }else{
                
                const li = document.createElement('li'); 
                li.innerHTML = 'Child: ${related.firstName} ${related.lastName}';
                document.querySelector('.details').appendChild(li)
            }
            </script>
        </html>`)

    }catch(err){
        res.sendStatus(500)
    }

} )
module.exports= router