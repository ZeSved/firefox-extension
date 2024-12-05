import { d } from './d.js'

document.getElementById('bt')?.addEventListener('click', () => {
	// alert('hello')
	localStorage.setItem('please', 'work')
	d.test = 'here'
})
