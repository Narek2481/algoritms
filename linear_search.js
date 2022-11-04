const arr_linear_search = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count_linear_search = 0;
function linear_search(array, item) {
    for (let i = 0; i < array.length; i++) {
        count_linear_search++;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linear_search(arr_linear_search,11)+"  linear_search.js");
console.log(count_linear_search+"  linear_search.js");