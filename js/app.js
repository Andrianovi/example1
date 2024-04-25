//import * as flsFunctions from "./modules/functions.js";

//flsFunctions.isWebp();


// import Swiper, { Navigation, Pagination } from "swiper";


//*@ Да будет SLIDER-SWIPER

let myImageSlider = new Swiper('.slaider', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	//* Бесконечный слайдер
	loop: true,


	//* Обновить свайпер, при изменении элементов слайдера
	observer: true,

	//* Обновить свайпер, при изменении родительских элементов слайдера
	observeParents: true,

	//* Обновить свайпер, при изменении дочерних элементов, внутри, слайда
	observeSlideChildren: true,
	touchRatio: 1,
	slidesPerGroup: 1,
	preloadImages: false,

	//*@ lazy Loading (подгрузка картинок)
	//*@ Похоже устарело и не работает
	lazy: {
		//* Подгружать на старте переключения слайдов
		//* если значение true, срабатывает при переключении на следующий или предыдущий слайд
		loadOnTransitionStart: false,
		// Подгружать предыдущую и следующую картинки
		//* если значение true, подгружает предыдущий и следующий слайды
		loadPrevNext: false,
	},
});






























//* Что мы хотим: собирать js файлы таким образом, чтобы мы могли подключать, импортировать различные части и файлы в синтаксисе es6, добавлять к <html> class="webp" или "no-webp", в зависимости от поддержки браузером webp изображений

const burger1 = document.querySelector('.burger');
const menu1 = document.querySelector('.wrapper-nav');
let wrapper1 = document.querySelector('.wrapper1');



burger1.addEventListener('click', function () {
	menu1.classList.toggle('active');
	wrapper1.classList.toggle('active');
	burger1.classList.toggle('active');
	document.body.classList.toggle('active');

});

//@ СЛАЙДЕР
//* Регулировка высота каждой картинки слайдера, относительно ширины, ибо, как сделать это через css, я не знаю
const slaid1 = document.querySelectorAll('.slaid');
let footP = document.querySelector('.footer-wrapper p');
//console.log(footP);
const mainSlaid1 = document.querySelector('.main-slaider');
const slaiderCont = document.querySelector('.slaider');
//@gggggggggggggggggggggggggggg
// window.addEventListener('resize', function () {
// 	heightSlide();
// 	activeBg();
// 	buttons();
// 	swipeSlider();
// });
//const heightSlide = function () {
let slaidWidth1;
/* function heightSlide() {
	for (let elem of slaid1) {

		//elem.style.maxWidth = "2000px";
	};
	if (parseInt(getComputedStyle(slaid1[0]).width) * 0.75 < document.documentElement.clientHeight * 0.9) {
		slaiderCont.classList.add('vertic');
		slaiderCont.classList.remove('horiz');

		// //@ меняем надпись в footer
		//footP.innerHTML = `${slaidWidth1}`;
		// //* приравниваем высоту окна слайдера к высоте 1й картинки. Если этого не сделать, то после записи poa в .slider-line, высота автоматом станет 0.
		//footP.innerHTML = `${mainSlaid1}`;


	} else if (parseInt(getComputedStyle(slaid1[0]).width) * 0.75 >= document.documentElement.clientHeight * 0.9) {
		slaiderCont.classList.remove('vertic');
		slaiderCont.classList.add('horiz');

	};
} */
//@ меняем надпись в footer
//footP.innerHTML = `${left1}`;
//footP.innerHTML = '${offset1}';
//запускаем функцию при изменении окна браузера и обязательно просто запускаем ниже, иначе при загрузке она не сработает, размер окна то, блять, не изменился!!






function heightSlide() {


	if (document.documentElement.clientHeight / document.documentElement.clientWidth > 0.75) {
		slaiderCont.classList.add('vertic');
		slaiderCont.classList.remove('horiz');

	} else if (document.documentElement.clientHeight / document.documentElement.clientWidth <= 0.75) {
		slaiderCont.classList.remove('vertic');
		slaiderCont.classList.add('horiz');

	};
}



