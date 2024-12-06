// import { d } from './d.js'

setInterval(async () => {
	document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer').forEach((video) => {
		JSON.parse(localStorage.getItem('no-spoilers-config') ?? '[]').forEach((word) => {
			if (elm.querySelector('yt-formatted-string')?.textContent?.toLowerCase().includes(word)) {
				elm.style.opacity = '20%'
			}
		})
	})
	// globalThis.da = globalThis.da

	// const im = await import('./d.js')
	// import('/d.json').then((r) => {
	// 	console.log(r)
	// })
	// console.log(globalThis.da.test)
	// console.log(window.wrappedJSObject.t)
	// console.log(
	// 	chrome.storage.sync.get('test', function (data) {
	// 		console.log(data.test)
	// 	})
	// )
	// chrome.storage.sync.get('test', function (data) {
	// 	console.log(data.test)
	// })
	// localStorage.setItem('tme', JSON.stringify(Date.now()))

	// console.log(parseInt(localStorage.getItem('tme')!) + 1)
}, 500)

// document.getElementById('bt')?.addEventListener('click', () => {
//   alert('hello')
// })

function onLoad(e) {
	localStorage.setItem('testt', JSON.stringify(e))
}

window.addEventListener('message', (e) => {
	if (e.origin === 'http://localhost:5173') {
		localStorage.setItem('ttttt', JSON.stringify(e))
		console.log(e)
	}
	console.log(e)
	// await document.requestStorageAccess()
})

// window.addEventListener('load', () => {
// 	localStorage.setItem('t', 'e')
// 	setTimeout(() => {
// 		const e = window.prompt('words')
// 		console.log(e)
// 	}, 5000)
// 	window.postMessage('test', '*')
// 	br
// })

browser.runtime.onMessage.addListener((message) => {
	if (message.command === 'now') {
		console.log('yo')
	} else if (message.command === 'reset') {
		console.log('test please')
	}
})

// window.addEventListener('click', (e) => {
// 	// localStorage.setItem('ttttt', e.data)
// 	// console.log(e.data)
// 	console.log(e.target)
// })
