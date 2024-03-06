import { isOverlayActive } from './overlays'

const dialogButtons = document.querySelectorAll('.dialog-button-open')

dialogButtons.forEach((button) => {
	const dialogTarget = button.getAttribute('dialog-target')
	const dialog = document.querySelector(`#${dialogTarget}`)
	button.addEventListener('click', () => {
		dialog.showModal()
		isOverlayActive(true)
	})
	dialog.addEventListener('close', () => isOverlayActive(false))
})
