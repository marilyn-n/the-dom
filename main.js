const images = document.querySelectorAll('img');

const toggleClass = function () {
  this.classList.toggle('clicked');
};

[...images].map(image => image.addEventListener('click', toggleClass));