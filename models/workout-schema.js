const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const workoutTracker = newSchema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercise: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: "Enter workout name"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "Enter exercise type"
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                duration: {
                    type: Number,
                    default: 0,
                    required: "Enter duration of workout in minutes"
                },
                distance: {
                    type: Number,
                    default: 0,
                    required: "Enter exercise distance"
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutTracker.virtual("fullDuration").get(function () {
    console.log(this);
    if (typeof this.exercise === 'undefined') {
        return 0;
    }
    return this.exercise.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
});

workoutTracker.virtual("totalDistance").get(function () {
    console.log(this);
    if (typeof this.exercise === 'undefined') {
        return 0;
    }
    return this.exercise.reduce((total, exercise) => {
        return total + exercise.distance;
    }, 0)
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout