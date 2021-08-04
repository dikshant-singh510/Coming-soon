let Days = document.getElementById('Days')
let Hrs = document.getElementById('Hrs')
let Min = document.getElementById('Min')
let Sec = document.getElementById('Sec')

let newYear = 2022

let eventDate = new Date(`Jan 1, ${newYear} 00:00:01`).getTime()

let countDown = setInterval(() => {

  let nowDate = new Date().getTime()
  let diff = eventDate - nowDate
  //Defining timing

  let days = Math.floor(diff / (24 * 60 * 60 * 1000))
  let hrs = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  let min = Math.floor(diff % (60 * 60 * 1000) / (60 * 1000))
  let sec = Math.floor((diff % (60 * 1000)) / 1000)

  if (diff < 1000) {
    clearInterval(countDown)
    alert('Happy New Year 2022 ')
  }

  Days.innerHTML = `${days}`
  Hrs.innerHTML = `${hrs}`
  Min.innerHTML = `${min}`
  Sec.innerHTML = `${sec}`

}, 500)