let t = 'ee'
// import { d } from './d.js'

document.getElementById('bt')?.addEventListener('click', () => {
	// chrome.storage.sync.set({ test: 'test2' }).then((r, t) => {
	// 	document.getElementById('text').textContent = JSON.stringify(t ?? 'success')
	// })
	// chrome.storage.sync.get(['test']).then((r) => {
	// 	document.getElementById('text2').textContent = r.test
	// })
	let s = ''
	for (const k in browser) {
		s += `${k}: ${JSON.stringify(browser[k])}\n`
		// document.getElementById('text').textContent += JSON.stringify(k)
	}

	document.getElementById('text').textContent = JSON.stringify(browser.extension.i18n)
	// document.getElementById('text').textContent = JSON.stringify(browser)
	// console.log(chrome)
	// console.log(chrome.tabs)
	// console.log(chrome)
	// alert('hello')
	// alert(tabs)
	// localStorage.setItem('please', 'work')
	// // alert('e')
	// window.postMessage('test please work', 'https://www.youtube.com/*')
	// globalThis.da = {
	// 	test: 'here',
	// }
	// d.test = 'here'
	// window.t = 'maybe'
	// browser.tabs.sendMessage(tabs[0].id, {
	// 	command: 'now',
	// })
})

// browser.tabs.sendMessage(tabs[0].id, {
// 	command: 'reset',
// })
