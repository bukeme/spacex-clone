const hamburgerContainer = document.querySelector('.nav__nav-items-container--hamburger-container')
const navMenu = document.querySelector('.nav__menu')
const navMenuItems = document.querySelectorAll('.nav__menu--menu-item')
const navMenuItemsMobile = document.querySelectorAll('.nav__menu--menu-item.mobile')
const navOverlay = document.querySelector('.nav__overlay')



hamburgerContainer.addEventListener('click', function() {
	this.classList.toggle('active')
	navMenu.classList.toggle('open')
	navOverlay.classList.toggle('show-overlay')
})

const addTransitionDelay = () => document.querySelectorAll('.visible').forEach((navMenuItem, index) => navMenuItem.style.transitionDelay = `${(index * 0.05) + 0.1}s`)

if (this.innerWidth <= 1150) navMenuItemsMobile.forEach((navMenuItemMobile) => navMenuItemMobile.classList.add('visible'))
addTransitionDelay()

window.addEventListener('resize', function() {
	if (this.innerWidth <= 1150) {
		navMenuItemsMobile.forEach((navMenuItemMobile) => navMenuItemMobile.classList.add('visible'))
	} else {
		navMenuItemsMobile.forEach((navMenuItemMobile) => navMenuItemMobile.classList.remove('visible'))
	}
	addTransitionDelay()
})

navOverlay.addEventListener('click', function() {
	navMenu.classList.remove('open')
	this.classList.remove('show-overlay')
	hamburgerContainer.classList.remove('active')
})