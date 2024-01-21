function hasUniqueChars(word) {
    let result = '';
    for(let i = 0; i < word.length; i++) {
        const unique = word[i];
        if(result.includes(unique)) { 
            return false;
        }
            result += unique;
        }
        return true;
    }
console.log(hasUniqueChars('Monday'));
console.log(hasUniqueChars('Moonday'));

//Runtime = O(n)