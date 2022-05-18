function getLastDay(){
    var today = new Date();
    var lastDay = new Date(today.getFullYear(), today.getMonth(), today.getDate()-1);
    return lastDay;
}
function getLastWeek(){
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(),today.getMonth(), today.getDate()-7);
    return lastWeek;
}

function getLastMonth(){
    var today = new Date();
    var lastMonth = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
    return lastMonth;
}

module.exports ={
    getLastDay,
    getLastWeek,
    getLastMonth
}