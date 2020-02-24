var numbers = [8,24,20,5,13,3,1,12,11,24,8,24,20,4,5,23,24,23,21,2,19,3,21,2,14,17,21,5,7,10,20,11,0,5,18,2,13,11,14,3,20,1,23,6,21,10,14,0,15,20];

const duplicateInArray = (arr) => {
    //use hash to find how many occurances in the array
    let map = {};
    let result = [];

    for(let i = 0; i < arr.length; i++){
        //if prop of the value doesnt exist
        if(!map[arr[i]]){
            //initialize the prop with the value 0
            map[arr[i]] = 0;
        }
        //add prop value 1 to increment how many times it has occured
        map[arr[i]] += 1;
    }

    for(let prop in map) {
        //if prop has occured multiple times
        if(map[prop] >= 2){
            //occupy the resulting array
            result.push(prop);
        }
    }

    return result;
}

//logs arrays of the numbers with duplicates
console.log(duplicateInArray(numbers));

//logs duplicate values
duplicateInArray(numbers).forEach(e => {
    console.log(e);
})