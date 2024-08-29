let canvas, rotation;
let x = 0,
  y = 0,
  r = 0;
let mx = 0,
  my = 0,
  mr = 0;
const speed = 0.08;

const loop = () => {
  mx += (x - mx) * speed;
  my += (y - my) * speed;
  mr += (r - mr) * speed;
  window.requestAnimationFrame(loop);
};

const mouseFunc = (e) => {
  (x = e.clientX - window.innerWidth / 2),
    (y = e.clientY - window.innerHeight / 2);
  background.style.transform = `translate3d(${mx / 500}px, ${my / 500}px)`;
  car.style.transform = `translate(${-(mx / 2)}px, ${-(my / 3)}px) rotateX(${
    x * 0.01
  }deg) rotateY(${y * 0.1}deg)`;
};
function BodyScrollDisAble() {
  document.body.style.overflow = 'hidden'; //스크롤 막음
}
let ww = screen.availWidth;
if (ww > 979) {
  window.onload = () => {
    BodyScrollDisAble();
    car = document.getElementById('rotation');
    background = document.getElementById('canvas');
    loop();
    window.addEventListener('mousemove', mouseFunc);
  };
} else {
  window.onload = () => {
    BodyScrollDisAble();
    car = document.getElementById('rotation');
    background = document.getElementById('canvas');
    loop();
    window.addEventListener('mousemove', mouseFunc);
  };
}
$(document).ready(function () {
  $('.women_box').hover(
    function () {
      $('#canvas,#rotation').clearQueue();
      $('.bg_video_wrap>video').fadeOut();
      $('#women_video').stop().fadeIn(500);
    },
    function () {
      $('.bg_video_wrap>video').fadeOut(500);
    }
  );
  $('.man_box').hover(
    function () {
      $('#canvas,#rotation').clearQueue();
      $('.bg_video_wrap>video').fadeOut();
      $('#man_video').stop().fadeIn(500);
    },
    function () {
      $('.bg_video_wrap>video').fadeOut(500);
    }
  );
  $('.kid_box').hover(
    function () {
      $('#canvas,#rotation').clearQueue();
      $('.bg_video_wrap>video').fadeOut();
      $('#kid_video').stop().fadeIn(500);
    },
    function () {
      $('.bg_video_wrap>video').fadeOut(500);
    }
  );
  $('.baby_box').hover(
    function () {
      $('#canvas,#rotation').clearQueue();
      $('.bg_video_wrap>video').fadeOut();
      $('#baby_video').stop().fadeIn(500);
    },
    function () {
      $('.bg_video_wrap>video').fadeOut(500);
    }
  );
  $('.sports_box').hover(
    function () {
      $('#canvas,#rotation').clearQueue();
      $('.bg_video_wrap>video').fadeOut();
      $('#sports_video').stop().fadeIn(500);
    },
    function () {
      $('.bg_video_wrap>video').fadeOut(500);
    }
  );
  $('.home_box').hover(
    function () {
      $('#canvas,#rotation').clearQueue();
      $('.bg_video_wrap>video').fadeOut();
      $('#home_video').stop().fadeIn(500);
    },
    function () {
      $('.bg_video_wrap>video').fadeOut(500);
    }
  );
}); //end

//  Initialize Swiper

var swiper = new Swiper('.mySwiper', {
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
});
var swiper2 = new Swiper('.mySwiper2', {
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ['-120%', 0, -500],
    },
    next: {
      shadow: true,
      translate: ['120%', 0, -500],
    },
  },
});
var swiper3 = new Swiper('.mySwiper3', {
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ['-20%', 0, -1],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
});
var swiper4 = new Swiper('.mySwiper4', {
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [180, 0, 0],
    },
    next: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [-180, 0, 0],
    },
  },
});
var swiper5 = new Swiper('.mySwiper5', {
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ['-125%', 0, -800],
      rotate: [0, 0, -90],
    },
    next: {
      shadow: true,
      translate: ['125%', 0, -800],
      rotate: [0, 0, 90],
    },
  },
});
var swiper6 = new Swiper('.mySwiper6', {
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      origin: 'left center',
      translate: ['-5%', 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: 'right center',
      translate: ['5%', 0, -200],
      rotate: [0, -100, 0],
    },
  },
});
