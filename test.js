const inp = document.getElementById('in')

document.getElementById('bt')?.addEventListener('click', () => {
	setValue(inp.value)
	inp.value = ''
})

async function setValue(value) {
	await browser.storage.local.set({ value })
}
