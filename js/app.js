//Menu
let unlock = true;
let iconMenu = document.querySelector(".header__burger");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu");
  let header = document.querySelector(".header");
	iconMenu.addEventListener("click", function () {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
      header.classList.toggle("_active");
		}
	});
};

//SearchOpen
const searchButton = document.querySelector('.header__search-button-mobile');
const searchBody = document.querySelector('.header__search');
searchButton.addEventListener('click', function(e) {
    e.stopPropagation();
    searchBody.classList.add('_active');
});
document.addEventListener('click', function(e) {
    const target = e.target;
    const its_searchBody = target == searchBody || searchBody.contains(target);
    const its_searchButton = target == searchButton;
    const searchBody_is_active = searchBody.classList.contains('_active');
    if (!its_searchBody && !its_searchButton && searchBody_is_active) {
      searchBody.classList.remove('_active');
    }
});

//BodyLock
function body_lock(delay) {
	let body = document.querySelector(".wrapper");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector(".wrapper");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector(".wrapper");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//product slider toggler
const productSlides = document.querySelectorAll('.product__image-wrap img');
if (productSlides.length) {
	const productImage = document.querySelector('.product__main-image img');
	for (let i = 0; i < productSlides.length; i++) {
		let productSlide = productSlides[i];

		productSlide.addEventListener("click", function() {
			productImage.src = productSlide.src;
		});
	}
}
