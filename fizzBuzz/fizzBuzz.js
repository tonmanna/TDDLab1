let fizBuzz = (number) => {
    if (number == 0) {
        return 0;
    }

    var result = number
    if (number % 3 == 0) {
        result = "Fizz";
    }
    
    if (number % 5 == 0) {
        if (typeof result === "string") {
            result += " Buzz";
        } else if (typeof result === "number") {
            result = "Buzz"
        }
    }

    return result;
}


for (i = 0; i <= 35; i++) {
    console.log("[", fizBuzz(i), "]")
}