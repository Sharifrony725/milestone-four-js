function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Array is empty!";
    }else{
        let Sum = 0;
        for(let i = 0; i < changeArray.length; i++){
            Sum += changeArray[i];
        }
         if(Sum >= totalDue){
            return true;
         }else{
            return false;
         }
    }
}
