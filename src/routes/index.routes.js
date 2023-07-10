module.exports = routes = require("express").Router();
const { asyncWrapper } = require("../middleware/index");
const AppError = require("../utils/AppError");

const TeamRouters = require("./team.routes");
const PlayerController = require("./player.routes");

routes.use("/Team", TeamRouters);
routes.use("/Player", PlayerController);

const invalidedRouter = asyncWrapper((req, res, next) => {
    return next(new AppError(`${req.url} - Bad Request / Page not Found`, 404));
});
routes.all("*", invalidedRouter);

