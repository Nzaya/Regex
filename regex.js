//* Match Literal Strings
// let sentence = 'The dog chased the cat'
// let regex = /the/
// let result = regex.test(sentence)
// console.log(result);

// let myString = 'Hello, world'
// let myRegex = /Hello/
// let res = myRegex.test(myString)
// console.log(res);

//* Literal Strings with different possibilities
// let petString = 'James has a pet cat'
// let petRegex = /dog|cat|fish|bird/    //pipe | used for or (find dog or cat ....)
// let result = petRegex.test(petString)
// console.log(result);

//* Matching using flags
//? i flag = ignores case
// let myString = 'freeCodeCamp'
// let fccRegex = /freecodecamp/i
// let results = fccRegex.test(myString)

//* Extract Matches
//? use match()
// let extractStr = "Extract the word 'coding' from this string"
// let codingRegex = /coding/
// let result = extractStr.match(codingRegex)
// console.log(result);

//* Find more than the first match
//? use the g flag = will find every single occurence of what you're looking for
// let testStr = "Repeat, Reapeat, Repeat"
// let ourRegex = /Repeat/g
// let results = testStr.match(ourRegex)
// console.log(results);

// let twinkle = "Twinkle, twinkle, little, star"
// let twinkleRegex = /twinkle/gi
// let result = twinkle.match(twinkleRegex)
// console.log(result);

//* Matching anything with wildcard period
//? A period is a wildcard character(.)
// let humStr = "I'll hum a song"
// let hugStr = "Bear hug"
// let huRegex = /hu./  //this matches any word with the letter hu
// let result = humStr.match(huRegex)
// let results = hugStr.match(huRegex)
// console.log(result);
// console.log(results);

// let exampleStr = "Let's have fun with regular expressions!"
// let unRegex = /.un/ //matches any word that ends with un
// let result = exampleStr.match(unRegex)
// console.log(result);

//* Match single character with multiple possibilities
//in this [aiu] = the second letter that has to be matched has to have either a, i, u
//the first letter is b and the last letter is g
// let bgRegex = /b[aiu]g/  

// let quoteSample = "Beware of bugs i the above code; I have only proved it "
// let vowelRegex = /[aeiou]/ig
// let result = quoteSample.match(vowelRegex)
// console.log(result);

//* Match letters of the alphabet
// let quoteSample = "The quick brown fox jumps over the lazy dog."
// let aplhaRegex = /[a-z]/ig
// let result = quoteSample.match(aplhaRegex)
// console.log(result);

//* Match numbers and letters of the alphabet
// let quoteSample = "Blueberry 3.141592653s are delicious"
// let myRegex = /[2-6h-s]/ig //matches for numbers 2-6 and h-s
// let result = quoteSample.match(myRegex)
// console.log(result);

//* Match single Characters not specified
//! negeted character sets - set of characters that you do not want to match
//? use this (^) when you do not want to match characters.
// let quoteSample = "3 blind mice."
// let myRegex = /[^0-9aeiou]/ig //regex that matches everything except all numbers and vowels
// let result = quoteSample.match(myRegex)
// console.log(result);

//* Match if a character appears one or more times
//? To achieve this use the (+) character
// let diffSpelling = 'Mississippi'
// let myRegex = /s+/g //matching whenever s occurs 
// let result = diffSpelling.match(myRegex)
// console.log(result);

//* Matching characters that occur zero or more times
//? To acchieve this we use the (*) character
// let soccerWord = 'gooooooal!'
// let gPhrase = 'gut feeling'
// let oPhrase = 'over the moon'
// let goRegex = /go*/ //match g then o zero or more times

// let result = soccerWord.match(goRegex)
// let results = gPhrase.match(goRegex)
// let resultss = oPhrase.match(goRegex)

// console.log(result);
// console.log(results);
// console.log(resultss);


// let chewieQuote = 'Aaaaaaaaaaaaaaaaaaaarrrrgh!'
// let chewieRegex = /Aa*/
// let result = chewieQuote.match(chewieRegex)
// console.log(result);

//* Find characters with lazy matching
//? Greedy Match = finds the longest possible path of the string that fits the regex pattern that returns it as a match
//? Lazy Match = finds the smallest possible path of the string and returns that
//! Regex patterns defaults to greedy
// let string = 'titanic'
// let regex = /t[a-z]*i/ //first letter should be t [a-z]* one or more occurence of that and letter i at the end
// let result = string.match(regex)
// console.log(result);

//!lazy Match
//? use (?)
// let string = 'titanic'
// let regex = /t[a-z]*?i/ //first letter should be t [a-z]* one or more occurence of that and letter i at the end
// let result = string.match(regex)
// console.log(result);

//greedy
// let text = '<h1>Winter is coming</h1>'
// let myRegex = /<.*>/ //start with < ,zero or more occurences of any character, end with > 
// let results = text.match(myRegex)
// console.log(text.match(myRegex));

//lazy
let text = '<h1>Winter is coming</h1>'
let myRegex = /<.*?>/ //start with < ,zero or more occurences of any character, end with > 
let results = text.match(myRegex)
console.log(text.match(myRegex));

