let count = 0;
document.getElementById('text').addEventListener('keypress', function (event) {
  count++;
  let text = event.key;
  document.getElementById('demo').innerHTML = 'You have Pressed: ' + count;
});
