document.querySelector('button').addEventListener('click', function () {
  const day = document.querySelector('.day').value
  const age = document.querySelector('.age').value
  if ((day === 'thursday' || day === 'tuesday') || (age > 12 && age < 21)) {
    alert('You get a discount!')
  } else {
    alert('You do not get a discount')
  }
})
