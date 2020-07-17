const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('navLinks');


hamburger.addEventListener('click', () => {
	navUL.classList.toggle('show');




});

function onClickQuestions() {

	document.getElementById('chevron').classList.toggle('change');
}