function filterRange(arr, a, b){
    arr.forEach((item, index) => {
        if(item > b || item < a){
            arr.splice(index, 1)
        }    
    })
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(arr)