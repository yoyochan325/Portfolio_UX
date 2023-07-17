let x;
x = 5;//assign value 5 to the variable x

let y = 10; //declare a varaible y and assign 10

let name = 'Yoyo Chan'; //assign string value to the variable
let isStudent = true; //assign a boolean value to the variable 

let school = 'UCL';

let introduction = `My name is ${name}. I study at ${school}`; 
//use backticks to include variables in a string

let message = "My name is " + name + " and I study at " + school + ".";
//use double quote and use the plus sign to 
//add variable in a string, namely concatenating variables in a string

//round down division
let dividend = 13;
let divisor = 3;
let result = Math.floor(dividend / divisor);
let modulo = dividend % divisor;
//modulo is the remainder, while round down is the integer in a division

let number = 25;
let squareRoot = Math.sqrt(number);

let number = 24;
let squareRoot = Math.sqrt(number);
let roundedSquareRoot= Math.round(squareRoot);

x == y // false, because == is a comparison operation indicating equality
x != y // true, because != is a comparison operation indicating inequality
x > y // x is strictly greater than y
x < y // x is strictly smaller than y
x >= y // x is greater than or equal to y
x <= y // x is smaller than or equal to y

const averageTemp = [];
averageTemp [0] = 5; 
averageTemp [1] = 7;
averageTemp [2] = 9;
averageTemp [3] = 11;
averageTemp [4] = 14;
averageTemp [5] = 16;
averageTemp [6] = 19;
averageTemp [7] = 19;
averageTemp [8] = 17;
averageTemp [9] = 13;
averageTemp [10] = 10;
averageTemp [11] = 7;
//const declares a variable whose value shouldn't be reassigned
//averageTemp.length gives the number of elements in an array. In this case, it gives us 12. 
//sentence.length gives the number of characters in a string, including puntuations and blank spaces. 

//for loop to return the entire array of average temperature
for (let i = 0; i < averageTemp.length; i++){
    console.log(averageTemp[i]);
}
averageTemp.slice(6,8); //the slice method will include the starting index and exclude the ending index

averageTemp.slice(2,6); 
averageTemp.slice(2,); 
//if I'd like to see the average tempertaure from Mar to Dec, 
//I can leave the ending index blank to capture the whole array
averageTemp.slice(0,6);

function count(word,letter) {
    let cnt = 0;
    for (let i = 0; i < word.length; i++){
        if (word[i] == letter){
            cnt += 1; 
        }
    }
}

// Object  - Dictionary
// key:value pair
let myObject = {name: 'InSon', school: 'umich', city: 'Ann Arbor'};
myObject.name // then we will see InSon
myObject.school // then we will see umich
myObject.city // then we will see Ann Arbor

Object.keys(myObject) // We now find all the keys (variable names) in an object
Object.values(myObject) // We now find all the values in an object
Object.entries(myObject) // We can see keys and values together

let moreData = {name: 'Yoyo', school: 'UCL', city: 'London'};

// We can use the array.push method to add one or more elements to the end of an array
averageTemp.push(13, 22, 44, 12, 9) // a long array with 13, 22, 44, 12, 9 at the end
// We can use the array.pop method to remove the last element of an array
// We can remove multiple elements from the last by pasting several array.pop() lines
averageTemp.pop()

// We can use the array.unshift method to add one or more elements to the beginning of an array
averageTemp.unshift(13, 22, 44, 12, 9) // a long array with 13, 22, 44, 12, 9 at the beginning
// We can use the array.shift method to remove the first element of an array
// We can remove multiple elements from the beginning by pasting several array.shift() lines
averageTemp.shift()

// We can use the array.includes method to check if it has certain value
averageTemp.includes(20) // it gives you a false because there is no correspending 
// month with a monthly average temperature 20
averageTemp.includes(19) // it gives you a true because July (corresponds to averageTemp[6]) 
// and August (corresponds to averageTemp[7]) have monthly average temperature 19

// How to find the index of an array given a value?
averageTemp.indexOf(19) // It returns the index at which the value locates
averageTemp.indexOf(1) // It returns -1 to indicate that none of the data shows the monthly average temperature 1

// We can get a reversed array using the array.reverse method
averageTemp.reverse()
// We can sort a sequence of array from the smallest to the largest using the array.sort(), comparing a-b
averageTemp.sort((a,b) => a - b)
// We can sort a sequence of array from the largest to the smallest using the array.sort(), comparing b-a
averageTemp.sort((a,b) => b - a)

// We can figure out all odd numbers in an array -- using the array.filter() method
averageTemp.filter((element) => element % 2 === 1)
// We can figure out all even numbers in an array
averageTemp.filter((element) => element % 2 === 0)

newTemp = [5, 12];
// Now we want to combine/merge two arrays. Use the array.concat() method. 
averageTemp.concat(newTemp)
// We will see both arrays combined together.