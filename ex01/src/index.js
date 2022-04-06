var myPet = {
    species: "Pinc",
    name: "Misa",
    legs: 4,
    friends: ["Ana", "Svetlana"]
}

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };