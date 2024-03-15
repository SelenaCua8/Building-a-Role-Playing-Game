

function checkPalindrome() {
    let plinput = document.getElementById('text-input').value;
    let result = document.getElementById('result');
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