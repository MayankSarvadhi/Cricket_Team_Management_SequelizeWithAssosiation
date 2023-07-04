const { DataTypes } = require("sequelize");
const sequelize = require("../config/ConnectDB");
const TeamModel = require("./Team.Model");

const PlayerSchema = sequelize.define("Player", {
    playerName: {
        type: DataTypes.STRING,
        allowNull: [false, "PlayerName Must be Provided"]
    },
    type: {
        type: DataTypes.ENUM,
        allowNull: [false, " Type Must be Provided "],
        values: ["batsman", "bowler", "all-rounder"]
    },
    Team_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "CricketTeams",
            key: "id"
        }
    }
});


module.exports = PlayerSchema



