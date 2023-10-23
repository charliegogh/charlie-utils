class AsyncDataStatus {
    constructor(options) {
        if (!AsyncDataStatus.instance) {
            AsyncDataStatus.instance = this
            this.options = options
            this.asyncNum = 0
            this.totalNum=100
            this.render()
        }
        return AsyncDataStatus.instance
    }
    render() {
        const el = document.querySelector('.xe-data__async-status').querySelector('.xe-data__async-status-label')
        if (el) {
            el.innerHTML = `${this.asyncNum}/${this.totalNum}`
        } else {
            const dom = `
        <div class="xe-data__async-status" style="display: flex">
            同步进步:
            <div class="xe-data__async-status-label">
            ${this.asyncNum}/${this.totalNum}
            </div>
        </div>      
        `
        const targetElement = document.body
        targetElement.insertAdjacentHTML('afterend', dom)
        }
    }
}


new AsyncDataStatus()
