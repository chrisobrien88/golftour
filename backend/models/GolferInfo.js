const mongoose = require('mongoose')

const GolferInfoSchema = new mongoose.Schema ({
        firstName: {
                type: String,
                required: true,
        },
        lastName: {
                type: String,
                required: false,
        },
        team: {
                type: String,
                required: false,
        },
        handicap: {
                type: Number,
                required: false,
        },
        playerBio: {
                type: String,
                required: false,
        },
        active: {
                type: Boolean,
                required: false,
                default: true,
        },
        golferId: {
                type: Number,
                required: true,
                default: Date.now()
        }
});

            
// pass it into a model in mongoose. The 1st argument has to be the same value as your collection.
const Golfer = mongoose.model("golferstats", GolferInfoSchema)
            
module.exports = Golfer