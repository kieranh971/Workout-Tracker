const Workout = require("../models/workout-schema");

module.exports = function(app){

    app.post("/api/workouts", ({ body }, res) => {
        console.log("POST ROUTE");
        Workout.create({})
        .then(WorkoutDB => {
            console.log("POST DATA TO DB", WorkoutDB)
            res.json(WorkoutDB)
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    app.get("/api/workouts", (req, res) => {
        console.log("GET WORKOUTS ROUTE");
        Workout.find({})
        .then((data) => {
            console.log("DATA FROM DB", data)
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log("UPDATE WORKOUTS ROUTE");
        Workout.findByIdAndUpdate(
            {_id: req.params.id},
            {$push: {exercises: req.body} },
            { new: true })
        .then((data) => res.json(data))
        .catch(err => {
            res.status(400).json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        console.log("GET WORKOUTS ROUTE");
        Workout.find()
        .then((data) => res.json(data))
        .catch((err) => {
            res.json(err);
        });
    });

    app.post("/api/workouts/range", (req, res) => {
        console.log("GET WORKOUTS ROUTE");
        Workout.create({})
        .then((data) => res.json(data))
        .catch((err) => {
            res.json(err);
        });
    });

}