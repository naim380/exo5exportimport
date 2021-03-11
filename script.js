//5-1 Import

import {hello,showError} from './functions.js';
//import {default as niceFonction} from './functions.js';

hello();
showError('naim');

//niceFonction();

// 5-2 Export
const [a, b] = [7, 9];
import {sum, sub, multiply, divide, pow} from './math.js'; // importation des fonctions de /math.js
console.log(sum(a,b)) // affichage de la somme
console.log(sub(a,b))
console.log(multiply(a,b))
console.log(divide(a,b))
console.log(pow(a,b))