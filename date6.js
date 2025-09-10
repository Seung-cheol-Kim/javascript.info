function getSecondsToTomorrow(){
  let date = new Date()
  let changehours = date.getHours() * 3600
  let changeminutes = date.getMinutes() * 60
  let todayseconds = date.getSeconds() + changehours + changeminutes
  return 24 * 3600 - todayseconds
}

console.log(getSecondsToTomorrow())