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
    /*it seems as if you only have 2 age groups
    so you could use the ENUM dataType, which essentially limits
    the possible values to an item in an array.

    An enum type is a special data type that enables for a variable to be a set of predefined constants. The variable must be equal to one of the values that have been predefined for it. Common examples include compass directions (values of NORTH, SOUTH, EAST, and WEST) and the days of the week.

    https://sequelize.org/master/class/lib/data-types.js~ENUM.html*/
});



/*you don't need the `as: 'group'`, because it doesnt do much that
sequelize doesnt do by default*/
Characters.belongsTo(Group, {as:'group'});
Characters.belongsTo(Characters, {as: 'related'});





module.exports={Characters, Group}
