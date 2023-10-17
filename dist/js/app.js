// Проверка поддержки webp, класса _webp или _no-webp для HTML
function isWebp() {
	// Проверка поддержки webp
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	// Добавление класса _webp или _no-webp для HTML
	testWebp(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	})
}

isWebp();

// Swiper
const introSwiper = new Swiper(".introSwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
//
const thumbs = new Swiper(".coursesSwiper", {
	slidesPerView: 1,
	centeredSlides: true,
	loop: true,
	spaceBetween: 10,
	loopedSlides: 8,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
const slider = new Swiper(".coursesSwiper2", {
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	slideToClickedSlide: true,
	loopedSlides: 8,
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;

// mask phone
// document.getElementById('phone').addEventListener('input', function (e) {
// 	let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
// 	e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
// });
const element = document.getElementById('phone');
let maskOptions = {
	mask: '+{380}(00)000-00-00',
	lazy: false
}
let mask = new IMask(element, maskOptions);

let element2 = document.getElementById('email');
let maskOptions2 = {
	mask:function (value) {
		if(/^[a-z0-9_\.-]+$/.test(value))
			return true;
		if(/^[a-z0-9_\.-]+@$/.test(value))
			return true;
		if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
			return true;
		if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
			return true;
		if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
			return true;
		if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
			return true;
		if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
			return true;
		return false;
	},
	lazy: false
}
let mask2 = new IMask(element2, maskOptions2);
