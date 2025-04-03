// Write a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it with the argument '"earl grey"'. Return the result of calling 'makeTea'.

function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction){
   return teaFunction('earl grey')
}

let order = processTeaOrder(makeTea)
console.log(order);