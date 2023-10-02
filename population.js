// 2) Get all the countries with a population of less than 2 lakhs using Filter function

var countries = [
    { name: "USA", population: 30000 },
    { name: "India", population: 1380000 },
    { name: "China", population: 1404000 },
    { name: "Brazil", population: 211000 },
    { name: "Russia", population: 146000 }
  ];
  
  var SmallPopulation = countries.filter(function(country) {
    return country.population < 200000; 
  });
  
  console.log(SmallPopulation);
  