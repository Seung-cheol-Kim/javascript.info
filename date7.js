function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // formatting
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return '현재';
  } else if (diffMin < 1) {
    return `${diffSec} 초 전`
  } else if (diffHour < 1) {
    return `${diffMin} 분 전`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}
console.log( formatDate(new Date(new Date - 1)) ); // "현재"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30초 전"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5분 전"

// 어제를 나타내는 날짜를 "일.월.연 시:분" 포맷으로 출력
console.log( formatDate(new Date(new Date - 86400 * 1000)) );