// Write a 'for' loop that loops through the array '["green tea", "black tea", "chai", "oolong tea"]'and stops the loop when it finds "chai".

let teas = ["green tea", "black tea", "chai", "oolong tea"]
let selecetedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === "chai") {
        break
    }
    selecetedTeas.push(teas[i]);
}

console.log(selecetedTeas);