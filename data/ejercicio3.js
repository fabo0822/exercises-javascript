//Retornar la longitud del arreglo recibido por parámetro.
//return the length of the array received by parameter.

//created a funtion called returnArrayLength, I used .legth to knew the length of the array
//also i used the ternary operator because is more easy to read and write
function returnArrayLengrh (param){
    return(!Array.isArray(param) ?"the parameter isn't an array" : param.length);
}
// in this case I tried to used the arrow funtion but i saw that don't save time , I spend the same time
const ejemplo = (par)=>{
    return !Array.isArray(par) ? console.log("Es un arreglo") : par.length;
}

console.log(returnArrayLengrh([1,2,3,4,5]));
console.log(ejemplo([1,2,3,4,5]));