const wordsInput = document.getElementById('words')
const addBtn = document.getElementById('add')
// const options = document.getElementById('options')
const listDiv = document.getElementById('spoilerList')
const clear = document.getElementById('clear')

function loadList(newEntry) {
	const list = JSON.parse(localStorage.getItem('no-spoilers-list') ?? '[]')

	if (newEntry && !list.includes(newEntry)) {
		list.push(newEntry)
		localStorage.setItem('no-spoilers-list', JSON.stringify(list))
	}

	clearList()
	list.forEach((item) => {
		const p = document.createElement('p')
		const textNode = document.createTextNode(item)
		p.appendChild(textNode)

		listDiv.appendChild(p)
	})
}

addBtn?.addEventListener('click', () => {
	loadList(wordsInput.value)
	setValue(JSON.parse(localStorage.getItem('no-spoilers-list')))

	wordsInput.value = ''
})

clear?.addEventListener('click', () => {
	localStorage.setItem('no-spoilers-list', '[]')
	clearList()
	setValue([])
})

async function setValue(value) {
	await browser.storage.local.set({ value })
}

loadList()

function clearList() {
	Array.from(listDiv.children).forEach((child) => {
		listDiv.removeChild(child)
	})
}
