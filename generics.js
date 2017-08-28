function genericFunc(arguments) {
    let arrayOfT = [];
    arrayOfT.push(arguments);
    return arrayOfT;
}
let arrayFromString = genericFunc('hello');
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0]);
let arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0]);
//# sourceMappingURL=generics.js.map