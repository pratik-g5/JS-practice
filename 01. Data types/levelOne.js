let challenge = '30 Days of Javascript';

// console.log(challenge + ': ' + challenge.length);

let upperCase = challenge.toUpperCase();
// console.log(upperCase);

let lowerCase = challenge.toLowerCase();
// console.log(lowerCase);

let firstWord = challenge.slice(0, 3);
let rest = challenge.slice(3);

// console.log(firstWord);
// console.log(rest);

// console.log(challenge.includes('Script'));

// console.log(challenge.split(' '));

const replacement = challenge.replace('Javascript', 'Python');
// console.log(replacement);

// console.log(challenge[15]);

// console.log(challenge.indexOf('J'));

// console.log(challenge.indexOf('a') + ' ' + challenge.lastIndexOf('a'));

// console.log(' 30 Days Of JavaScript '.trim());

// console.log(challenge.startsWith('30'));

// console.log(challenge.match('a'));

console.log(challenge.repeat(2));
