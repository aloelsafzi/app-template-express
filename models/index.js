'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { str2num } = require('../utils/converts');

const basename = path.basename(__filename);

var sequelize;

sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,

  protocol: process.env.DB_PROTOCOL,
  host: process.env.DB_HOST,
  port: str2num(process.env.DB_PORT, null),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  pool: {
    min: str2num(process.env.DB_POOL_MIN, 0),
    max: str2num(process.env.DB_POOL_MAX, 10),
    idle: str2num(process.env.DB_POOL_IDLE, 30000),
    acquire: str2num(process.env.DB_POOL_ACQUIRE, 60000),
  }
});


const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model;
    var fullpath = path.join(__dirname, file);

    try {
      model = require(fullpath)(sequelize, Sequelize.DataTypes);
    } catch (err) {
      if ((err.name === 'TypeError') && err.message && err.message.includes('defineCall is not a function')) {
        model = require(fullpath);
      } else {
        throw err;
      }
    }

    if (model.name) {
      db[model.name] = model;
    }
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
