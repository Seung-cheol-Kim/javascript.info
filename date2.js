function getWeekDay(date){
    let Day = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
    return Day[date.getDay()]
}

let date = new Date(2012, 0, 3);  // 2012년 1월 3일
console.log( getWeekDay(date) );        // "TU"가 출력되어야 합니다.