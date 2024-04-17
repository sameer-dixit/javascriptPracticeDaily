const name="sameer";
// console.log("hello this is "+name);
console.log(`hello this is ${name}`);
// another way of representing string as an object
const fname=new String("sam");
// original string will not be changed 
console.log(fname.toUpperCase());
console.log(fname.indexOf('i'));
// doesnot include last value and cuts the portion of the string and donot accept negative values for starting index
console.log(fname.substring(0,4));
// doesnot include last value and cuts the portion of the string and accept negative values for starting index
console.log(fname.slice(-1,4));


// some more complex inbilt methods

const Newname="  sameer-dixit  ";
// trim method removes whitespaces in the input given....
console.log(Newname);
console.log(Newname.trim());


// replace method
let url='https://hello@sameer%20dixit.com';
url.replace('%20','-')
console.log(url);
console.log(url.replace('%20','-'));

// split method 
// splits in the form of array based on given value..
console.log(url.split('%20'));