heightSlide();

























































//y=x*0.75
//у/x= x*0.75/x=0.75
















function doubleHS() {
	if (slaiderCont.classList.contains('vertic')) {
		//footP.innerHTML = `вертик ${document.documentElement.clientHeight}`;
		//document.body.width = `${window.innerWidth}px`;
		for (let elem of slaid1) {

			//console.log(elem);
			elem.style.width = `${document.documentElement.clientWidth - 20}px`;
			elem.style.maxWidth = `750px`;
			slaidWidth1 = parseInt(getComputedStyle(elem).width);
			// console.log(document.documentElement.clientWidth);
			// console.log(window.innerWidth);
			// console.log(elem.style.width);
			// console.log(slaidWidth1);
			elem.style.height = `${slaidWidth1 * 0.75}px`;
			// footP.innerHTML = `${elem.style.height}
			// ${elem.style.width}
			// ${slaidWidth1}`;
		};
		// console.log(document.documentElement.clientWidth);
		// console.log(window.innerWidth);
		// console.log(parseInt(getComputedStyle(slaid1[0]).width));

		//mainSlaid1.style.width = "auto";
		slaiderCont.style.width = document.querySelectorAll('.slaid')[0].style.width;
		slaiderCont.style.height = document.querySelectorAll('.slaid')[0].style.height;
		//footP.innerHTML = `${parseInt(getComputedStyle(slaiderCont).height)}`;
		console.log(parseInt(getComputedStyle(slaiderCont).height));
		console.log(parseInt(getComputedStyle(slaiderCont).width));

	} else if (slaiderCont.classList.contains('horiz')) {
		//footP.innerHTML = `гориз ${document.documentElement.clientHeight}`;
		//*в цикле, у каждого слайда:
		//* max-width = (высот экрана * 0,9)/0,75
		//* height = высот экрана * 0,9)/0,75 
		for (let elem of slaid1) {
			elem.style.width = `${(document.documentElement.clientHeight * 0.9) / 0.75}px`;
			elem.style.maxWidth = '750px';
			elem.style.height = `${document.documentElement.clientHeight * 0.9}px`;
			elem.style.maxHeight = '562.5px';
			// footP.innerHTML = `${elem.style.height}
			// ${elem.style.width}
			// ${slaidWidth1}`;

		}

		slaiderCont.style.width = `${slaid1[0].offsetWidth}px`;
		slaiderCont.style.height = `${slaid1[0].offsetHeight}px`;

		console.log(parseInt(getComputedStyle(slaiderCont).height));
		console.log(parseInt(getComputedStyle(slaiderCont).width));

	}
};
doubleHS();



























//? -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





























