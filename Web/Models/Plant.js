var mongoose = require('mongoose');

var plantSchema = mongoose.Schema({
  name:{
    type: String
  },
  watered:{
    type: Date
  },
  image_url:{
    type: String
  },
  type:{
    type: String
  },
  description:{
    type: String
  },
  active:{
    type: Boolean,
    default: false
  },
  moisture:{
    type: Number,
    default: 0
  }
});

var Plant = module.exports = mongoose.model('Plant', plantSchema);

//Get all plants
module.exports.getPlants = function(callback, limit){
  Plant.find(callback).limit(limit);
}

//Get plant
module.exports.getPlantById = function(id, callback){
  Plant.findById(id, callback);
}

//Add plant
module.exports.addPlant = function(plant, callback){
  Plant.create(plant, callback);
}

//Update plant
module.exports.updatePlant = function(_id, plant, options, callback){
  var query = {_id: _id};
  var update = {
    name: plant.name,
    active: plant.active
  }
  Plant.findOneAndUpdate(query, update, options, callback);
}

//Confirm plant
module.exports.confirmPlant = function(_id, plant, options, callback){
  var query = {_id: _id};
  var update = {
    active: plant.active
  }
  Plant.findOneAndUpdate(query, update, options, callback);
}

//Update plant status
module.exports.updatePlantStatus = function(_id, plant, options, callback){
  var query = {_id: _id};
  var update = {
    moistureStatus: plant.name,
    moistureTimestamp: plant.timestamp
  }
  Plant.findOneAndUpdate(query, update, options, callback);
}


//Delete plant
module.exports.removePlant = function(_id, callback){
  var query = {_id: _id};
  Plant.remove(plant, callback);
}
