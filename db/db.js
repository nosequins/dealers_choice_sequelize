
const Sequelize= require('sequelize');

const db= new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/southpark',
{
    logging: false,
    ssl: {
      rejectUnauthorized: false
    }
  });

module.exports= db;