/*
//*Функция проверки касание пальцем или мышью и вывод соответственно для пальца event.touches[0], а для мыши event
let getEvent = function () {
	return (event.type.search('touch') !== -1) ? event.touches[0] : event;
};
	
const slaiderLine = document.querySelector('.slaider-line');
const left1 = document.querySelector('.left');
let lengthSlider1 = slaid1.length;
//console.log(lengthSlider1);
	
const right1 = document.querySelector('.right');
	
const buttons = function () {
	//var slideWidth = slaid1[0].offsetWidth;
	var slideWidth = parseInt(getComputedStyle(slaid1[0]).width);
	//footP.innerHTML = `${slideWidth}`;
	//* правая кнопка слайдера
	right1.addEventListener('click', function () {
		//@ меняем надпись в footer
		//footP.innerHTML = '${offset1}';
		// Вычитаем, из значения сss left, ширину ленты слайдеров, делённую на колво слайдов в ленте (кол-во блоков в массиве slaid1 c классом slaid)
		let offset1 = parseInt(getComputedStyle(slaiderLine).left) - parseInt(getComputedStyle(slaiderLine).width) / lengthSlider1;
		if (offset1 < -parseInt(getComputedStyle(document.querySelectorAll('.slaid')[0]).width) * (lengthSlider1 - 1)) {
			offset1 = 0;
		}
		let offsetR1 = Math.floor(offset1 / slideWidth) * slideWidth;
		slaiderLine.style.left = `${offsetR1}px`;
	});
	//* Левая кнопка слайдера
	left1.addEventListener('click', function () {
		//@ меняем надпись в footer
		//footP.innerHTML = `${left1}`;
		//footP.innerHTML = '${offset1}';
	
		let offset1 = parseInt(getComputedStyle(slaiderLine).left) + parseInt(getComputedStyle(slaiderLine).width) / lengthSlider1;
	
		if (offset1 > 0) {
			offset1 = -parseInt(getComputedStyle(document.querySelectorAll('.slaid')[0]).width) * (lengthSlider1 - 1);
		}
		let offsetL1 = Math.ceil(offset1 / slideWidth) * slideWidth;
		slaiderLine.style.left = `${offsetL1}px`;
	});
};
buttons();
//@ меняем надпись в footer
//footP.innerHTML = `${left1}`;
//footP.innerHTML = '${offset1}';
//@ Пробую сделать swipeSlider
	
const swipeSlider = function () {
	
	
	
	var slideWidth = slaid1[0].offsetWidth;
	let posX1;
	let posX2;
	let movSlid1 = mainSlaid1.offsetLeft;
	let leftStart;
	let posY1;
	let posY2;
	let diffX;
	let diffY;
	
	function swipeStart() {
	
		let evt = getEvent();
		posX1 = evt.clientX;
		posX2 = evt.clientX;
		posY1 = evt.clientY;
		posY2 = evt.clientY;
	
		mainSlaid1.classList.add("grabbing");
		mainSlaid1.classList.remove("grab");
		document.addEventListener('mousemove', swipeAction);
		document.addEventListener('touchmove', swipeAction);
		document.addEventListener('mouseup', swipeEnd);
		document.addEventListener('touchend', swipeEnd);
		leftStart = parseInt(getComputedStyle(slaiderLine).left);
	
		//@ меняем надпись в footer
		//footP.innerHTML = `${movement1}`;
	
	}
	function swipeAction() {
	
		console.log("Работает mousemove");
		let evt = getEvent();
		posX2 = evt.clientX;
		posY2 = evt.clientY;
		slaiderLine.style.transition = 'all 0s normal 0s';
		diffX = posX1 - posX2;
		diffY = posY1 - posY2;
		let fixX = posX2 - movSlid1;
		//@ меняем надпись в footer
	
		//footP.innerHTML = `${fixX}
		//${slaiderLine.style.left}`;
		slaiderLine.style.left = `${(leftStart - diffX)}px`;
	};
	function swipeEnd() {
		slaiderLine.style.left = `${(leftStart - diffX)}px`;
		//footP.innerHTML = `${getComputedStyle(slaiderLine).left}`;
		//footP.innerHTML = `${slaiderLine}`;
		console.log("Работает mouseup");
		mainSlaid1.classList.remove("grabbing");
		mainSlaid1.classList.add("grab");
		document.removeEventListener('mousemove', swipeAction);
		document.removeEventListener('touchmove', swipeAction);
		document.removeEventListener('mouseup', swipeEnd);
		document.removeEventListener('touchend', swipeEnd);
		slaiderLine.style.transition = 'all 0.4s normal 0s';
		//leftActive = положение линии слайдов, по оси Х, после отпускания пальца(кнопки мыши)
		let leftActive = slaiderLine.style.left;
		// Изменяем положение линии слайдов, разделив положение линии на ширину 1го слайда, потом округляем до целого числа и умножаем обратно, таким образом положение будет всегда кратным ширине слайда, и слайды будут доезжать до следующего слайда или возвращаться в начальное положение
		//slaiderLine.style.left = `${Math.round(parseInt(leftActive) / slideWidth) * slideWidth}px`;
		//@ меняем надпись в footer
		//footP.innerHTML = '${posX2}';
		// footP.innerHTML = `
		// ${parseInt(leftActive) / slideWidth}`;
	
		// Если растояние движения пальца по горизонтали меньше расстояния по вертикали, то положение линии слайдов вернётся к состоянию до движения пальца. Т.е был слайд 2, протянули вверх и в бок, но вверх больше - пока тянули, слайд двигался за пальцем, отпустили вернулся на 2й слайд ровно.
		if (Math.abs(diffX) <= Math.abs(diffY) || Math.abs(diffX) === 0) {
			slaiderLine.style.left = `${leftStart}px`;
			//@ меняем надпись в footer
			// ${ Math.abs(diffY) } `;
			//footP.innerHTML = `движение вверх`;
			//footP.innerHTML = `${leftActive}`;
		} else {
			if (posX2 < posX1) {
				slaiderLine.style.left = `${Math.floor(parseInt(leftActive) / slideWidth) * slideWidth}px`;
				// 	//@ меняем надпись в footer
				//footP.innerHTML = `${parseInt(leftActive)}`;
				//footP.innerHTML = `движение вверх`;
			} else if (posX2 > posX1) {
				//footP.innerHTML = `${slideWidth}`;
				slaiderLine.style.left = `${Math.ceil(parseInt(leftActive) / slideWidth) * slideWidth}px`;
			}
		}
		//leftEnd = числовое значение left линии слайдов, т.е. без рх, и после всех манипуляций с дотаскиванием след файла, т.е. left End либо 0 либо отриц число кратное ширине слайда
		let leftEnd = parseInt(slaiderLine.style.left);
		//ограничитель: 1й if - если линия промотана ровно до конца и слайдов уже не видно, а так оно и будет на последнем слайде если мотнуть ещё вперёд, то линия уезжает к началу 1го слайда;
		// 2й if - если значение left оказалось положительным, а это возможно, только если мотнуть назад на 1м слайде, то нас тащит к началу последнего слайда
		if (leftEnd <= -parseInt(getComputedStyle(slaiderLine).width)) {
			slaiderLine.style.left = `0px`;
			//footP.innerHTML = `${slaiderLine.style.left}`;
		} else if (leftEnd > 0) {
			slaiderLine.style.left = `${-parseInt(getComputedStyle(document.querySelectorAll('.slaid')[0]).width) * (lengthSlider1 - 1)}px`;
		}
	
	}
	
	mainSlaid1.addEventListener('mousedown', swipeStart);
	mainSlaid1.addEventListener('touchstart', swipeStart);
	
	mainSlaid1.addEventListener('dragstart', function (event) {
		event.preventDefault();
	});
};
swipeSlider();
 */
