const db = require("../model/index.Model");
const PlayerModel = db.PlayerSchema
const CricketTeamsModel = require("../model/Team.Model")

const ApplicationController = require("./Application.Controller");

class PlayerController extends ApplicationController {
    constructor() {
        super(PlayerModel);
    }

    async getOnePlayerWithTeam(req, res, next) {
        const { id } = req.params;
        const data = await PlayerModel.findOne({
            include: [{
                model: CricketTeamsModel,
                as: "TeamsDetail",
                attributes: ["teamName", "coachName"]
            }],
            attributes: ["playerName", "type"],
            where: { id }
        });
        if (data) {
            return res.status(200).json({ success: true, StatusCode: 200, data, message: "Data Fetch SuccessFully" });
        } else {
            return next(new AppError(`This id = ${id} not found`, 404));
        }
    }
}

module.exports = new PlayerController();
