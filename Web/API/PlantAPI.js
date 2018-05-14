
const plants = [];

//Creates a ned plant i plants array
function newPlant(plantIP){
  const plant = {
    id: plants.length + 1,
    ip: plantIP,
    name: "new plant"
  };
  plants.push(plant);
  return plant;
}
module.exports.newPlant = newPlant;

//Confirmation from plant node to create new plant
function confirmPlant(){

}

//Plant updates moisture status
function updatePlantStatus(){

}

//Checks plant status
function checkPlant(){

}

//Ping button on plant is pressed
function pingFromPlant(){

}

function showPlants(){
  return plants;
}
module.exports.showPlants = showPlants;
