function getSecondsToday(){
  let date = new Date()
  let changehours = date.getHours() * 3600
  let changeminutes = date.getMinutes() * 60
  let todayseconds = date.getSeconds() + changehours + changeminutes
  return todayseconds
}

console.log(getSecondsToday())