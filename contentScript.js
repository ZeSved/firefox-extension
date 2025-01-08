setInterval(async () => {
	const v = await browser.storage.local.get('value')

	document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer').forEach((elm) => {
		if (v.value.length === 0) {
			elm.style.filter = 'blur(0px)'
		} else {
			v.value.forEach((word) => {
				if (elm.querySelector('yt-formatted-string')?.textContent?.toLowerCase().includes(word)) {
					elm.style.filter = 'blur(5rem)'
				}
			})
		}
	})
}, 1000)

browser.storage.onChanged.addListener((changes, area) => {
	if (area === 'local' && 'value' in changes) {
		document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer').forEach(async (elm) => {
			if (changes.value.newValue.length === 0) {
				elm.style.filter = 'blur(0px)'
			} else {
				changes.value.newValue.forEach((word) => {
					if (elm.querySelector('yt-formatted-string')?.textContent?.toLowerCase().includes(word)) {
						elm.style.filter = 'blur(5rem)'
					}
				})
			}
		})
	}
})
