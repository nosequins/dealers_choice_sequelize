const db= require('./db');
const {Characters, Group}= require('./SouthPark');



const seed= async ()=>{
    await db.sync({force:true});
    const [butters, token, eric,kenny, kyle, stan,
           liane, linda, sharon, gerald, lindab,
           stuart, old, young]= await Promise.all([Characters.create({firstName:'Butters', lastName: 'Stotch'}),
           Characters.create({firstName:'Token', lastName: 'Black'}),
           Characters.create({firstName:'Eric', lastName: 'Cartman'}),
           Characters.create({firstName:'Kenny', lastName: 'McCormick'}),
           Characters.create({firstName:'Kyle', lastName: 'Broflovski'}),
           Characters.create({firstName:'Stan', lastName: 'Marsh'}),
           Characters.create({firstName:'Liane', lastName: 'Cartman'}),
           Characters.create({firstName:'Linda', lastName: 'Stotch'}),
           Characters.create({firstName:'Sharon', lastName: 'Marsh'}),
           Characters.create({firstName:'Gerald', lastName: 'Broflovski'}),
           Characters.create({firstName:'Linda', lastName: 'Black'}),
           Characters.create({firstName:'Stuart', lastName: 'McCormick'}),
           Group.create({type:'Adult'}),
           Group.create({type:'Kid'})
        ]);
    await Promise.all([butters.setGroup(young), token.setGroup(young),
        eric.setGroup(young)], kenny.setGroup(young), kyle.setGroup(young),
        stan.setGroup(young), liane.setGroup(old),linda.setGroup(old),
        sharon.setGroup(old), gerald.setGroup(old), lindab.setGroup(old),
        stuart.setGroup(old),);

        butters.relatedId= linda.id;
        token.relatedId= lindab.id;
        eric.relatedId= liane.id;
        kenny.relatedId= stuart.id;
        kyle.relatedId= gerald.id;
        stan.relatedId= sharon.id;
        liane.relatedId= eric.id;
        linda.relatedId= butters.id;
        sharon.relatedId= stan.id;
        gerald.relatedId= kyle.id;
        lindab.relatedId= token.id;
        stuart.relatedId= kenny.id;
    await Promise.all([butters.save(), token.save(), eric.save(), kenny.save(),
         kyle.save(), stan.save(), liane.save(), linda.save(), sharon.save(),
         gerald.save(), lindab.save(), stuart.save()])

};
module.exports = seed;