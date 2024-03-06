import html2canvas from 'html2canvas'

class Screenshot {
  constructor() {
    this.startX = 0
    this.startY = 0
    this.endX = 0
    this.endY = 0
    this.isSelecting = false
    this.overlay = null
    this.selectionBox = null
    this.cb = null
  }

  startSelection(cb) {
    this.cb = cb
    this.overlay = document.createElement('div')
    this.overlay.classList.add('overlay')
    this.overlay.style.position = 'fixed'
    this.overlay.style.top = '0'
    this.overlay.style.left = '0'
    this.overlay.style.width = '100%'
    this.overlay.style.height = '100%'
    this.overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    this.overlay.style.zIndex = '9999'
    this.overlay.style.cursor = 'crosshair'
    document.body.appendChild(this.overlay)

    this.overlay.addEventListener('mousedown', this.handleMouseDown.bind(this))
    this.overlay.addEventListener('mousemove', this.handleMouseMove.bind(this))
    this.overlay.addEventListener('mouseup', this.handleMouseUp.bind(this))
  }

  handleMouseDown(event) {
    this.startX = event.clientX
    this.startY = event.clientY
    this.isSelecting = true
  }

  handleMouseMove(event) {
    if (!this.isSelecting) return

    if (!this.selectionBox) {
      this.selectionBox = document.createElement('div')
      this.selectionBox.classList.add('selection-box')
      this.selectionBox.style.position = 'absolute'
      this.selectionBox.style.border = '2px dashed #000'
      document.body.appendChild(this.selectionBox)
    }

    const width = Math.abs(event.clientX - this.startX)
    const height = Math.abs(event.clientY - this.startY)
    const left = Math.min(this.startX, event.clientX)
    const top = Math.min(this.startY, event.clientY)

    this.selectionBox.style.width = width + 'px'
    this.selectionBox.style.height = height + 'px'
    this.selectionBox.style.left = left + 'px'
    this.selectionBox.style.top = top + 'px'
  }

  handleMouseUp(event) {
    if (!this.isSelecting) return
    this.isSelecting = false
    this.endX = event.clientX
    this.endY = event.clientY

    if (this.overlay) {
      this.overlay.parentNode.removeChild(this.overlay)
      this.overlay = null
    }

    if (this.selectionBox) {
      this.selectionBox.parentNode.removeChild(this.selectionBox)
      this.selectionBox = null
    }

    this.captureScreenshot()
  }

  captureScreenshot() {
    html2canvas(document.body, {
      x: Math.min(this.startX, this.endX),
      y: Math.min(this.startY, this.endY),
      width: Math.abs(this.endX - this.startX),
      height: Math.abs(this.endY - this.startY)
    }).then(canvas => {
      const screenshot = canvas.toDataURL('image/png')
      this.cb(screenshot)
      // const link = document.createElement('a');
      // link.href = screenshot;
      // link.download = 'screenshot.png';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    })
  }
}

export {
  Screenshot
}
