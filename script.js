

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


closeIcon1.addEventListener('click', (e) => {
	computer1List.classList.toggle('show-menu');
});

closeIcon2.addEventListener('click', (e) => {
	computer2List.classList.toggle('show-menu');
});

closeIcon3.addEventListener('click', (e) => {
	computer3List.classList.toggle('show-menu');
});