const formRegister = document.querySelector('#form-register')

const inputName = formRegister?.querySelector('#form-register-input-name')
const valueName = formRegister?.querySelector('#form-register-value-name')

inputName?.addEventListener('input', () => {
	if (!valueName) return
	console.log(inputName.value)
	valueName.textContent = inputName.value
})