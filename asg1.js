// 1. Calculate Average
// Objective: Write a function that takes an array of numbers and returns the average. Use loops and basic arithmetic.
// Function signature:

// Psuedo Code:
// calculateAverage function takes the numbers in an array and returns the sum of the numbers in an array
//Initialize a variable called sum to 0
//Use for loop for travesing across the numbers in the array
//Add each number in an array and assign it to the sum variable
//after the loop finishes assign the (sum / length) to average variable  and return average

function calculateAverage(numbers) {
//Initialize sum to 0
    let sum=0
    for(i=0;i<numbers.length;i++){
        //adding each number in an array to sum variable
        sum+=numbers[i]
        
    }
    average=sum/numbers.length
    return average
    
}

// Example usage:
console.log(calculateAverage([10, 20, 30, 40, 50])); // Expected output: 30

// 2. Check Age
// Write a function that takes an age and prints whether the person is a minor, a young adult, or an adult.
// Use conditional statements.
// Function signature:
function checkAge(age) {
    // Write your code here to determine and print if the age corresponds to a minor, a young adult, or an adult.
    if(age<18){
        console.log("minor");
    }
    else if(age<=25){
        console.log("young adult");
    }
    else{
        console.log("adult");
    }
}

// Example usage:
checkAge(25); // Possible output: young adult

// 3. Reverse String
// Objective: Create a function that reverses a string. This will demonstrate basic string manipulation and for loops.
// Function signature:
function reverseString(str) {
    // Write your code here to reverse and return the string.
    rev=""
    for(let i of str){
        rev=i+rev
    }
    return rev
}

// Example usage:
console.log(reverseString("hello")); // Expected output: "olleh"

// 4. Find Largest Number
// Objective: Write a function that takes an array of numbers and returns the largest number.
// Use loops and conditional statements to solve the problem.
// Function signature:
function findLargestNumber(numbers) {
    // Write your code here to find and return the largest number in the array.
    larg=0
    for(i=0;i<numbers.length;i++){
        if(larg<numbers[i]){
            larg=numbers[i]
        }
        
        
    }
    return larg
}

// Example usage:
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Expected output: 50

// 5. Simple Counter
// Create an object that acts as a counter with methods to add, subtract, and reset the count.
// Demonstrate object methods and the use of this.
// Object definition:
const counter = {
    count: 0,
    add: function(){
        this.count += 1
    },
    subtract: function(){
        this.count -= 1
    },
    reset:function(){
        this.count = 0
    },
    display:function(){
        console.log(this.count)
    }


};

// Example usage:
counter.add();
counter.add();
counter.display();  // Output: 2
counter.subtract();
counter.display();  // Output: 1
counter.reset();
counter.display();  // Output: 0