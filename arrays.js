// Find the last element of the following arrays.
const arr1 = [3,7,34,90,12]
const lastElement=arr1[arr1.length -1];
console.log(lastElement)

const arr2 = [true, "green", "where",12,56]
const last=arr2[arr2.length -1];
console.log(last)


// Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.toString());


// Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort(function(a,b){
    return(a-b)
}) 
console.log(arr3)
// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];

let uniqueArr=[];
arr.forEach(function(arr){
    if (!uniqueArr.includes(arr)){
        uniqueArr.push(arr);
    }
    
});
console.log(uniqueArr);

// Write a JS script to search for the following word in the array.
// 4
// If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4, 23];
const includeFour=arr5.includes(4);
console.log(includeFour)

// Write a JS script to sort the following string
// let word = "lufituaeb"
let word = "lufituaeb"

let word2 = []
for (let i = 0, n = word.length; i < n; i++) {
    word2.push(word[i])
}
sortedWord2 = word2.sort()
sortedWord = sortedWord2.join('')
console.log(sortedWord)



   


