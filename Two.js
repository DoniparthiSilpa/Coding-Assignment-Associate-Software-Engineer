2.JavaScript


A. Reversing Every Word in a Sentence:

function reverseWords(sentence) {
  // Split the sentence into an array of words
  let words = sentence.split(" ");
  
  // Reverse each word in the array
  let reversedWords = words.map(word => {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  });
  
  // Join the reversed words back into a sentence
  let reversedSentence = reversedWords.join(" ");
  
  return reversedSentence;
}

// Example usage
let sentence = "This is a sunny day";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);


Output: `sihT si a ynnus yad`

B. Sorting an Array in Descending Order:

javascript
function sortDescending(array) {
  // Implement a sorting algorithm (e.g., bubble sort, selection sort, etc.)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  
  return array;
}

// Example usage
let numbers = [5, 2, 9, 1, 3];
let sortedNumbers = sortDescending(numbers);
console.log(sortedNumbers);


Output: [9, 5, 3, 2, 1]