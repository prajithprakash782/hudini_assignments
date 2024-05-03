// Question 1: Write a function that calculates the sum of odd numbers greater than 10 and less than 30. Print the sum at the end.

function calculatSumandAverage(){
    let sum=0
    for (i=10;i<30;i++){
        if(i%2!=0){
      
                sum+=i
            }
            
        
        }
        
        return sum
    }
console.log(calculatSumandAverage())


// Question 2: Write a function that takes a number between 1-20 and prints the multiplication table of the same. Each entry should be in the format `2x1=2`

function multi(){
    let mul=0
    
    for(i=1;i<10;i++){
        mul*=i
    }
}

// Question 3: Create a function that receives an array of numbers and returns an array containing only the positive numbers

// Question 4: Write a function that finds the maximum number in an array of numbers and prints it.

// Question 5: Write a program that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".