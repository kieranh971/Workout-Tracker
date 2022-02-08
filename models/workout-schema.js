const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const workoutTracker = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
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

workoutTracker.virtual("totalDuration").get(function () {
    console.log(this);
    if (typeof this.exercises === 'undefined') {
        return 0;
    }
    return this.exercises.reduce((total, exercises) => {
        return total + exercises.duration;
    }, 0)
});

workoutTracker.virtual("totalDistance").get(function () {
    console.log(this);
    if (typeof this.exercises === 'undefined') {
        return 0;
    }
    return this.exercises.reduce((total, exercises) => {
        return total + exercises.distance;
    }, 0)
});

const Workout = mongoose.model("Workout", workoutTracker);

module.exports = Workout