document.body.style.background = 'rgba(0, 0, 0, 0.8)'
let counter = 0
function starSky () {
  const topX = Math.random() * window.innerWidth
  const leftY = Math.random() * window.innerHeight
  const size = Math.max(Math.random() * 10, 5)
  const time = Math.random() * 20000
  const star = document.createElement('p')
  star.style = `
    position:fixed;
    top:${topX}px;
    left:${leftY}px;
    font-size:${size}px;
    color:#ff0;
  `
  star.innerText = '*'
  setTimeout(() => document.body.appendChild(star), time)
  counter++ < 1000 && starSky()
}

starSky()