const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./models/Modelschema'); // Assuming Modelschema.js contains your Mongoose schema
const app = express();

app.use(express.json());
// app.use(cors());
const cors = require('cors')
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));
mongoose.connect("mongodb+srv://222devika:SiriDevi91@cluster0.m4md1h8.mongodb.net/")
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.post('/register', (req, res) => {
    Patient.create(req.body)
        .then(employee => res.json(employee))
        .catch(err => res.json(err))
});

app.post('/symptoms', async (req, res) => {
    try {
        const { email, symptoms,medicines} = req.body;
        const patient = await Patient.findOneAndUpdate({ email }, { symptoms ,medicines}, { new: true });
        if (!patient) {
            res.json("error");
        }
        res.json(patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
app.post('/need', async (req, res) => {
    try {
        const { email} = req.body;
        const patient = await Patient.find({ email });
        if (!patient) {
            res.json("error");
        }
        res.json(patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/login',(req,res)=>{
    const {email,password} =req.body;
    Patient.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
               console.log( res.json("Success"))
            }
            else{
                console.log(res.json('incorrect password'))
            }
        }
        else{
            res.json("no user exits")
        }
    })
})
app.get('/ra', (req, res) => {
    // Accessing query parameters
    const data = req.query;
    res.json(data);
});

const PORT = process.env.PORT || 3001; // Use the environment port if available, or default to 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
