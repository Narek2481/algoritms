const arr_binary_search = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let count_binary_search = 0;
function binary_search(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        count_binary_search++;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
        }
        if(item < array[middle]){
            end = middle-1;
        }else{
            start = middle+1;
        }
    }
    return position;
}

console.log(binary_search(arr_binary_search,10)+"  binary_search.js");
console.log(count_binary_search+"  binary_search.js");