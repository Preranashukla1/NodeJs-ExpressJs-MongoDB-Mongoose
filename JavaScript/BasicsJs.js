// This is how we do comment in Javascript file.

let x, y, z;  // Variable declaration
var p = 123;
var p =456; //can be redeclared.
//let x = 456;   //can't be redeclared
//let can't be redeclared and var can be redeclared.

const s = 10; //compulsory to set the value. Can't be modified later

let xyz = 'xyz'; //declaration and assignment same time
xyz = 'abc'; //only assignment

x = 5;        // Variable assignment
y = 6;        
z = x + y;    // Arithmatic operation
console.log('x:',x,'y:',y,'z:',z);  // Printing in terminal

console.log('xyz=',xyz);


//Arithmetic Operators
let w = 5;
let v  = 5;
var p = 5;
var num  = 4;
console.log("\n");
console.log('w+v = ',w+v);  //Addition
console.log('w-v = ',w-v);  //Subtraction   
console.log('w*v = ',w*v);  //Multiplication
console.log('w/v = ',w/v);  //Division
console.log('p/num = ',p/num);  //Division
console.log('w**v = ',w**v); //Power
console.log('w%v',w%v);     //Module
console.log('p%num',p%num);     //Module
console.log('w++',w++);     //PostIncrement - first print then increment
console.log('v--',v--);     //PostDecrement
console.log('++w',++w);     //PreIncrement -- first increment then print
console.log('--v',--v);     //PreDecrement

//Comparison Operators
// Difference between == and ===
let a = 3;  // datatype =  integer
let b = '3'; //datatype = string 
var c = 3.0; 
console.log('a==b : ',a==b);    // Compares just value 
console.log('a===b : ',a===b);   // Compares values and type
console.log('a==c : ',a==c);
console.log('a===c : ',a===c);



// Array fundamentals
//let arr = [0,1,1,3,4,5,4,3,2,1,0];

let arr1 = [0,1,"2"];
console.log("\n Arr1 with integer and string",arr1);

let arr=[0,1,2,3,5,4];
console.log("\n",arr); //no error as js not datatype strict
console.log("\n Sorted array",arr.sort()); //returns array
console.log(arr.length);

//expected reverse --> [4,5,3,2,1,0]
console.log(arr.reverse()); //[ 5, 4, 3, 2, 1, 0 ] //this is because arr is sorted by arr.sort()

//it's recommended that arr.sort() to new arr so that original array not manipulated.

console.log([1,2] == [1,2]); //False. As two arrays can't be compared, as array 
//have compares pointer address. It's reference issue
console.log(arr[0] == arr[1]); //this works as it calls two different values not whole array as reference.
//Operators work with string, number and object. 
//To compare arrays can work with arr[index] like this.

const result = arr.filter((item)=>{   //item=0,item=1...     //internal iterations 
    return item>=4;
});



console.warn('\n Filtered value from array : ',result);

//String Mmethods
let str1 = 'Hello World';
console.log("String Length: ",str1.length);

console.log("");
//slice(startIndex, endIndex);
console.log(str1.slice(6,9)); //one value less than endindex. 6,7,8 not include 9th. Counts start from 0. 6,7,8
console.log(str1.slice(-8,-2)); // Negative indexing. Starts counting from end and counts start from -1. -8,-7,-6,-5,-4,-3

//substring(startIndex, endIndex);
console.log(str1.substring(6,9));
console.log(str1.substring(-2,4)); //negative index converts to 0. //0,1,2,3

//substr(startindex , count);  --> give starting index and then it will consider as much the steps as given count
console.log(str1.substr(6,2)); 
console.log(str1.substr(6)); //if count not mentioned then go uptill end of string

//function
let answer = multiply(2,3);

function multiply(a,b){

    if(a>2){
        console.log(a);
    }
    else if(a<5){
        console.log('a less than 5');
    }
    else{
        console.log('Else Condition');
    }

    switch(a){
        case 1:
            console.log('1');
            break;
        case 2:
            console.log('2');
            break;
        default:
            console.log(a);
            break;
    }

    //return a*b;
    //console.log(a*b);    
}

//console.log(answer);

console.log(a/b);

//Javascript and typescript
//Js datatypes loosely binded. TypeScript datatype declaration needed strictly.