const fnsd = document.getElementById('demo');

document.getElementById('checkBtn').addEventListener('click', function () {
  let txt = document.getElementById('checkTxt').value;

  try {
    if (txt < 10) {
      throw 'Input is too low';
    } else if (txt > 50) {
      throw 'Input is too High';
    }
  } catch (err) {
    alert(err);
  } finally {
    fnsd.innerHTML = 'Finished!!!...';
  }
});
