const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
    let [resource, config ] = args;
    resource = 'http://192.168.31.87:8080'+resource
    return await originalFetch(resource, config)
};
window.fetch = async (...args) => {
    let [resource, config] = args;
    let response = await originalFetch(resource, config);
    const json = () =>
        response
            .clone()
            .json()
            .then((data) => ({ ...data}));
    response.json = json;
    return response;
};

const getCookie = name => {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    const arr = document.cookie.match(reg)
    return arr ? unescape(arr[2]) : false
}
const setSearchParams = (url, params) => {
    return url + '?' + Object.keys(params).map(i => i + '=' + params[i]).join('&')
}
const  encodeParams=(params,parentKey='') =>{
    let encodedParams = '';
    for (let key in params) {
        if (typeof params[key] === 'object') {
            if (Array.isArray(params[key])) {
                params[key].forEach((value, index) => {
                    const arrayKey = `${parentKey}[${key}]`;
                    const encodedKey = `${arrayKey}[${index}]`;
                    encodedParams += encodeParams({ [encodedKey]: value });
                });
            } else {
                const nestedKey = parentKey ? `${parentKey}[${key}]` : key;
                encodedParams += encodeParams(params[key], nestedKey);
            }
        } else {
            const encodedKey = parentKey ? `${parentKey}[${key}]` : key;
            encodedParams += `${encodeURIComponent(encodedKey)}=${encodeURIComponent(params[key])}&`;
        }
    }
    return encodedParams;
}
const listToTree = (list) => {
    const {children, id, pid} = {
        children: 'children',
        pid: 'parentId',
        id: 'id'
    }
    const info = list.reduce((map, node) => (map[node[id]] = node, map), {})
    return list.filter(node => {
        if (node[pid] === node[id]) node[pid] = null
        if (info[node[pid]]) {
            if (!info[node[pid]][children]) {
                info[node[pid]][children] = []
            }
            info[node[pid]][children].push(node)
        }
        return !node[pid]
    })
}
const filterTree = (tree, func, config = {}) => {
    const {children} = {
        children: 'children',
    }

    function listFilter(list) {
        return list.map(node => ({...node})).filter(node => {
            node[children] = node[children] && listFilter(node[children])
            return func(node) || (node[children] && node[children].length)
        })
    }

    return listFilter(tree)
}
const arrayToObject = (data, key) => {
    return data.reduce((res, v) => {
        res[v[key]] = {...(res[v[key]] || {}), ...v}
        return res
    }, {})
}
const STATUES = {
    'START': 0, // 初始状态
    'PENDING': 1, // 加载中
    'END': 3, // 结束
    'FAIL': 4, // 失败
}
class MindDisplay {
    constructor(options) {
        this.minderHandle = options.minderHandle || null
        this.chapter = []
        this.xmlNotes = []
        this.chapterNodeType = 13
        this.params = {
            literatureId: 'CJFD|CXGH202302004',
            appId: 'CRSP_PSMC_RELEASE',
            title: '我国城市网络研究的批判性思考',
            //
            fileName: 'CXGH202302004',
            tableName: 'CJFDTOTAL',
            dbCode: 'CJFD',
            //
            from: 'ReadingHistory',
            type: 'psmc',
            fsType: '1'
        }

        // const  { literatureId,appId,title,from} = window.urlData
        // this._params = {
        //     literatureId,
        //     appId,
        //     title,
        //     from
        // }

        this.dataSource = {}
        this.root = {
            data: {}
        }

        this.state = ''
        // 展示方式
        this.display = {
            active: '0',
            options: {
                '0': {
                    name: '按时间生成',
                    code: '0',
                    methods: 'generateDateData',
                    icon: 'icon-msnui-time',
                    state: ''
                },
                '1': {
                    name: '按章节生成',
                    methods: 'generateChapterData',
                    code: '1',
                    icon: 'icon-Catalog',
                    state: ''
                }
            }
        }
    }

    // mind data
    async getMindData(renderOptions = true) {
        try {
            this.updateUIState(STATUES.PENDING)
            await this.getChapterAndNotes()
            const {literatureId, title, appId} = this.params
            const rs = await fetch(`/readApi/mind/Mind/GetNoteMinds?literatureId=${literatureId}&title=${title}&appId=${appId}`)
            const {Data: {MindJson}} = await rs.json()
            this.root.data = MindJson.root.data
            this.dataSource = MindJson
            this.combinationData()
            // 展示
            const display = this.display
            // render
            if (renderOptions) {
                const version = MindJson.version
                if (version && version.includes('__')) {
                    display.active = version.split('__').at(-1)
                }
                this.renderOptions()
            }
            await this[display.options[display.active].methods]()
        } catch (e) {
            console.log(e)
        }
    }

    // 笔记信息
    async getChapterAndNotes() {
        const rs = await fetch(setSearchParams(`/readApi/readApi/api/v1/catalogInfos`, this.params), {
            method: "GET",
            headers: {
                Token: getCookie('Token')
            }
        })
        const {content: {catlogInfos, xmlNotes}} = await rs.json()
        this.xmlNotes = arrayToObject(xmlNotes, 'quote')
        this.chapter = catlogInfos.filter(i=>i.cataTitle!=='前辅')
    }

