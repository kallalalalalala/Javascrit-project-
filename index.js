
// fonction de reverse de string 

function reverse(mot)
{
    const  reverseWord =  mot.split('').reverse().join('');
    console.log(`lerever de ${mot} est ${reverseWord}`);
    return reverseWord;
}
reverse("Tidiane")


// Fonction de count 

function compter(word){
    return word.length ;
}
console.log(compter("Tidiane"));

// Fonction de capitalize 
function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize("Tidiane"));



// Fonction  max and min values 

function maxMin(array){
    return `Le maximum est ${Math.max(...array)}, et le minimum est ${Math.min(...array)}`;
}
console.log(maxMin([1, 2, 3, 4, 5]));

// fonction of arrays sum 

function somme(array){
    return `La somme des éléments de l'array est ${array.reduce((a, b) => a + b, 0)}`;
}
console.log(somme([1, 2, 3, 4, 5]));
// fonction Filter Array

function filterArray(array){
    return `Les éléments pairs de l'array sont : ${array.filter(num => num % 2 === 0)}`;
}
console.log(filterArray([1, 2, 3, 4, 5]));

// Fonction factoriel 

function factoriel(n){
    return n > 1? n * factoriel(n - 1) : 1;
}
console.log(factoriel(5));



//fonction verifiation si n est un nombre premier ou pas et afficher le resultat 

function isPrime(n) {
    if (n <= 1) {
        return `Veuillez entrer un nombre supperieur ${n} `;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
    return `Ce nombre ${n} n'est pas premier`;
        }
    }
    return `Ce nombre ${n} est un nombre premier`;
}
console.log(isPrime(0));

// fonction Fibonacci Sequence

function fibonacci(n) {
    let [a, b] = [0, 1];
    console.log(a);
    for (let i = 1; i < n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
        console.log(b);
    }
}
console.log(fibonacci(10));