//? -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


















































//*движение фона за курсором
const activeBg = function () {
	if (slaiderCont.classList.contains('no-webp')) {
		document.body.style.background = `#000 url("../img/headerFon.jpg") 50% 50% / cover fixed no-repeat `;
	} else if (slaiderCont.classList.contains('webp')) {
		document.body.style.background = `#000 url("../img/headerFon.webp") 50% 50% / cover fixed no-repeat `;
	}
	//*@ проверка на мобильное сенсорное устройство. если впереди убрать "!", то будет действовать только для них
	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		document.body.addEventListener('mousemove', funFon1);
	}
	//document.body.addEventListener('touchmove', funFon3);

	function funFon1() {

		if (window.innerWidth > 1.3 * window.innerHeight) {
			document.body.style.backgroundSize = ` 115% auto`;
		} else if (window.innerHeight > 1.3 * window.innerWidth) {
			document.body.style.backgroundSize = ` auto 115% `;
		} else {
			document.body.style.backgroundSize = ` 115% 115% `;
		}


		//footP.innerHTML = `${document.body.style.backgroundSize} `;

		let getEvent = function () {
			return (event.type.search('touch') !== -1) ? event.touches[0] : event;
		};










		let evt = getEvent();
		//ширина окна брауз в рх
		//console.log(window.innerWidth);
		//расстоян от левого края до курс
		//console.log(event.clientX);
		let per1;

		let per2;
		let curY = evt.clientY;
		let curX = evt.clientX;

		if (curY === window.innerHeight / 2) {
			per2 = 50;

		} else if (curY > window.innerHeight / 2) {
			per2 = 50 + ((evt.clientY - (window.innerHeight / 2)) / ((window.innerHeight) / 25));
		} else if (curY < window.innerHeight / 2) {
			per2 = 50 - (((window.innerHeight / 2) - evt.clientY) / ((window.innerHeight) / 25));
		}

		if (curX === window.innerWidth / 2) {
			per1 = 50;

		} else if (curX > window.innerWidth / 2) {
			per1 = 50 + ((evt.clientX - (window.innerWidth / 2)) / ((window.innerWidth) / 25));
		} else if (curX < window.innerWidth / 2) {
			per1 = 50 - (((window.innerWidth / 2) - evt.clientX) / ((window.innerWidth) / 25));
		}
		document.body.style.backgroundPositionY = `${per2}% `;
		document.body.style.backgroundPositionX = `${per1}% `;
		//@ меняем надпись в footer
		//footP.innerHTML = '${posX2}';
		//footP.innerHTML = `${per1} `;
	};
	function funFon2() {
		let evt = getEvent();
		//ширина окна брауз в рх
		//console.log(window.innerWidth);
		//расстоян от левого края до курс
		//console.log(event.clientX);
		let per1;

		let per2;
		let curX = evt.clientX;
		per2 = 50;


		if (curX === window.innerWidth / 2) {
			per1 = 50;

		} else if (curX > window.innerWidth / 2) {
			per1 = 50 + ((evt.clientX - (window.innerWidth / 2)) / ((window.innerWidth) / 25));
		} else if (curX < window.innerWidth / 2) {
			per1 = 50 - (((window.innerWidth / 2) - evt.clientX) / ((window.innerWidth) / 25));
		}
		document.body.style.backgroundPositionY = `${per2}% `;
		document.body.style.backgroundPositionX = `${per1}% `;
		//@ меняем надпись в footer
		//footP.innerHTML = '${posX2}';
		//footP.innerHTML = `${per1} `;
	};
	function funFon3() {

	}
};
//window.addEventListener('resize', activeBg)
activeBg();














































































