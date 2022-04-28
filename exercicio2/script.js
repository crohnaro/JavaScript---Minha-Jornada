let counter = 0

    const counterHtml = document.querySelector('#counter')
    const btnDecrease = document.querySelector('#btn-decrease')
    const btnIncrease = document.querySelector('#btn-increase')

    let increaseInterval
    let decreaseInterval

    btnDecrease.onclick = function() {
      clearInterval(increaseInterval)

      btnDecrease.classList.add('active-red')
      btnIncrease.classList.remove('active-green')

      decreaseInterval = setInterval(function() {
        counter-- 
        counterHtml.innerText = counter
      }, 100)
    }

    btnIncrease.onclick = function(evento) {
      clearInterval(decreaseInterval)

      btnIncrease.classList.add('active-green')
      btnDecrease.classList.remove('active-red')
      
      increaseInterval = setInterval(function() {
        counter++ 
        counterHtml.innerText = counter
      }, 100)
    }