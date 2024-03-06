const body = document.querySelector('body')
const navigation = {
	desktop: document.querySelector('#navigation'),
	mobile: document.querySelector('#navigation-mobile')
}
const toggle = navigation?.desktop?.querySelector('.navigation-toggle')
let menu = false

const toggleNavigation = () => {
	menu ? body?.classList.add('navigation-active') : body?.classList.remove('navigation-active')
	menu ? navigation?.mobile?.classList.add('active') : navigation?.mobile?.classList.remove('active')
	menu ? toggle?.classList.add('active') : toggle?.classList.remove('active')
}

toggle?.addEventListener('click', () => {
	menu = !menu
	toggleNavigation()
})

toggleNavigation()