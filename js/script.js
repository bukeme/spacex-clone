const hamburgerContainer = document.querySelector('.nav__nav-items-container--hamburger-container');
const navMenu = document.querySelector('.nav__menu');
const navMenuItems = document.querySelectorAll('.nav__menu--menu-item');
const navMenuItemsMobile = document.querySelectorAll('.nav__menu--menu-item.mobile');
const navOverlay = document.querySelector('.nav__overlay');
const animateContents = document.querySelectorAll('.animate-content');
const nav = document.querySelector('.nav')
const sectionA = document.querySelector('#section-a')



hamburgerContainer.addEventListener('click', function() {
	this.classList.toggle('active');
	navMenu.classList.toggle('open');
	navOverlay.classList.toggle('show-overlay');
});

const addTransitionDelay = () => document.querySelectorAll('.visible').forEach((navMenuItem, index) => navMenuItem.style.transitionDelay = `${(index * 0.04) + 0.1}s`);

if (this.innerWidth <= 1150) navMenuItemsMobile.forEach((navMenuItemMobile) => navMenuItemMobile.classList.add('visible'));
addTransitionDelay();

window.addEventListener('resize', function() {
	if (this.innerWidth <= 1150) {
		navMenuItemsMobile.forEach((navMenuItemMobile) => navMenuItemMobile.classList.add('visible'));
	} else {
		navMenuItemsMobile.forEach((navMenuItemMobile) => navMenuItemMobile.classList.remove('visible'));
	};
	addTransitionDelay();
});

navOverlay.addEventListener('click', function() {
	navMenu.classList.remove('open');
	this.classList.remove('show-overlay');
	hamburgerContainer.classList.remove('active');
});

animateContents.forEach(function(animateContent) {
	let childContent = animateContent.children;
	for (i = 0; i < childContent.length; i++) {
		childContent[i].style.transitionDelay = `${i * 0.05}s`;
	};
});

function fadeInAnimateContent() {
	let triggerLine = window.innerHeight - 100
	animateContents.forEach(function(animateContent) {
		let contentTop = animateContent.getBoundingClientRect().top + 300
		if (contentTop <= triggerLine) {
			animateContent.classList.add('fade-in')
		} else {
			animateContent.classList.remove('fade-in')
		}
	});
}

let previousScrollPosition = 0;
function isScrollingDown() {
	let goingDown = false;
	let currentScrollPosition = window.scrollY;
	if (previousScrollPosition < currentScrollPosition) goingDown = true;
	previousScrollPosition = currentScrollPosition
	return goingDown
}

const sectionAHeight = window.innerHeight - 50;

fadeInAnimateContent();

window.addEventListener('scroll', function() {
	fadeInAnimateContent();
	if (isScrollingDown()) {
		navMenu.classList.remove('open');
		navOverlay.classList.remove('show-overlay');
		hamburgerContainer.classList.remove('active');
		nav.classList.add('hide-nav');
	} else {
		nav.classList.remove('hide-nav');
	};

	if (window.scrollY >= sectionAHeight) {
		nav.classList.add('add-background')
	} else {
		nav.classList.remove('add-background')
	}
});

