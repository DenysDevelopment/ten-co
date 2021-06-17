const gridLine = document.querySelector('.event1__line-track');

document.addEventListener('scroll', () => {
	if (window.pageYOffset > 200) {
		document.querySelector('.events__texts').classList.add('animation-left');
		document.querySelector('.events__img').classList.add('animation-right');
	}

	gridLine.style.height = `${window.pageYOffset - 2400}px`;
});
