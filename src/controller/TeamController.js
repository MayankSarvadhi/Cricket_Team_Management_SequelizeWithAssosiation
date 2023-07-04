const db = require("../model/index.Model");
const TeamModel = db.CricketTeamSchema
const playerModel = require("../model/Players.Model");
const AppError = require("../utils/AppError");
const ApplicationController = require("./Application.Controller");

class TeamController extends ApplicationController {
    constructor() {
        super(TeamModel);
    }

    async getOneTeamWithAllPlayer(req, res, next) {
        const { id } = req.params;
        const data = await TeamModel.findOne({
            include: [{
                model: playerModel,
                as: "PlayerDetails",
                attributes: ["playerName", "type"]
            }],
            attributes: ["id", "teamName", "coachName"],
            where: { id }
        });
        if (data) {
            return res.status(200).json({ success: true, StatusCode: 200, data, message: "Data Fetch SuccessFully" });
        } else {
            return next(new AppError(`This id = ${id} not found`, 404));
        }
    }

    async GetParticularTeamPlayers(req, res, next) {
        const { id } = req.params;
        const type = req.body.type;
        const data = await TeamModel.findOne({
            include: [{
                model: playerModel,
                as: "PlayerDetails",
                attributes: ["playerName", "type"],
                where: { type }
            }],
            attributes: ["id", "teamName", "coachName"],
            where: { id }
        });
        if (data) {
            return res.status(200).json({ success: true, StatusCode: 200, data, message: "Data Fetch SuccessFully" });
        } else {
            return next(new AppError(`This id = ${id} not found`, 404));
        }
    }

    async getAllTeamsWithItPlayer(req, res, next) {
        const data = await TeamModel.findAll({
            include: [{
                model: playerModel,
                as: "PlayerDetails",
                attributes: ["id", "playerName", "type"]
            }],
            attributes: ["id", "teamName", "coachName"]
        });
        if (data) {
            return res.status(200).json({ success: true, StatusCode: 200, data, message: "Data Fetch SuccessFully " });
        }
    }
}

module.exports = new TeamController();
