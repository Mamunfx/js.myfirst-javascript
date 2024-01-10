
//            Memory:

// Stack (premitive datatype) and Heap (Non-premitive) :

// Stack Memory :
let firstId = "something@gmail.com"
let secondId= firstId 

secondId = "YEHE boi !"

console.log(firstId);
console.log(secondId); 
// this is the perfect example of stack memory . if we change data of a premitive datatype it will not change the original value of that variable but will return the second variable with the new data ;

// Heap Memory :

let user1 = {
    Email: "Mamun@gmail.com" ,
    UPI: "something" 
}
let user2 = user1 

user2.Email= "ALi@gmail.com"

console.log(user1.Email);
console.log(user2.Email);
//In this case we can see its directly replace the previous value and show us the new value in both placee ;