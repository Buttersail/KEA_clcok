setInterval(() => {
  currentTime()
}, 1000)

export function currentTime() {
  let time = new Date() //Read up and fully understand how this behaves/works
  let dayName = time.getDay()
  let month = time.getMonth()
  let year = time.getFullYear()
  let date = time.getDate()
  let hour = time.getHours()
  let min = time.getMinutes()
  let sec = time.getSeconds()

  //Formatting
  if (hour < 10) {
    hour = '0' + hour.toString()
  }

  if (min < 10) {
    min = '0' + min.toString()
  }

  if (sec < 10) {
    sec = '0' + sec.toString()
  }

  //Current time
  let currentTime = hour + ':' + min + ':' + sec

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let presentDay = week[dayName] + ', ' + months[month] + ' ' + date + ', ' + year

  const clock = document.getElementById('time')
  const dayIntro = document.getElementById('dayIntro')

  clock.innerHTML = currentTime
  dayIntro.innerHTML = presentDay
}

currentTime()
