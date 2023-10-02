// 5) Print the country which use US Dollars as currency
      var countries = [
    { name: "India", currency: "Indian Rupee" },
    { name: "USA", currency: "US Dollar" },
    { name: "Canada", currency: "Canadian Dollar" },
    { name: "Australia", currency: "Australian Dollar" },
    { name: "Mexico", currency: "Mexican Peso" }
  ];
  
  var countryUsingUSDollar = countries.find(function(country) {
    return country.currency === "US Dollar";
  });
  
  if (countryUsingUSDollar) {
    console.log("Country using US Dollar: " + countryUsingUSDollar.name);
  } else {
    console.log("No country found using US Dollar as currency.");
  }
