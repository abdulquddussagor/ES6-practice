//spread operator,concatenate multiple arrays,array max:
const ages = [12,14,16];
const ages1 = [15,16,22];
const ages2 = [25,30,32];
//const allAges=ages.concat(ages1).concat([5]).concat(ages2);
//console.log(allAges);

//ES6(spread operator):
const allAges=[...ages,...ages1,5,...ages2];
console.log(allAges);

const sagor=1000;
const silviya=500;
const samrin=300;
const max=Math.max(sagor,samrin,silviya);
console.log(max);

const takaPoisha=[600,300,200];
const max1=Math.max(...takaPoisha);
console.log(max1);
