[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11218696&assignment_repo_type=AssignmentRepo)

# Programming Foundations CA

## Insect hotel

The item I've decided to describe as an object is an insect hotel found in my dad and stepmom's garden.

The object contains the five obligatory types of property and the two optionals; nested object and array of objects.

And the properties are as follows:

- colour (String), colour of the insect hotel: set to light wood
- numberOfCompartments (Number), number of compartments the hotel contains
- minCelciusForInsectsToThrive (Number), the lowest celcius the insects need to live/thrive
- currentlyOccupied (Boolean), describes whether the hotel is currently in use
- materialsUsed (Array), lists the materials used to make the insect hotel
- location (Nested object), describes the location of the insect hotel

  The properties within the nested object:

  - placement (String), describes where on the shed the hotel is hung
  - closestNeighbour (String), describes closest item to the hotel
  - shedOwners (Array), the owners of the hotel

- typesOfInsects (Array of Objects), describes which types of insects are likely to visit and some properties each of them hold

  The properties within the array:

  - type (String), describes the type of insect
  - inRiskOfExtinction (Boolean), states whether the insect is at risk of extinction or not
  - numberOfSpecies (Number), states the number of species of said insect
  - usefulFor (String), describes what the insect is useful for on the planet

- temperature (Function), a function to calculate if your current temperature is high enough for the insects to thrive
  - To run function, type: insectHotel.temperature(); in the console of your browser, and insert the current temperature in your area in the parentheses and hit enter
