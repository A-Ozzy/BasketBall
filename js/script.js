function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});;

//    Class active for Burger
let burger = document.querySelector(".burgerbox");
let burgerBox = document.querySelector(".burgerbox__burger");
let burgerboxLining = document.querySelector(".burgerbox__lining");
let liningmenuHide = document.querySelector(".liningmenu__list-hide");

burger.addEventListener("click", () => {
   burger.classList.toggle('active');
   burgerBox.classList.toggle('active');
   burgerBox.classList.toggle('active');
   burgerboxLining.classList.toggle('active');
   liningmenuHide.classList.toggle('active');
});

//================= SWIPER ===============
new Swiper('.swiper', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   slidesPerView: 10,
   spaceBetween: 6,
   slidesPerGroup: 1,
   loop: true,
   breakpoints: {
      315: {
         slidesPerView: 3,
      },
      400: {
         slidesPerView: 5,
      },
      550: {
         slidesPerView: 6,
      },
      780: {
         slidesPerView: 4,
      },
      900: {
         slidesPerView: 6,
      },
      1015: {
         slidesPerView: 8,
      },
      1116: {
         slidesPerView: 10,
      },
   }
});
