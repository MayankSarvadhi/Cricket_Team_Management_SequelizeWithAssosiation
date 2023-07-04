const { DataTypes } = require("sequelize")
const sequelize = require("../config/ConnectDB");
const playerModel = require("./Players.Model");

const CricketTeamSchema = sequelize.define("CricketTeam", {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    teamName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    coachName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

CricketTeamSchema.hasMany(playerModel, { foreignKey: "Team_id", as: "PlayerDetails" });
playerModel.belongsTo(CricketTeamSchema, { foreignKey: "Team_id", as: "TeamsDetail" });

module.exports = CricketTeamSchema


