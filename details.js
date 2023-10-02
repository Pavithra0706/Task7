// 3) Print the following details name, capital, flag using forEach function 


var countries = [
    { name: "India", capital: "New Delhi", flag: "🇮🇳" },
    { name: "USA", capital: "Washington, D.C.", flag: "🇺🇸" },
    { name: "France", capital: "Paris", flag: "🇫🇷" }
  ];
  
  countries.forEach(function(country) {
    console.log("Name: " + country.name);
    console.log("Capital: " + country.capital);
    console.log("Flag: " + country.flag);
    console.log(""); 
  });
  