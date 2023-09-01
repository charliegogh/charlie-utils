const data = [
    {
        "id": "CJFD|CXGH202302004_h2_1",
        "parentId": "",
        "literatureId": "CJFD|CXGH202302004",
        "cataTitle": "4 结语",
        "orderNum": 60000,
        "content": null,
        "type": 1,
        "fileCode": null,
        "rootChapterId": "CJFD|CXGH202302004_h1_4",
        "markCount": 0,
        "tagName": null,
        "level": 1,
        "userId": "12558536-d429-4c11-b3a4-9c0b5e981dcc",
        "postTime": "2023/8/11 15:40:17",
        "paras": [],
        "noteSigns": null,
        "catalogHinfo": "<h1 class=\"Chapter\" data-id=\"CJFD|CXGH202302004_h1_4-H\">4 结语</h1>",
        "sourceId": null,
        "srcId": null,
        "srcType": null
    },
    {
        "id": "2d8f95f5-c0d4-4082-834f-d913c9092205",
        "type": "note",
        "text": "群的上海",
        "level": null,
        "layout": null,
        "colorIndex": null,
        "background": null,
        "font-family": "微软雅黑,Microsoft YaHei",
        "font-size": 16,
        "font-weight": null,
        "font-style": null,
        "hyperlink": null,
        "hyperlinkTitle": null,
        "note": null,
        "notedev": null,
        "notemore": null,
        "detail": null,
        "expandState": null,
        "image": "",
        "imageSize": {
            "width": 338,
            "height": 238
        },
        "color": null,
        "appId": "CRSP_PSMC_RELEASE",
        "parentId": "CJFD|CXGH202302004_h2_1",
        "quote": "群的上海",
        "contents": null,
        "isFreeNode": 0,
        "nodeType": 4,
        "children": [
            {
                "data": {
                    "id": "cv5jr48a8sg0",
                    "type": null,
                    "text": "分支主题",
                    "level": null,
                    "layout": null,
                    "colorIndex": "1",
                    "background": null,
                    "font-family": "微软雅黑,Microsoft YaHei",
                    "font-size": 16,
                    "font-weight": null,
                    "font-style": null,
                    "hyperlink": null,
                    "hyperlinkTitle": null,
                    "note": null,
                    "notedev": null,
                    "notemore": null,
                    "detail": null,
                    "expandState": null,
                    "image": null,
                    "imageSize": {
                        "width": 338,
                        "height": 238
                    },
                    "color": null,
                    "appId": null,
                    "parentId": "2d8f95f5-c0d4-4082-834f-d913c9092205",
                    "quote": null,
                    "contents": null,
                    "isFreeNode": 1,
                    "nodeType": 15
                },
                "children": []
            }
        ]
    }
]

const tree = require('../../lib/tree')


const rs = tree.listToTree(data,{
    id: 'id',
    children: 'children',
    pid: 'parentId'
})

console.log(JSON.stringify(rs,null,2))
