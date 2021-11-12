const ages = [12, 14, 16, 12, 16];
const seniors = [22, 23, 24, 25, 26];
const old = [34, 35, 56, 77, 77];

const allAges = ages.concat(seniors).concat(99).concat(old); // Old system

//const allAges2 = [ages, seniors, 100, old]; //
const allAges2 = [...ages, ...seniors, 100, ...old];
//console.log(allAges2);

const taufiq = 500;
const tazwar = 600;
const ridu = 700;
const arr = [500, 700, 600];
//const maximum = Math.max(taufiq, tazwar, ridu);
//const maximum = Math.max(arr); //showing NaN in output by this line
const maximum = Math.max(...arr); // we need to use this line (...)

console.log(maximum);
