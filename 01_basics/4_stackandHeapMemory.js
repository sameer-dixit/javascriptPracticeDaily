// stack (primitive types )
// copy value will be shared so when changes made is it can easilyb change and other variable remains the old 
let name="sameer"
let aname=name;
aname="dixit"
console.log(name);
console.log(aname);



// heap(non primitive)
// reference will be shared when one variable value is assigned to other variable so the data inside are 
// referingb same value so the data will be changed for both 

let user={
    email:"hello@gmail.com",
    upi:"user@ybl"
}

let auser=user;
// auser={
//     fullname:"sameer"
// }
auser.email="auser@.com";
console.log(user);
console.log(auser);