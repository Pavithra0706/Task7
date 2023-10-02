// 1) Get all the countries from Asia continent /region using Filter function


var countries = [
    { name: "India", continent: "Asia", region: "Southern Asia" },
    { name: "China", continent: "Asia", region: "Eastern Asia" },
    { name: "USA", continent: "North America", region: "North America" },
    { name: "Brazil", continent: "South America", region: "South America" },
    { name: "Russia", continent: "Europe", region: "Eastern Europe" }
  ];
  
  var asianCountries = countries.filter(function(country) {
    return country.continent === "Asia" || country.region === "Asia";
  });
  
  console.log(asianCountries);
  