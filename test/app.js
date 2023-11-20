class ErrorMonitor {
    constructor(jsFileName) {
        this.jsFileName = jsFileName;
        // this.init();
        this.showErrorRefreshButton();
    }

    init() {
        window.onerror = (message, source, lineno, colno, error) => {
            if (source.indexOf(this.jsFileName) !== -1) {
                // this.showErrorRefreshButton();
            }
        };
    }

    showErrorRefreshButton() {
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('x-error-container');
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = '抱歉，阅读内容未能正常加载，请点击 <a href="javascript:;" id="refreshLink">【刷新页面】</a> 重试。';
        errorContainer.appendChild(errorMessage);
        document.body.appendChild(errorContainer);
        document.querySelector('#refreshLink')?.addEventListener('click', () => {
            this.refreshPageWithParam();
        });
    }

    refreshPageWithParam() {
        const url = new URL(window.location.href);
        url.searchParams.set('refresh', Date.now());
        window.location.href = url.toString();
    }
}

// 使用ErrorMonitor类
// const errorMonitor = new ErrorMonitor('your_js_file.js'); // 替换成你想监控的JS文件名
new ErrorMonitor()
