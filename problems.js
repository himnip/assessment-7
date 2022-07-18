//sum zero


function findSumZero(array) {
    let array = [45, -23, 13, 0, 7, 17]
    let value = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] + array [j] === 0) {
                    value = true;
                }
            }
        }
    }
}

 console.log(value)



//unique characters 
function hasUniqueCharacters(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
        hasUniqueCharacters.add(word[i])
    }
    return hasUniqueCharacters.size === word.length
}

//pangram sentence 
function findPangram(string) {
    mark = new Array(26).fill(false);
    let index;
    for (let i = 0; i < string.length; i++) {
        if ('A' <= str[i] && str[i] <= 'Z')
        index = str.charCodeAt(i) - 'A' .charCodeAt(0);
        else if ('a' <= str[i] && str[i] <= 'z')
        index = str.charCodeAt(i) - 'a' .charCodeAt(0);
        else continue;
        mark[index] = true;
    }

    for (let i = 0; i <= 25; i++)
        if (mark[i] == false)
            return false;

        return true;
    
}




//longest word

function findLongestWord(string) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");