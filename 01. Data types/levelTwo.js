// console.log(typeof Number('10') == typeof 10);

// console.log(Math.ceil(parseFloat('9.8')));

// console.log('python'.includes('on') && 'jargon'.includes('on'));

// console.log(Math.ceil(Math.random() * 100));

const string = 'javascript';
// console.log(string[Math.floor(Math.random() * (string.length - 1))]);

// console.log(
//   `${1}\t${1}\t${1}\t${1}\t${1}\n${2}\t${1}\t${2}\t${4}\t${8}\n${3}\t${1}\t${3}\t${9}\t${27}\n${4}\t${1}\t${4}\t${16}\t${64}\n${5}\t${1}\t${5}\t${25}\t${125}\t`
// );

const sentence =
  'You cannot end a sentence with because because because is a conjunction';

console.log(
  sentence.slice(sentence.indexOf('because'), sentence.indexOf('because') + 23)
);
