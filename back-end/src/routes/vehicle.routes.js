const { authJwt } = require("../middleware");
const controller = require("../controllers/vehicle.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/vehicles",
        controller.getVehicles
    );

    app.get(
        "/api/vehicle",
        controller.getVehicle
    );

    app.post(
        "/api/vehicle",
        controller.createVehicle
    );

    app.delete(
        "/api/vehicle",
        controller.deleteVehicle
    );
};