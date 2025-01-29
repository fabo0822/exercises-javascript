//create a function  called returnArray , I used length to check if the array is empty
//and used isArray to check if the parameter is an array

const returnArray= (param) => {
    if(param.length === 0) {return "El arreglo no puede estar vacio"}
    if(!Array.isArray(param)) {return  "El parámetro debe ser un arreglo"}
    return param[0];
}


console.log(returnArray([1,2]));
console.log(returnArray("hola"));
console.log(returnArray([]));