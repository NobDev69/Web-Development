$('p').after('<b>Hello World</b>');
$('a').attr('href', 'https://www.facebook.com/');
$('a').css({ 'font-size': '22px', color: 'Blue', 'text-decoration': 'none' });
$('h2').addClass('style1');
$('button').click(function () {
  $('p').text('Hello ki bala aso...');
});

$('button').click(function () {
  $('p').toggleClass('style2');
});
