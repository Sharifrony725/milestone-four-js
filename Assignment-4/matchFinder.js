function matchFinder(string1, string2) {
    if (typeof string1 === "string" || typeof string2 === "string") {
        if(string1.includes(string2)) {
            return true;
        }
        return false;
    }else{
        return "Invalid String";
    }
}
