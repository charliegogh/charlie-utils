if (navigator.userAgent.indexOf("Chrome") != -1) {
    console.log(chrome)
} else {
}

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
                },200)
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


const asyncDataStatus =new AsyncDataStatus({
    totalNum: 10
})


// 多并发请求
function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}
const request = async (request) => {
    const chunkedRequests = chunkArray(request, 6);
    let completedRequests = 0;
    const completedRequestsElement = document.getElementById("completedRequests");
    for (const [index, chunks] of chunkedRequests.entries()) {
        try {
             await Promise.all(chunks)
            completedRequests += chunks.length;
            asyncDataStatus.show(completedRequests)
            completedRequestsElement.textContent = `Completed Requests: ${completedRequests}`;
        } catch (e) {
            console.error('An error occurred:', e)
        }
    }

};

// const max = Array.from({ length: 10 }, (_, index) => index);
// const map  = max.map(async(i) =>  fetch(`http://47.93.4.29:88/test/?t=${i}`, { method: "post" }));

// request(map)

 fetch('http://g4nuku.natappfree.cc/news/list');

