// Prevent CSS transitions on page load

const enableTransitions = () => {
	document.querySelector('body').classList.remove('no-transition')
}

window.onload = () => {
	enableTransitions()
}
