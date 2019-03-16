module.exports = function (str) {
    if (str == "IV") {
        return 4;
    }else if(str.indexOf('V')!== -1){
        str = str.split('V');
        return 5 + str[1].length;
    } else {
        return str.length;
    }
}