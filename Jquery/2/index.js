$('p').addClass('pera');
$('.btn').click(function () {
  //   $('p').toggle(1000);
  $('p').animate(
    {
      width: '40%',
      height: '100px',
      opacity: '0.8',
      fontSize: '22px',
      padding: '50px',
    },
    2000
  );
  //   $('p').slideToggle(2000);
  //   $('p').fadeToggle(2000);
  //   $('p').fadeOut(1000).fadeIn(1000);
});
