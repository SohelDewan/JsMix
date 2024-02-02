const statement = 'I am a hard working person';
let reversedStatement = statement.split(' ').reverse().join(' ');
// const reversedStatement = statement.split(' ').reverse().join(' ');
console.log(reversedStatement); // 'person working hard a am I'

/*
Here, we first initialize the statement variable with the input sentence. Then, we split the sentence into an array of words using the split() method with a space as the separator. We then reverse the order of the words in the array using the reverse() method. Finally, we join the words back together into a string using the join() method with a space as the separator. The resulting string is the reversed sentence.
*/
