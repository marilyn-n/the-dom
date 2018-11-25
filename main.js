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


// do the same for more buttons and images when you click over them