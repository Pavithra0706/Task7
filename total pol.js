// 4) Print the total population of countries using reduce function


var countries = [
    { name: "India", population: 1380000 },
    { name: "USA", population: 331000 },
    { name: "China", population: 1444216 },
    { name: "Brazil", population: 211049 },
    { name: "Russia", population: 145912 }
  ];
  
  var totalPopulation = countries.reduce(function(accumulator, country) {
    return accumulator + country.population;
  }, 0);
  
  console.log("Total Population: " + totalPopulation);
  