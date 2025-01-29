const returnLastElement = (param)=>{
    if (param.length === 0){
        return "the array is empty";
    }
    if (!Array.isArray(param)){
        return "the parameter isn't an array";
    }
   return param.at(-1); // I used 'at' for return the last element of the array
}



console.log(returnLastElement([1,2,3,4,5]));
console.log(returnLastElement(["Hola", "mundo"]));
console.log(returnLastElement([1]));
