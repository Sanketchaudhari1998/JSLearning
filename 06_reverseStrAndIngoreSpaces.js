console.log(`===== reverse string and ignore spaces =====`);
function reverseString(str) {
    let reverse = ""
    for (let index = str.length - 1; index >=0; index--) {
        const char = str.charAt(index)
        if (char != " ") {
            reverse=reverse.concat(char)
        }
        
    }
    console.log(`${reverse}`);
}

reverseString("Hard work always pays back")
reverseString("Soon I will be Angular IT Champ")