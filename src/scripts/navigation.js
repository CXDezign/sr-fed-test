import { isOverlayActive } from './overlays'

const navigation = {
	desktop: document.querySelector('#navigation'),
	mobile: document.querySelector('#navigation-mobile')
}
const toggle = navigation?.desktop?.querySelector('.navigation-toggle')
let menu = false

const toggleNavigation = () => {
	const navigationComputedStyle = window.getComputedStyle(navigation.mobile)
	navigation?.mobile?.classList.add('transitioning')
	let transition = navigationComputedStyle?.getPropertyValue('transition-duration')
	transition = transition?.replace('s', '')

	setTimeout(() => {
		navigation.mobile.classList.remove('transitioning')
		toggle.disabled = false
	}, transition * 1000)
	
	isOverlayActive(menu)
	menu ? toggle?.classList.add('active') : toggle?.classList.remove('active')
	menu ? navigation?.mobile?.classList.add('active') : navigation?.mobile?.classList.remove('active')
	menu ? navigation.mobile.querySelector('a').focus() : null
}

const disableNavigation = () => {
	menu = !menu
	toggle.disabled = true
}

window.addEventListener('resize', () => {
	const windowWidth = window.innerWidth
	if (windowWidth > 768 & menu === true) {
		console.log('window size:', windowWidth)
		disableNavigation()
		toggleNavigation()
	}
})

toggle?.addEventListener('click', () => {
	disableNavigation()
	toggleNavigation()
})

toggleNavigation()