window.addEventListener('resize', function () {


	heightSlide();
	activeBg();

	doubleHS();
	//* Обновить слайдер
	myImageSlider.update();
});

window.addEventListener('orientationchange', function () {

	/* 	if (window.innerWidth > 1.3 * window.innerHeight) {
			document.body.style.backgroundSize = ` 115% auto`;
		} else if (window.innerHeight > 1.3 * window.innerWidth) {
			document.body.style.backgroundSize = ` auto 115% `;
		} else {
			document.body.style.backgroundSize = ` 115% 115% `;
	
		} */
	heightSlide();
	activeBg();

	doubleHS();
	//* Обновить слайдер
	myImageSlider.update();
});

//* Отключение движение фона, когда курсор на слайдере и включение обратно, когда выезжает с него

// mainSlaid1.addEventListener('mousemove', function () {
// 	document.body.removeEventListener('mousemove',
// 		funFon1);
// });
// document.body.addEventListener('mouseover', function () {
// 	//включение плавного хода но 0.1s, чтобы после выезда курсора, со слайдера, фон сдвигался плавно, а потом сразу плавность отрубалась
// 	this.addEventListener('mousemove',
// 		funFon1);
// 	// 	setTimeout(() => function () { document.body.style.transition = 'background 10s ease 0s'; }, 10000);
// });

// document.body.addEventListener('touchmove', funFon1);








