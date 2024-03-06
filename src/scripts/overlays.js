const body = document.querySelector('body')

export const isOverlayActive = (overlay) => {
	if (overlay) {
		body?.classList.add('overlay-active')
		body?.setAttribute('tabindex', -1)
	} else {
		body?.classList.remove('overlay-active')
		body?.removeAttribute('tabindex')
	}

}