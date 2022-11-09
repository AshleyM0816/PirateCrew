const Pirate = require("../models/pirate.model")

const createNewPirate = (req, res) => {
    console.log("test", req.body)
    Pirate.create(req.body)
    .then((newPirate) => {
    res.json({ newPirate });
    })
    .catch((err) => {
    res.status(400).json({ err });
    });
};

const getAllPirates = (req, res) => {
    Pirate.find({})
    .then((allPirates) => {
    res.json(allPirates);
    })
    .catch((err) => {
    res.status(400).json({ err });
    });
}

const getOnePirate = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
    .then((queriedPirate) => {
    res.json(queriedPirate);
    })
    .catch((err) => {
    res.status(400).json({ err });
    });
}

const deleteExistingPirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
    res.json({ deletedResponse });
    })
    .catch((err) => {
    res.status(400).json({ err });
    });
}

module.exports = {
    createNewPirate,
    getAllPirates,
    getOnePirate,
    deleteExistingPirate,
};