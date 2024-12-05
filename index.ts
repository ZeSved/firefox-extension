setInterval(() => {
  document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer').forEach((video) => {
    const elm = video as HTMLElement
    (JSON.parse(localStorage.getItem('no-spoilers-config')!) as string[]).forEach(word => {
      if (elm.querySelector('yt-formatted-string')?.textContent?.toLowerCase().includes(word)) {
        elm.style.opacity = '20%'
      }
    })
  })
  // localStorage.setItem('tme', JSON.stringify(Date.now()))

  // console.log(parseInt(localStorage.getItem('tme')!) + 1)
}, 5000)

function onLoad(e: Event) {
  localStorage.setItem('testt', JSON.stringify(e))
}

window.addEventListener('message', async (e: MessageEvent) => {
  await document.requestStorageAccess()
  localStorage.setItem('ttttt', JSON.stringify(e))
  console.log(e)
})

window.addEventListener('click', (e: Event) => {
  // localStorage.setItem('ttttt', e.data)
  // console.log(e.data)
  console.log(e.target)
})