    // 组合数据
    combinationData() {
        const tar = this.dataSource
        // remove chapter
        this.chapter.forEach(i => {
            removeAndKeepChildren(tar.root.children, i.id)
        })
        const noteList = filterTree(tar.root.children, node => {
            if (this.xmlNotes[node.data.text]) {
                const sectionId = this.xmlNotes[node.data.text].sectionId
                node.data.parentId = sectionId
            }
            node.parentId = node.data.parentId
            return node.data.nodeType !== this.chapterNodeType
        })
        this.chapter = [
            ...this.chapter,
            ...noteList
        ]
        function removeAndKeepChildren(arr, targetId) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].data.id === targetId) {
                    const removedItem = arr.splice(i, 1)[0];
                    arr.splice(i, 0, ...removedItem.children);
                    return;
                } else {
                    removeAndKeepChildren(arr[i].children, targetId);
                }
            }
        }
    }

    // 按时间生成
    async generateDateData() {
        await this.renderMind()
    }

    // 按章节生成
    async generateChapterData() {
        const self = this
        const chapter = listToTree(this.chapter)
        const chapterTree = {
            root: {
                ...this.root,
                children: f(chapter)
            },
            "template": "right",
            "theme": "snow",
            "version": "1.4.43--"
        }

        function f(chapter) {
            return chapter.map(a => {
                const {parentId} = a
                const nodeType = self.chapterNodeType
                if (a.children && a.children.length) {
                    return {
                        data: {
                            id: a.id || a.data.id,
                            colorIndex: 1,
                            isFreeNode: 1,
                            nodeType: a.data ? a.data.nodeType : nodeType,
                            parentId: a.data ? a.data.parentId : parentId,
                            text: a.cataTitle || a.data.text
                        },
                        children: f(a.children)
                    }
                } else {
                    return {
                        data: {
                            colorIndex: 1,
                            isFreeNode: 1,
                            nodeType: a.data ? a.data.nodeType : nodeType,
                            id: a.id || a.data.id,
                            parentId: a.data ? a.data.parentId : parentId,
                            text: a.cataTitle || a.data.text
                        },
                        children: []
                    }
                }
            })
        }

        console.log(chapterTree, '章节数据')
        await this.renderMind(chapterTree)
    }

    // options
    renderOptions() {
        const targetElement = document.querySelector('.mind-display')
        const options = Object.keys(this.display.options)
        const tarOption = this.display.options
        const {active} = this.display
        const codeSnippet = `
            <div class="mind-display__options">
               ${options.map(i =>
            `<div class="mind-display__options-item ${tarOption[i].code === active ? 'mind-display__active' : ''}" data-code=${i}>
                    <i class="iconfont ${tarOption[i].icon}"></i>
                    <i class="iconfont icon-Loading"></i>
                    <span>${tarOption[i].name}</span>
                </div>`).join('')}
            </div>`
        if (!targetElement.querySelector('.mind-display--options')) {
            targetElement.insertAdjacentHTML('afterbegin', codeSnippet)
            this.handleEvent()
        }
    }

    // 事件监听
    handleEvent() {
        const optionsRoot = document.querySelector('.mind-display__options')
        optionsRoot.addEventListener('click', async (e) => {
            if (e.target.classList.contains("mind-display__options-item")) {
                const listItems = optionsRoot.querySelectorAll(".mind-display__options-item");
                listItems.forEach(function (el) {
                    el.classList.remove("mind-display__active");
                });
                e.target.classList.add("mind-display__active");
                this.display.active = e.target.dataset.code
            }
            await this.getMindData(false)
        })
    }

    // render Mind
    async renderMind(options) {
        this.minderHandle.importJson(options || this.dataSource)
        await this.saveMindData()
    }

    // save Mind
    async saveMindData() {
        const json = await this.minderHandle.exportData("json")
        const json2 = JSON.parse(json)
        json2.version = `1.4.43__${this.display.active}`
        const png = await this.minderHandle.exportData("png")
        const data = {
            mindContent: {
                MindJson: JSON.stringify(json2),
                MindName: `${this.params.title}`,
                Thumbnails: png,
            },
            ...this.params,
        }
        const encodedParams = encodeParams(data);
        await fetch(`/readApi/mind/Mind/SaveNodeMind`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encodedParams
        })

        console.log(this)
        await this.updateUIState(STATUES.END)
    }

    // ui 更新
    updateUIState(state) {
        let status = "";
        const ele = document.querySelector(`[data-code="${this.display.active}"]`)
        ele && ele.classList.remove('mind-display__pending')
        switch (state) {
            case STATUES.START:
                break;
            case STATUES.PENDING:
                status = "mind-display__pending";
                ele && ele.classList.add(status)
                break;
            case STATUES.END:
                status = "";
                break;
            case STATUES.FAIL:
                status = "mind-display__fail";
                break;
        }
        this.display.options[this.display.active].state = status
    }

    // render menu
    renderMenu() {

    }
}

export default MindDisplay

