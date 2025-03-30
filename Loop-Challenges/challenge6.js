// Write a 'for' loop that lists all the cities in the array '["Paris", "New York", "Tokyo", "London"]' and stores each city in a new aaray named 'cityList'.

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = []

for (let c = 0; c < cities.length; c++) {
    const myCity = cities[c];
    cityList.push(myCity);
}

console.log(cityList);