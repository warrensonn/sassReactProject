const db = require("../models");
const Vehicle = db.vehicle;

exports.getVehicle = (req, res) => {
    Vehicle.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(vehicle => {
            if (!vehicle) {
                return res.status(404).send({ message: "Vehicle Not found." });
            }

            res.status(200).send(vehicle)
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        });
};

exports.getVehicles = (req, res) => {
    Vehicle.findAll()
        .then(vehicles => {
            res.status(200).send(vehicles)
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
};

exports.createVehicle = async (req, res) => {

    
    const vehicle = await Vehicle.create({
        brand: req.body.brand,
        modele: req.body.modele,
        userid: req.userid, // il faut utiliser l'id de l'utilisateur qui créer
        seriesNumber: req.body.seriesNumber,
        pieceToChange: req.body.pieceToChange,
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .catch(err => {
            return res.status(500).send({ message: err.message })
        })
    res.status(200).send({
        id: vehicle.id
    });
};

exports.deleteVehicle = (req, res) => {
    Vehicle.destroy({
        where: {
            id: req.body.id
        }
    })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
    res.status(200).send({ message: "Vehicule has been deleted" });
};