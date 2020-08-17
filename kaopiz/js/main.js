function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        let inc = Math.ceil(finalNumber / (duration / 17))
        if (currentNumber + inc > finalNumber) {
          currentNumber = finalNumber
          clearInterval(interval)
        } else {
          currentNumber += inc
        }
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(138, 2000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('project-count').innerText = formattedNumber
    })
    
    animateNumber(55, 5000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('client-count').innerText = formattedNumber
    })
    
    animateNumber(167, 2000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('employee-count').innerText = formattedNumber
    })

    animateNumber(65, 5000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('evaluation-count').innerText = formattedNumber
      })
  })