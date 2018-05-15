
const express = require('express');
const app = express();
const PlantAPI = require('./API/PlantAPI.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Plant = require('./Models/Plant');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/plantdb');
const db = mongoose.connection;


app.use(express.json());

//Home route
app.get('/', (req, res) => {
  res.send('Hjem ruten');
});

//Get plants
app.get('/api/plants', (req, res) => {
  Plant.getPlants(function(err, plants){
    if(err){
      throw err;
    }
    res.json(plants);
  })
});

//New plant
app.post('/api/newplant', (req, res) => {
  var plant = req.body;
  Plant.addPlant(plant, function(err, plant){
    if(err){
      throw err;
    }
    res.json(plant);
  })
});

//update plant
app.put('/api/up/:_id', (req, res) => {
  var id = req.params._id;
  var plant = req.body;
  Plant.updatePlant(id, plant, {}, function(err, plant){
    if(err){
      throw err;
    }
    res.json(plant);
  })
});

//confirm plant
app.put('/api/confirm/:_id', (req, res) => {
  var id = req.params._id;
  var plant = req.body;
  Plant.confirmPlant(id, plant, {}, function(err, plant){
    if(err){
      throw err;
    }
    res.json(plant);
  })
});

//Get plant
app.get('/api/plant/:_id', (req, res) => {
  Plant.getPlantById(req.params._id, function(err, plant){
    if(err){
      throw err;
    }
    res.json(plant);
  })
});


//API routes below############################################################
//No database interaction

//Create a new plant
app.post('/api/newplant', (req, res) => {
  const plant = PlantAPI.newPlant(req.body.ip);
  res.send(plant);
});

//Confirm new plant is created
app.post('/api/confirmplant/', (req, res) => {
  res.send('confirm plant: '+ req.body.id);
});

//Plant updates soil status
app.get('/api/updateplantstatus/:id/:moisture', (req, res) => {
  res.send('information' + req.params.id + ' and ' + req.params.moisture);
});

//Button on plantnode is pressed
app.post('/api/pingbutton/', (req, res) => {
  //res.send('Ping button is pressed form: '+ req.body.id +' ' +req.body.ip);
  res.send(true);
});


//Server listener
app.listen(4000, () => console.log('Listening on port 4000...'));
