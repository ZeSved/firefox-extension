// import { d } from './d.js'
// const d = chrome.extension.getBackgroundPage().d

setInterval(async () => {
	const v = await browser.storage.local.get('value')
	// console.log(v)
	document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer').forEach((elm) => {
		if (elm.querySelector('yt-formatted-string')?.textContent?.toLowerCase().includes(v.value)) {
			elm.style.filter = 'blur(5rem)'
			// elm.style.opacity = '100%'
		} else {
			elm.style.opacity = '100%'
		}
		// JSON.parse(localStorage.getItem('no-spoilers-config') ?? '[]').forEach((word) => {
		// })
	})
}, 500)

browser.storage.onChanged.addListener((changes, area) => {
	if (area === 'local' && 'value' in changes) {
		document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer').forEach(async (elm) => {
			if (
				elm
					.querySelector('yt-formatted-string')
					?.textContent?.toLowerCase()
					.includes(changes.value.newValue)
			) {
				elm.style.opacity = '20%'
			}
			// JSON.parse(localStorage.getItem('no-spoilers-config') ?? '[]').forEach((word) => {
			// })
		})
		console.log(changes.value.newValue)
	}
})
