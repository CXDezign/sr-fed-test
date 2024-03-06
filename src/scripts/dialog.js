import { isOverlayActive } from './overlays'

const dialogButtons = document.querySelectorAll('.dialog-button-open')

dialogButtons.forEach((button) => {
	const dialogTarget = button.dataset.dialogTarget
	const dialog = document.querySelector(`#${dialogTarget}`)
	const buttonClose = dialog?.querySelector('button.dialog-button-close')
	button.addEventListener('click', () => {
		dialog.showModal()
		isOverlayActive(true)
	})
	buttonClose.addEventListener('click', () => {
		dialog.close()
	})
	dialog.addEventListener('close', () => isOverlayActive(false))
})
