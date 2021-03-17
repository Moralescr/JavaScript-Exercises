
let num = prompt('Introduce un número');

for(let i = 1; i <= num; i++){

    if(i % 2 === 0){
        console .log(`El número ${i} es par`);
    } else{
        console.log(`El número ${i} es impar`);
    }
}