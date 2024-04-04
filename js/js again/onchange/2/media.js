let media = document.querySelector('video');
media.addEventListener('canplay', function () {
  console.log('canplay');
});
media.addEventListener('play', function () {
  console.log('play');
});
media.addEventListener('playing', function () {
  console.log('playing');
});
media.addEventListener('pause', function () {
  console.log('Pause');
});
media.addEventListener('ended', function () {
  console.log('Thank For Watching');
});
