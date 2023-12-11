/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length != str2.length)
  return false;

  let freqMap = {}
  for(let i = 0;i < str1.length;i++){
    let ch = str1[i];
    
    if(ch >= 'A' && ch <= 'Z')
      ch = ch.toLowerCase();
    if(freqMap[ch] > 0){
      freqMap[ch] += 1;
    }
    else{
      freqMap[ch] = 1;
    }
  }

  for(let i = 0;i < str2.length;i++){
    let ch = str2[i];
    if(ch >= 'A' && ch <= 'Z')
      ch = ch.toLowerCase();
    if(freqMap[ch] > 0){
      freqMap[ch]-=1;
    }
    else
    {
      return false
    }
  }
  return true;
}

module.exports = isAnagram;
