const arr_quick_sort = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count_quick_sort = 0;
function quick_sort(array){
    if(array.length <= 1 ){
        return array;
    }
    let pivot_index = Math.floor(array.length/2);
    let pivot = array[pivot_index];
    let less = [];
    let greator  = [];
    for (let i = 0; i < array.length; i++) {
        count_quick_sort++;
        if(i === pivot_index){
            continue;
        }
        if(array[i] < pivot ){
            less.push(array[i])
        }else{
            greator.push(array[i]);
        }
    }
    return [...quick_sort(less),pivot,...quick_sort(greator)];
}

console.log(quick_sort(arr_quick_sort) + "  quick_sort.js");
console.log(count_quick_sort + "  quick_sort.js");
