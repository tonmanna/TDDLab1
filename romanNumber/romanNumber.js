function runner(number) {
    if (number == 1){
        return "I";
    }
    if (number > 1 && number < 4){        
        return "I".repeat(number);
    }
    if (number == 4){
        return "IV";
    }
    if (number == 5){
        return "V";
    }
    if (number > 5 && number < 9){
        return "V"+ "I".repeat(number-5);
    }
    if (number == 9){
        return "IX"
    }
    if (number == 10){
        return "X"
    }
}

module.exports = runner;