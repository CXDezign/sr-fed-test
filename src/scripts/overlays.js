const body = document.querySelector('body')

export const isOverlayActive = (overlay) => {
	overlay ? body?.classList.add('overlay-active') : body?.classList.remove('overlay-active')
}