class AsyncDataStatus {
  constructor(options) {
    if (!AsyncDataStatus.instance) {
      AsyncDataStatus.instance = this
      this.options = options
      this.asyncNum = 0
      this.totalNum= options.totalNum || 0
      this.render()
    }
    return AsyncDataStatus.instance
  }
  show(asyncNum) {
    this.asyncNum = asyncNum
    document.querySelector('.xe-data__async-status').style.display="flex"
    this.render()
  }
  render() {
    const el = document.querySelector('.xe-data__async-status')?.querySelector('.xe-data__async-status-label')
    if (el) {
      el.innerHTML = `${this.asyncNum}/${this.totalNum}`
      if (this.asyncNum===this.totalNum){
        document.querySelector('.xe-data__async-tip').innerHTML = '同步成功:'
        setTimeout(()=>{
          document.querySelector('.xe-data__async-status').style.display="none"
        },3000)
      }
    } else {
      const dom = `
        <div class="xe-data__async-status" style="display: none;position: fixed;right: 20px;bottom: 3%;">
            <div class="xe-data__async-tip">
                   数据同步中,请耐心等待:
            </div>
            <div class="xe-data__async-status-label" style="display: inline-block;">
            ${this.asyncNum}/${this.totalNum}
            </div>
        </div>      
        `
      const targetElement = document.body
      targetElement.insertAdjacentHTML('afterend', dom)
    }
  }
}
export default AsyncDataStatus
