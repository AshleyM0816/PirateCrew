const pirateController = require ("../controllers/pirate.controller")

module.exports = (app) => {
    app.post("/api/pirate/new", pirateController.createNewPirate);
    app.get("/api/pirate", pirateController.getAllPirates);
    app.get("/api/pirate/:id", pirateController.getOnePirate);
    app.delete("/api/pirate/:id", pirateController.deleteExistingPirate);
};