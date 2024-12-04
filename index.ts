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
