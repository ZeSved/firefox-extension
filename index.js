// import { d } from './d.js'

setInterval(async () => {
	document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer').forEach((video) => {
		JSON.parse(localStorage.getItem('no-spoilers-config') ?? '[]').forEach((word) => {
			if (elm.querySelector('yt-formatted-string')?.textContent?.toLowerCase().includes(word)) {
				elm.style.opacity = '20%'
			}
		})
	})

	// const im = await import('./d.js')
	// import('/d.json').then((r) => {
	// 	console.log(r)
	// })
	// console.log(im)
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
	// await document.requestStorageAccess()
})

window.addEventListener('load', () => {
	localStorage.setItem('t', 'e')
	window.postMessage('test', '*')
})

window.addEventListener('click', (e) => {
	// localStorage.setItem('ttttt', e.data)
	// console.log(e.data)
	console.log(e.target)
})
