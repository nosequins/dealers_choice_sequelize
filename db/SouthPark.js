//
const {Sequelize, STRING, INTEGER}= require('sequelize');
const db= require('./db')

const Characters = db.define('characters', {
    firstName:{
        type: STRING,
        allowNull: false
    },
    lastName:{
        type:STRING,
        allowNull: false
    }
});
const Group = db.define('agegroup', {
    type:{
        type: STRING,
        allowNull: false
    }
});




Characters.belongsTo(Group, {as:'group'});
Characters.belongsTo(Characters, {as: 'related'});





module.exports={Characters, Group}
