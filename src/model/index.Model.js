const { DataTypes } = require("sequelize");
const sequelize = require("../config/ConnectDB");

const db = {}

db.sequelize = sequelize;
db.DataTypes = DataTypes

db.CricketTeamSchema = require("./Team.Model");
db.PlayerSchema = require("./Players.Model");


// db.sequelize.sync({ force: false });

module.exports = db;

