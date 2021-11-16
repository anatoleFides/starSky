document.body.style.background = 'rgba(0, 0, 0, 0.8)'

const button = document.body
  .appendChild(document.createElement('button'))
button.innerText = 'star'

button.onclick = function (event) {
    document.body.dispatchEvent(new Event('star-added'))
}
document.body.addEventListener(('star-added'), function (event) {
  const topX = Math.random() * window.innerWidth
  const leftY = Math.random() * window.innerHeight
  const size = Math.max(Math.random() * 10, 5)
  const time = Math.random() * 20000
  const star = document.body
    .appendChild(document.createElement('p'))
  star.style = `
    position:fixed;
    top:${topX}px;
    left:${leftY}px;
    font-size:${size}px;
    color:#ff0;
  `
  star.innerText = '*'
})