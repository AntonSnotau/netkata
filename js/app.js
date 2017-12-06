$(document).ready(function() {
  const button = document.querySelector('.myButton');
  let a = 0;
  const quotes = $('.main-section-quotes li');
  quotes[a].classList.add('visible');

  button.addEventListener('click', function() {
    quotes[a].classList.remove('visible');
    a++;
    a = a >= quotes.length ? 0 : a;
    quotes[a].classList.add('visible');
  });
});
