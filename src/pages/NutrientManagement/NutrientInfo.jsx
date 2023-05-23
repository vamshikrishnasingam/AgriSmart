var cropNutrientLevels = {
  wheat: {
    nitrogen: 100,
    phosphorus: 50,
    potassium: 75
  },
  corn: {
    nitrogen: 120,
    phosphorus: 60,
    potassium: 90
  },
  rice: {
    nitrogen: 80,
    phosphorus: 40,
    potassium: 60
  },
  millets: {
      nitrogen: 90,
      phosphorus: 50,
      potassium: 80
  },
  tea: {
      nitrogen: 150,
      phosphorus: 40,
      potassium: 180
  },
  cotton: {
      nitrogen: 200,
      phosphorus: 60,
      potassium: 150
  },
  jute: {
      nitrogen: 80,
      phosphorus: 40,
      potassium: 100
  },
  sugarcane: {
      nitrogen: 200,
      phosphorus: 60,
      potassium: 250
  },
  soybean: {
      nitrogen: 90,
      phosphorus: 45,
      potassium: 70
  },
  potato: {
      nitrogen: 110,
      phosphorus: 55,
      potassium: 80
  },
  tomato: {
      nitrogen: 70,
      phosphorus: 35,
      potassium: 50
  },
  orange: {
      nitrogen: 70,
      phosphorus: 35,
      potassium: 45
  },
    mango: {
      nitrogen: 80,
      phosphorus: 40,
      potassium: 60
  },

  // Add more crops and their nutrient levels here...
};

function NutrientInfo() {
  var cropName = document.getElementById('cropName').value;

  var nutrientLevels = cropNutrientLevels[cropName];

  if (nutrientLevels) {
    var nutrientLevelsText = 'Nutrient levels for ' + cropName + ':<br>';
    nutrientLevelsText += 'Nitrogen: ' + nutrientLevels.nitrogen + ' ppm<br>';
    nutrientLevelsText += 'Phosphorus: ' + nutrientLevels.phosphorus + ' ppm<br>';
    nutrientLevelsText += 'Potassium: ' + nutrientLevels.potassium + ' ppm';

    document.getElementById('nutrientLevels').innerHTML = nutrientLevelsText;
  } else {
    document.getElementById('nutrientLevels').innerHTML = 'Crop nutrient levels not found for ' + cropName;
  }
}
export default NutrientInfo