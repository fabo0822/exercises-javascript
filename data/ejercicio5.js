function addItem(arreglo =[], element=""){
    if (!validarArreglo(arreglo)){
    return 'El parámetro debe ser un arreglo';
}
return arreglo.concat(element);
}

const validarArreglo = (arreglo) => {
    return(Array.isArray(arreglo));
        
}    

console.log(addItem([1,2,3,4,5],"hola"));
console.log(addItem("hola"));
console.log(addItem("hola","hola"));
console.log(addItem([1,2,3,4,5]));