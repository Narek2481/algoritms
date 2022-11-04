const arr_selection_sort = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count_selection_sort = 0;

function selection_sort(array) {
    for (let i = 0; i < array.length; i++) {
        let index_min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[index_min]) {
                index_min = j;
            }
            count_selection_sort++;
        }
        let tmp = array[i];
        array[i] = array[index_min];
        array[index_min] = tmp;
    }
    return array;
}










console.log(arr_selection_sort.length + " array-length >> selection_sort.js")
console.log(selection_sort(arr_selection_sort) + "  selection_sort.js");
console.log(count_selection_sort + "  selection_sort.js");
