function sortMaker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[0] < 0 || arr[1] < 0){
            return "Invalid Input";
        }
        else if(arr[0] === arr[1]){
            return "Equal";
        } else if (arr[i] > 0) {
            arr.sort();
            return arr.reverse();
        }
    }   
}
