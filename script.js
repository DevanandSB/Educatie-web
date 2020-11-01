

// Mobile navigation Bar

const navIcon = document.getElementById('nav-icon');
const menuItems = document.getElementById('menu-items');
const navLinks = document.querySelectorAll('.navbar__link-item');

// Subject list

const closeIcon1 = document.querySelector('.computer-1__close-icon');
const closeIcon2 = document.querySelector('.computer-2__close-icon');
const closeIcon3 = document.querySelector('.computer-3__close-icon');


const computer1List = document.getElementById('computer-1');
const computer2List = document.getElementById('computer-2');
const computer3List = document.getElementById('computer-3');

const subjectBox1 = document.querySelector('.subject__box-1');
const subjectBox2 = document.querySelector('.subject__box-2');
const subjectBox3 = document.querySelector('.subject__box-3');




// Practical close icons
const closeIcon4 = document.querySelector('.practical-1__close-icon');
const closeIcon5 = document.querySelector('.practical-2__close-icon');
const closeIcon6 = document.querySelector('.practical-3__close-icon');

const practical1List = document.getElementById('practical-1');
const practical2List = document.getElementById('practical-2');
const practical3List = document.getElementById('practical-3');

const practicalBox1 = document.querySelector('.practical__box-1');
const practicalBox2 = document.querySelector('.practical__box-2');
const practicalBox3 = document.querySelector('.practical__box-3');






// Navigation Bar
navIcon.addEventListener('click', () => {
	navIcon.classList.toggle('rotate');
	menuItems.classList.toggle('hide-menu');
	menuItems.classList.toggle('show-menu');
});

navLinks.forEach(item => {
	item.addEventListener('click', () => {
		navIcon.classList.toggle('rotate');
		menuItems.classList.toggle('hide-menu');
		menuItems.classList.toggle('show-menu');
	})
});



// Subject list

subjectBox1.addEventListener('click', () => {
	computer1List.classList.toggle('show-menu');
});

subjectBox2.addEventListener('click', () => {
	computer2List.classList.toggle('show-menu');
});

subjectBox3.addEventListener('click', () => {
	computer3List.classList.toggle('show-menu');
});


closeIcon1.addEventListener('click', () => {
	computer1List.classList.toggle('show-menu');
});

closeIcon2.addEventListener('click', () => {
	computer2List.classList.toggle('show-menu');
});

closeIcon3.addEventListener('click', () => {
	computer3List.classList.toggle('show-menu');
});



practicalBox1.addEventListener('click', () => {
	practical1List.classList.toggle('show-menu');
});

practicalBox2.addEventListener('click', () => {
	practical2List.classList.toggle('show-menu');
});

practicalBox3.addEventListener('click', () => {
	practical3List.classList.toggle('show-menu');
});




closeIcon4.addEventListener('click', () => {
	// console.log(e.target);
	practical1List.classList.toggle('show-menu');
});

closeIcon5.addEventListener('click', () => {
	// console.log(e.target);
	practical2List.classList.toggle('show-menu');
});

closeIcon6.addEventListener('click', () => {
	// console.log(e.target);
	practical3List.classList.toggle('show-menu');
});

//Is this Correct?