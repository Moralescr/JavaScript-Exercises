
let input = prompt('Escribe una palabra');

esPalindromo(input);

function esPalindromo(parm)
{
    let word = parm.toLowerCase();
    let response = word.split("").reverse().toString().replace(/,/g, "");
    
    if (word === response)
    {
        alert('Es palíndromo');
    } 
    else
    {
        alert('No es palíndromo');
    }
}


