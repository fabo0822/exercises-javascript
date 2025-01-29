function incrementOne(param){

    //I used  isArray to check if the parameter is an array
    if (!Array.isArray(param)){
        return "the parameter is not an array";
    }
    //I used .length to check if the array is empty
    if (param.length === 0){
        return 0;
    }
    // I used '.some' to check if some element is not a number also I used typeof to check if the element is a number
    if (param.some((element) => typeof element !== "number")){
        return "only numbers are allowed";
    }
    return param.map((element) => element + 1)
}


console.log(incrementOne([1, 2, 3, 4, 5]));
console.log(incrementOne(["Hola", "mundo"]));
console.log(incrementOne([1]));
console.log(incrementOne([]));
console.log(incrementOne("Hola mundo"));