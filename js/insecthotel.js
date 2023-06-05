// My object

const insectHotel = {
  colour: "light wood",
  numberOfCompartments: 6,
  minCelsiusForInsectsToThrive: 10,
  currentlyOccupied: false,
  materialsUsed: ["wood", "bamboo", "pine cones", "sawdust"],
  location: {
    placement: "outside on a shed wall",
    shedOwners: ["dad", "step-mom"],
    closestNeighbour: "rosebush",
  },
  typesOfInsects: [
    {
      type: "Bee",
      inRiskOfExtinction: true,
      numberOfSpecies: 20000,
      usefulFor: "Pollination",
    },
    {
      type: "Wasp",
      inRiskOfExtinction: false,
      numberOfSpecies: 30000,
      usefulFor: "Pest control",
    },
    {
      type: "Bumblebee",
      inRiskOfExtinction: true,
      numberOfSpecies: 250,
      usefulFor: "Pollination",
    },
    {
      type: "Butterfly",
      inRiskOfExtinction: true,
      numberOfSpecies: 17500,
      usefulFor: "Pollination",
    },
    {
      type: "Ladybug",
      inRiskOfExtinction: true,
      numberOfSpecies: 6000,
      usefulFor: "Pest control",
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

// Inserting properties on webpage

var whereIs = document.querySelector(".location");
whereIs.innerHTML += insectHotel.location.placement;

var whoOwns1 = document.querySelector(".dad");
whoOwns1.innerHTML += insectHotel.location.shedOwners[0];

var whoOwns2 = document.querySelector(".stepmom");
whoOwns2.innerHTML += insectHotel.location.shedOwners[1] + "'" + "s";

var roomsForRent = document.querySelector(".compartments");
roomsForRent.innerHTML += insectHotel.numberOfCompartments;

var hotelColour = document.querySelector(".colour");
hotelColour.innerHTML += insectHotel.colour;

var madeOf1 = document.querySelector(".materials1");
madeOf1.innerHTML +=
  insectHotel.materialsUsed[0] +
  "," +
  " " +
  insectHotel.materialsUsed[1] +
  "," +
  " " +
  insectHotel.materialsUsed[2];

var madeOf2 = document.querySelector(".materials2");
madeOf2.innerHTML += insectHotel.materialsUsed[3] + ".";

// Pop up alert to check for room availability

var checkRoom = document.getElementById("rentARoom");
checkRoom.addEventListener("click", function () {
  if (insectHotel.currentlyOccupied === false) {
    alert(
      "Huzzah! We have room! ♪ You can check out any time you want, but you can never leave ♪"
    );
  } else {
    alert(
      "Roses are red, violets are blue, we're terribly sorry, but no room for you."
    );
  }
});

// Bee facts inserted on webpage

var bee = document.querySelector(".typeBee");
bee.innerHTML += insectHotel.typesOfInsects[0].type;

var species = document.querySelector(".species1");
species.innerHTML += insectHotel.typesOfInsects[0].numberOfSpecies;

var extinctionBee = document.querySelector(".extinct1");
if (insectHotel.typesOfInsects[0].inRiskOfExtinction === true) {
  extinctionBee.innerHTML += "Yes";
} else {
  extinctionBee.innerHTML += "No";
}

var usefulBee = document.querySelector(".useful1");
usefulBee.innerHTML += insectHotel.typesOfInsects[0].usefulFor;

// Wasp facts inserted on webpage

var wasp = document.querySelector(".typeWasp");
wasp.innerHTML += insectHotel.typesOfInsects[1].type;

var species = document.querySelector(".species2");
species.innerHTML += insectHotel.typesOfInsects[1].numberOfSpecies;

var extinctionWasp = document.querySelector(".extinct2");
if (insectHotel.typesOfInsects[1].inRiskOfExtinction === true) {
  extinctionWasp.innerHTML += "Yes";
} else {
  extinctionWasp.innerHTML += "No";
}

var usefulWasp = document.querySelector(".useful2");
usefulWasp.innerHTML += insectHotel.typesOfInsects[1].usefulFor;

// Bumblebee facts inserted on webpage

var bumblebee = document.querySelector(".typeBumblebee");
bumblebee.innerHTML += insectHotel.typesOfInsects[2].type;

var species = document.querySelector(".species3");
species.innerHTML += insectHotel.typesOfInsects[2].numberOfSpecies;

var extinctionBumblebee = document.querySelector(".extinct3");
if (insectHotel.typesOfInsects[2].inRiskOfExtinction === true) {
  extinctionBumblebee.innerHTML += "Yes";
} else {
  extinctionBumblebee.innerHTML += "No";
}

var usefulBumblebee = document.querySelector(".useful3");
usefulBumblebee.innerHTML += insectHotel.typesOfInsects[2].usefulFor;

// Butterfly facts inserted on webpage

var butterfly = document.querySelector(".typeButterfly");
butterfly.innerHTML += insectHotel.typesOfInsects[3].type;

var species = document.querySelector(".species4");
species.innerHTML += insectHotel.typesOfInsects[3].numberOfSpecies;

var extinctionButterfly = document.querySelector(".extinct4");
if (insectHotel.typesOfInsects[3].inRiskOfExtinction === true) {
  extinctionButterfly.innerHTML += "Yes";
} else {
  extinctionButterfly.innerHTML += "No";
}

var usefulButterfly = document.querySelector(".useful4");
usefulButterfly.innerHTML += insectHotel.typesOfInsects[3].usefulFor;

// Ladybug facts inserted on webpage

var ladybug = document.querySelector(".typeLadybug");
ladybug.innerHTML += insectHotel.typesOfInsects[4].type;
var species = document.querySelector(".species5");
species.innerHTML += insectHotel.typesOfInsects[4].numberOfSpecies;

var extinctionLadybug = document.querySelector(".extinct5");
if (insectHotel.typesOfInsects[4].inRiskOfExtinction === true) {
  extinctionLadybug.innerHTML += "Yes";
} else {
  extinctionLadybug.innerHTML += "No";
}

var usefulLadybug = document.querySelector(".useful5");
usefulLadybug.innerHTML += insectHotel.typesOfInsects[4].usefulFor;

// Temperature check

var insertTemp = document.querySelector(".temp");
insertTemp.innerHTML += insectHotel.minCelsiusForInsectsToThrive;

function checkMyTemp() {
  var tempInput = document.getElementById("userTemp").value;
  if (tempInput >= insectHotel.minCelsiusForInsectsToThrive) {
    document.getElementById("tempResult").innerHTML =
      "Congrats, your milkshake brought all the bees to the yard!";
  } else {
    document.getElementById("tempResult").innerHTML =
      "Where are the bees? Not in this bonnet!";
  }
}

// Bees flying in from left with sound

var buzz = new Audio();
buzz.src = "audio/521364__taylordonj__beesshortburst.wav";
var sendBees = document.querySelector(".beeBtn");

sendBees.onclick = function () {
  var getBees = document.getElementById("animatedBees");
  var position = -50;
  var midScreen = window.innerWidth / 2;
  var bees = setInterval(movingBees, 1);
  function movingBees() {
    if (position == midScreen) {
      clearInterval(bees);
    } else {
      position++;
      getBees.style.left = position + "px";
    }
  }
};
