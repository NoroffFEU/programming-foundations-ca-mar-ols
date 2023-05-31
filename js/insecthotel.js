const insectHotel = {
  colour: "light wood",
  numberOfCompartments: 6,
  minCelsiusForInsectsToThrive: 10,
  currentlyOccupied: false,
  materialsUsed: ["wood", "bamboo", "pine cones", "sawdust"],
  location: {
    placement: "outside on shed wall",
    shedOwners: ["dad", "stepmom"],
    closestNeighbour: "rosebush",
  },
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
    {
      type: "Ladybug",
      inRiskOfExtinction: true,
      numberOfSpecies: 6000,
      usefulFor: "pest control",
    },
  ],
  temperature: function (temperature) {
    if (temperature >= this.minCelsiusForInsectsToThrive) {
      console.log("Congrats, your milkshake brought all the bees to the yard!");
    } else {
      console.log("Where are the bees? Not in this bonnet!");
    }
  },
};

console.log(insectHotel);
