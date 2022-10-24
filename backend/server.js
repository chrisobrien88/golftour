const express = require('express')
const mongoose = require('mongoose')
const GolferStats = require('./models/GolferInfo')
const cors = require('cors')

const port = 4000
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://golftouradmin:sawitbounce@crud.ogeyyyt.mongodb.net/golftourapp?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
})


app.post('/insertplayer', async (req, res) => {
    const firstName = req.body.firstName
    const team = req.body.team
    const handicap = req.body.handicap

    const golfer = new GolferStats({
        firstName: firstName,
        lastName: "",
        team: team,
        handicap: handicap,
        playerBio: "",
        active: true,
    })
    try {
        // save this instance of golfer variable into the database
        await golfer.save()
        res.send('data sent');
    } catch (error) {
        console.log(error);
    }
});


app.listen(port, () =>{
    console.log(`server running on ${port}`);
})