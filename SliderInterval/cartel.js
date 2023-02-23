window.addEventListener('load', function () {
  var images = [
    'imagenes/vinyarock.jpg',
    'imagenes/woodstock99.jpg',
    'imagenes/rockinrio.jpg',
    'imagenes/jazzfestival.jpg',
  ];

  var i = 0;

  function change() {
    setTimeout(function () {
      welcomepic.firstElementChild.style.opacity = '0';
    }, 1000);

    setTimeout(function () {
      i = (i + 1) % images.length;
      welcomepic.firstElementChild.src = images[i];
      updateDot();
    }, 2000);

    setTimeout(function () {
      welcomepic.firstElementChild.style.opacity = '1';
    }, 3250);
  }

  function updateDot() {
    var dots = dotContainer.children;
    for (let j = 0; j < dots.length; j++) {
      dots[j].classList.remove('active');
    }
    dots[i].classList.add('active');
  }

  welcomepic.firstElementChild.src = images[images.length - 1];

  var interval = setInterval(change, 10000);

  btns.firstElementChild.addEventListener('click', function () {
    clearInterval(interval);
    i = (i - 1 + images.length) % images.length;
    welcomepic.firstElementChild.src = images[i];
    updateDot();
    interval = setInterval(change, 10000);
  });

  btns.lastElementChild.addEventListener('click', function () {
    clearInterval(interval);
    i = (i + 1) % images.length;
    welcomepic.firstElementChild.src = images[i];
    updateDot();
    interval = setInterval(change, 10000);
  });
  var dotContainer = document.createElement('div');
  dotContainer.classList.add('dot-container');
  for (let j = 0; j < images.length; j++) {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
  }
  btns.appendChild(dotContainer);
  dotContainer.firstElementChild.classList.add('active');

  var gibsonI = document.querySelector('#gibsonInfo');
  gibsonI.style.opacity = '0';

  carrusel.children[0].addEventListener('mouseenter', function () {
    setTimeout(function () {
      gibsonI.style.opacity = '1';
    }, 1000);
  });
  carrusel.children[0].addEventListener('mouseout', function (event) {
    if (!gibsonI.contains(event.relatedTarget)) {
      setTimeout(function () {
        gibsonI.style.opacity = '0';
      }, 1000);
    }
  });
  carrusel.children[1].addEventListener('mouseenter', function () {});
});
