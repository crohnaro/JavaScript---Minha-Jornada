let counter = 0

    const counterHtml = document.querySelector('#counter')
    const btnDecrease = document.querySelector('#btn-decrease')
    const btnIncrease = document.querySelector('#btn-increase')

    btnDecrease.onclick = function() {
      counter-- 
      counterHtml.innerText = counter
    }

    btnIncrease.onclick = function() {      
      counter++ 
      counterHtml.innerText = counter
    }