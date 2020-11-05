

// Mobile navigation Bar

const navIcon = document.getElementById('nav-icon');
const menuItems = document.getElementById('menu-items');
const navLinks = document.querySelectorAll('.navbar__link-item');


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


// Close icons
const computerCloseIcons = document.querySelectorAll('.close__icon');


// Subject list

const computerList1 = document.getElementById('computer-1');
const computerList2 = document.getElementById('computer-2');
const computerList3 = document.getElementById('computer-3');

const subjectYears = document.getElementById('subject__years');

subjectYears.addEventListener('click', e => {

	switch (e.target.parentNode.classList[1].split('-')[1]) {
		case '1':
			computerList1.classList.toggle('show-menu');
			return;
		case '2':
			computerList2.classList.toggle('show-menu');
			return;
		case '3':
			computerList3.classList.toggle('show-menu');
			return;
	}
});


// Practical list

const practicalList1 = document.getElementById('practical-1');
const practicalList2 = document.getElementById('practical-2');
const practicalList3 = document.getElementById('practical-3');

const practicalYears = document.getElementById('practical__years');


practicalYears.addEventListener('click', e => {
	
	switch (e.target.parentNode.classList[1].split('-')[1]) {
		case '1':
			practicalList1.classList.toggle('show-menu');
			return;
		case '2':
			practicalList2.classList.toggle('show-menu');
			return;
		case '3':
			practicalList3.classList.toggle('show-menu');
			return;
	}
});



// Timetable lists

const timeTableYears = document.getElementById('timetable__years');

const timeTableList1 = document.getElementById('timetable-1');
const timeTableList2 = document.getElementById('timetable-2');
const timeTableList3 = document.getElementById('timetable-3');

timeTableYears.addEventListener('click', e => {

	switch (e.target.parentNode.classList[1].split('-')[1]) {
		case '1':
			timeTableList1.classList.toggle('show-menu');
			return;
		case '2':
			timeTableList2.classList.toggle('show-menu');
			return;
		case '3':
			timeTableList3.classList.toggle('show-menu');
			return;
	}
})


// Close icons for all menus

computerCloseIcons.forEach(item => {
	item.addEventListener('click', () => {
		item.parentNode.classList.toggle('show-menu');
	})
});



// Practical Unit list

const practicalYearList1 = document.querySelectorAll('.practical-year-1');
const practicalYearList2 = document.querySelectorAll('.practical-year-2');
const practicalYearList3 = document.querySelectorAll('.practical-year-3');

const practical1UnitList1 = document.getElementById('practical-1-subject-1');
const practical1UnitList2 = document.getElementById('practical-1-subject-2');
const practical1UnitList3 = document.getElementById('practical-1-subject-3');
const practical1UnitList4 = document.getElementById('practical-1-subject-4');
const practical1UnitList5 = document.getElementById('practical-1-subject-5');

practicalYearList1.forEach(item => {
	item.addEventListener('click', () => {
		switch(item.classList[2].split('-')[3]) {

			case '1':
				practical1UnitList1.classList.toggle('show-menu');
				break;
			case '2':
				practical1UnitList2.classList.toggle('show-menu');
				break;
			case '3':
				practical1UnitList3.classList.toggle('show-menu');
				break;
			case '4':
				practical1UnitList4.classList.toggle('show-menu');
				break;
			case '5':
				practical1UnitList5.classList.toggle('show-menu');
				break;
		}
		
	})
});


const practical2UnitList1 = document.getElementById('practical-2-subject-1');
const practical2UnitList2 = document.getElementById('practical-2-subject-2');
const practical2UnitList3 = document.getElementById('practical-2-subject-3');
const practical2UnitList4 = document.getElementById('practical-2-subject-4');
const practical2UnitList5 = document.getElementById('practical-2-subject-5');

practicalYearList2.forEach(item => {
	item.addEventListener('click', () => {
		switch(item.classList[2].split('-')[3]) {

			case '1':
				practical2UnitList1.classList.toggle('show-menu');
				break;
			case '2':
				practical2UnitList2.classList.toggle('show-menu');
				break;
			case '3':
				practical2UnitList3.classList.toggle('show-menu');
				break;
			case '4':
				practical2UnitList4.classList.toggle('show-menu');
				break;
			case '5':
				practical2UnitList5.classList.toggle('show-menu');
				break;
		}
		
	})
});



const practical3UnitList1 = document.getElementById('practical-3-subject-1');
const practical3UnitList2 = document.getElementById('practical-3-subject-2');
const practical3UnitList3 = document.getElementById('practical-3-subject-3');
const practical3UnitList4 = document.getElementById('practical-3-subject-4');
const practical3UnitList5 = document.getElementById('practical-3-subject-5');

practicalYearList3.forEach(item => {
	item.addEventListener('click', () => {
		switch(item.classList[2].split('-')[3]) {

			case '1':
				practical3UnitList1.classList.toggle('show-menu');
				break;
			case '2':
				practical3UnitList2.classList.toggle('show-menu');
				break;
			case '3':
				practical3UnitList3.classList.toggle('show-menu');
				break;
			case '4':
				practical3UnitList4.classList.toggle('show-menu');
				break;
			case '5':
				practical3UnitList5.classList.toggle('show-menu');
				break;
		}
		
	})
});