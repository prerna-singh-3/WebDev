// Use a 'for-of' loop to iterate through the array '["chai", "green tea", "herbal tea", "black tea"]' and skip '"herbal tea"'. Store the other teas in an array named 'prefferdTeas'

let teas = ["chai", "green tea", "herbal tea", "black tea"]
let prefferdTeas = []

for (const tea of teas) {
    if(tea === "herbal tea"){
        continue
    }
    prefferdTeas.push(tea)
}
console.log(prefferdTeas);
