class ErrorMonitor {
    constructor() {
        this.init();
        this.errorMessages = []
    }

    init() {
        const isIE = /Trident|MSIE/.test(navigator.userAgent);
        if (!isIE) {
            window.onerror = (message, source, lineno, colno, error) => {
                const data = {
                    message,
                    source,
                    lineno,
                    colno,
                    error
                }
                if (!document.querySelector('#x-header-container')){
                    this.errorMessages.push(data)
                    this.updateErrorContainer();
                }
            };
        }
    }
    createErrorContainer() {
        const el = document.querySelector('.x-error-container')
        if (el) return el
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('x-error-container');
        errorContainer.style.position = 'absolute';
        errorContainer.style.left = '0px';
        errorContainer.style.top = '0px';
        return errorContainer;
    }

    updateErrorContainer() {
        this.errorContainer = this.createErrorContainer()
        this.errorContainer.innerHTML = ''; // 清空原有内容
        const reloadContainer = document.createElement('p');
        reloadContainer.classList.add('x-error-container__reload');
        reloadContainer.innerHTML = '抱歉，阅读内容未能正常加载，请点击 <a href="javascript:;" id="reloadAction" style="color: red">【刷新页面】</a> 重试。';
        this.errorContainer.appendChild(reloadContainer);

        this.errorMessages.forEach(error => {
            const sourceElement = document.createElement('div');
            sourceElement.classList.add('source-element');
            sourceElement.innerHTML = `<p>Error source: ${error.source}</p><p>Error message: ${error.message}</p>`;
            const errorMessage = document.createElement('div');
            errorMessage.appendChild(sourceElement);
            this.errorContainer.appendChild(errorMessage);
        });

        if (!document.querySelector('.x-error-container')) {
            document.body.appendChild(this.errorContainer);
        }
        document.querySelector('#reloadAction')?.addEventListener('click', () => {
            this.refreshPageWithParam();
        });
    }
    refreshPageWithParam() {
        const url = new URL(window.location.href);
        url.searchParams.set('refresh', Date.now());
        window.location.replace(url.toString());
    }
}

new ErrorMonitor();
