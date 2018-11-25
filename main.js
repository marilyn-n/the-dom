const images = document.querySelectorAll('img');

const toggleClass = function () {
  this.classList.toggle('mouseover');
};

// const cb = function () {
//   this.classList.toggle('mouseover');
// };

[...images].map(image => image.addEventListener('mouseover', toggleClass));

// images.forEach(image => image.addEventListener('click', toggleClass));

// [...images].map(img => img.addEventListener('click', cb))


// do more examples with buttons and more images or lists

const buttons = document.querySelectorAll('button');

const fn = function () {
  this.classList.toggle('when-click');
};

[...buttons].map(button => button.addEventListener('click', fn));
