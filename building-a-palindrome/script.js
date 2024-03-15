//creamoos una funcion CheckPalindrome


function checkPalindrome() {
    
    //Declaramos la variable document.getElementById('text-input'): 
    //código busca en el documento HTML un elemento que tenga el ID text-input. El método getElementById busca un elemento HTML por su identificador único.
    //.value: Una vez que se encuentra el elemento con el ID text-input, .value se utiliza para obtener el valor actual de ese elemento.
    
    let plinput = document.getElementById('text-input').value;
    //Declaramos la variable result
    let result = document.getElementById('result');

    // convierte en minuscula el texto ingresado, Este es un método de cadena de JavaScript que utiliza expresiones regulares para eliminar todos
    //los caracteres que no sean letras (mayúsculas o minúsculas) o números. La expresión regular /[^A-Za-z0-9]/g coincide con cualquier carácter que no sea 
       // una letra (mayúscula o minúscula) o un número, y lo reemplaza con una cadena vacía (''). El modificador g indica que la búsqueda debe hacerse globalmente en toda la cadena, no solo en la primera coincidencia.
    //.split(''): Este método divide la cadena en un array de caracteres individuales. Sin argumentos, divide la cadena en cada carácter.
//.reverse(): Este método invierte el orden de los elementos en el array. En este caso, invierte el orden de los caracteres en la cadena.
//.join(''): Finalmente, este método une los elementos del array de nuevo en una sola cadena. Sin argumentos, une los elementos
    //utilizando una cadena vacía como separador, lo que significa que simplemente concatena los caracteres en la cadena sin ningún espacio o separador entre ellos.
    let reverse = plinput.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('').reverse().join('');

    if (plinput === '') {
        alert('Please input a value');
    } else if (plinput.toLowerCase().replace(/[^A-Za-z0-9]/g, '') === reverse) {
        result.style.display = 'block';
        result.innerHTML = `${plinput} is a Palindrome`;
        document.getElementById('text-input').value = '';
    } else {
        result.style.display = 'block';
        result.innerHTML = `${plinput} is not a Palindrome`;
        document.getElementById('text-input').value = '';
    }
}
