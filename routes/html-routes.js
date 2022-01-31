const path = require("path");

module.exports = (app) => {
    // route to index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    // route for exercise.html
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });

    // route for stats.html
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });

}