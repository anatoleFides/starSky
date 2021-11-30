document.body.style.background = '#009'

document.body.addEventListener('star', callback)

let ms = Date.now()

let interval = Math.random() * 4000

function callback (event) {
  const star = document.body
      .appendChild(document.createElement('p'))
  star.innerText = '*'
  star.style = `
    color: #fff;
    font-size: ${Math.max(Math.random() * 10, 5)}px;
    position: fixed;
    top: ${Math.random() * window.innerHeight};
    left: ${Math.random() * window.innerWidth};
  `
}

function timeCheck () {
  if (Date.now() - ms > interval) {
    ms = Date.now()
    document.body.dispatchEvent(new Event('star'))
    interval = Math.random() * 3000
  }
  requestAnimationFrame(timeCheck)
}

timeCheck()