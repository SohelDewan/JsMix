const x = 'I am a hero of programming';
const sentence = 'a quick brown fox jumps over the lazy dog';
// const word = x.split(' ');
// console.log(word);
// const y = word.join(' ');
// console.log(typeof y);

// function capitalizedSentence(sentence){
//     let words = sentence.split(' ');
//     for(let i=0; i<words.length; i++){
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1) ;
//     }
//     return words.join(' ');
// }
// console.log(capitalizedSentence(sentence));
function capSent(sentence){
    let words = sentence.split(' ');
    for(let i= 0; i<words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
    return words.join(" ");
}
console.log(capSent(sentence));