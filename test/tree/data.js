const data = [
    {
        "id": 1,
        "name": "Root",
        "pid": null,
        "children": [
            {
                "id": 2,
                "name": "Child 1",
                "pid": 1,
                "children": [
                    {
                        "id": 3,
                        "name": "Child 1.1",
                        "pid": 2,
                        "children": []
                    },
                    {
                        "id": 4,
                        "name": "Child 1.2",
                        "pid": 2,
                        "children": []
                    }
                ]
            },
            {
                "id": 5,
                "name": "Child 2",
                "pid": 1,
                "children": [
                    {
                        "id": 6,
                        "name": "Child 2.1",
                        "pid": 5,
                        "children": []
                    }
                ]
            }
        ]
    }
];

function removeAndKeepChildren(arr, targetId) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === targetId) {
            const removedItem = arr.splice(i, 1)[0];
            arr.splice(i, 0, ...removedItem.children);
            return;
        } else {
            removeAndKeepChildren(arr[i].children, targetId);
        }
    }
}

removeAndKeepChildren(data, 2);
console.log(JSON.stringify(data,null,2));
