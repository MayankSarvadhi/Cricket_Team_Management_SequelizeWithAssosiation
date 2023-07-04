module.exports = TeamRoutes = require("express").Router();

const { asyncWrapper } = require("../middleware/index");
const { TeamController } = require("../controller/index.Controller");

TeamRoutes.post("/", asyncWrapper(TeamController.create.bind(TeamController)));
TeamRoutes.delete("/:id", asyncWrapper(TeamController.delete.bind(TeamController)));
TeamRoutes.put("/:id", asyncWrapper(TeamController.update.bind(TeamController)));


TeamRoutes.get("/:id",asyncWrapper(TeamController.getOneTeamWithAllPlayer));
TeamRoutes.get("/allTypes/:id",asyncWrapper(TeamController.GetParticularTeamPlayers));
TeamRoutes.get("/",asyncWrapper(TeamController.getAllTeamsWithItPlayer));