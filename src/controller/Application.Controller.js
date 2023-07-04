const AppError = require("../utils/AppError");

class ApplicationController {
    constructor(model) {
        this.model = model;
    }

    async create(req, res, next) {
        const Data = await this.model.create(req.body);
        res.status(201).json({ success: true, StatusCode: 201, data: Data, message: "Data Insert Successfully" });
    }

    async update(req, res, next) {
        const { id } = req.params;
        const [updated] = await this.model.update(req.body, { where: { id } });
        if (updated) {
            const updatedData = await this.model.findByPk(id);
            return res.json({ success: true, StatusCode: 200, data: updatedData, message: "Data Update Successfully" });
        } else {
            return next(new AppError(`This id = ${id} not found`, 404));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        const deleted = await this.model.destroy({ where: { id } });
        if (deleted) {
            return res.json({ success: true, statusCode: 200, data: deleted, message: 'Data deleted Successfully' });
        } else {
            return next(new AppError(`id = ${id}  not found/Match`, 404));
        }
    }
}

module.exports = ApplicationController;
