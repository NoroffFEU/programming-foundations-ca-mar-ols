const insectHotel = {
  location: {
    placement: "outside on shed wall",
    shedOwners: ["dad", "stepmom"],
    closestNeighbour: "rosebush",
  },
  materialsUsed: ["wood", "bamboo", "pine cones", "sawdust"],
  colour: "light wood",
  numberOfCompartments: 6,
  currentlyOccupied: false,
  typesOfInsects: [
    {
      type: "Bee",
      inRiskOfExtinction: true,
      numberOfSpecies: 20000,
      usefulFor: "pollination",
    },
    {
      type: "Wasp",
      inRiskOfExtinction: false,
      numberOfSpecies: 30000,
      usefulFor: "pest control",
    },
    {
      type: "Bumblebee",
      inRiskOfExtinction: true,
      numberOfSpecies: 250,
      usefulFor: "pollination",
    },
    {
      type: "Butterfly",
      inRiskOfExtinction: true,
      numberOfSpecies: 17500,
      usefulFor: "pollination",
    },
  ],
  minCelciusForInsectsToThrive: 10,
  temperature: function (temperature) {
    if (temperature >= this.minCelciusForInsectsToThrive) {
      console.log("Congrats, you've got bees!");
    } else {
      console.log("No bees for you.");
    }
  },
};

insectHotel.temperature(21);

console.log(insectHotel);
