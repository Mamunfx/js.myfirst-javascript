/* Note for converting data types to Number :
   "33" => 33 ;
   "33abc" => NaN ;
   "mamun" => NaN ;
   true => 1 ;
   undefined => NaN;

   For Boolean converstion :
   1 => true ; 0 => false ;
   "Mamun" => true ; 
   "" => false ;

   For String converstion :
   33 => "33"
*/

let score = "123abc" ; // if we see typeof (score) it will show this is a String ;
let valueInNumber = Number(score)  // now if we see typeof(valueInString) it will register the value as Number for itself from String ;
// console.log(typeof valueInstring);

console.log(typeof valueInNumber) // funfact : in this line typeof(valueInNumber) will return valuInNumber is a Number data type even though it is not  ;
console.log(valueInNumber) // But when we command to show us the value of valueInNumber it will return us NotaNumber = Nan ;

let score2 = null
let valueInNumber2 = Number(score2)
console.log(valueInNumber2) //if we try to convert null to number it will show us value=0 ;

let score3 = true
let valueInNumber3 = Number(score3)
console.log(valueInNumber3) //if we try to convert boolean to number it will return either 0 or 1 ;