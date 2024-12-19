//question 1
//returns [1,2,3,4]

//Question 2 
//returns ['referee]

//Question 3
//map m will be ([1,2,3], false)

function hasDuplicate(arr){
    const dupeCheckSet = new Set(arr)
    if(dupeCheckSet.size < arr.length){
        return true
    }else{
        return false
    }
}



//I didn't copy the solution but i looked at it and tryed to replicate it off those ideas

function isVowel(letter){
    let vowels = 'aeiou'
    if(vowels.includes(letter)){
        return true
    }
}

function vowelCount(str){
    let lowerCaseString = str.toLowerCase()
    const vowelMap = new Map()
    for(let character of lowerCaseString){
        if(isVowel(character) == true){
            if(vowelMap.has(character)){
                vowelMap.set(character, vowelMap.get(character) + 1)
            }else if(!vowelMap.has(character)){
                vowelMap.set(character, 1)
            }else{
                console.log(`Error with this character: ${character}`)
            }
        }
    }
    return vowelMap
}