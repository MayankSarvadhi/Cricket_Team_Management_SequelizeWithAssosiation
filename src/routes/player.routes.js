module.exports = PlayerRoutes = require("express").Router();

const { asyncWrapper } = require("../middleware/index");
const { PlayerController } = require("../controller/index.Controller");


PlayerRoutes.post("/", asyncWrapper(PlayerController.create.bind(PlayerController)));
PlayerRoutes.delete("/:id", asyncWrapper(PlayerController.delete.bind(PlayerController)));
PlayerRoutes.put("/:id", asyncWrapper(PlayerController.update.bind(PlayerController)));

PlayerRoutes.get("/:id",asyncWrapper(PlayerController.getOnePlayerWithTeam));
