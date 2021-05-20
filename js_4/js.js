const str = '123 abc 456';

const regexp = /abc/;
// console.log(regexp.test(str));

const regexp1 = /acb/;
// console.log(regexp1.test(str));


// поиск совпадений

const str1 = 'abcGeek from Geekbrains';
const regexp2 = /\b[^\s]+\b/g;

// console.log(str1.match(regexp2));

// Замена подстрок

const str2 = 'This is string';
const regexp3 = /is/g;

// console.log(str2.replace(regexp3, '+'));

const str3 = 'Hi, I am Greeeeeeeeeeek geek from Geekbrainsk';
const regexp4 = /(g.+?k)/gi;

// console.log(str3.replace(regexp4, '+'));

console.log(str3.replace(regexp4, '+$1+'));

// ['geek' 'greek'].forEach((item) => {
//   `+${item}+`
// })
