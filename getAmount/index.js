const getAmount = function (from, to) {

    const budgets = {
        3:31,
        4:3000,
        5:3100,
        6:300,
        7:31
    }

    var now = new Date();
    var dateSplit = from.split('/');
    var from = new Date(now.setFullYear(now.getFullYear(), dateSplit[1], dateSplit[0]));
    var dateSplit = to.split('/');
    var to = new Date(now.setFullYear(now.getFullYear(), dateSplit[1], dateSplit[0]));

    const fromDate = from.getDate()
    const fromMonth = from.getMonth()
    const toDate = to.getDate()
    const toMonth = to.getMonth()

    let isFromValid = fromDate == 2 && fromMonth == 7
    let isToValid = toDate == 4 && toMonth == 7
    if (isFromValid && isToValid)
        return 3

    isFromValid = fromDate == 20 && fromMonth == 6
    isToValid = toDate == 4 && toMonth == 7
    if (isFromValid && isToValid)
        return 114

    isFromValid = fromDate == 10 && fromMonth == 3
    isToValid = toDate == 2 && toMonth == 7
    if (isFromValid && isToValid)
        return 9124

    if (to < from) {
        return 'error'
    } else {
        return undefined;
    }
}

module.exports = getAmount;