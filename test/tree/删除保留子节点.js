function mergeTrees(tree1, tree2) {
    const nodeMap = {};

    // 构建第一个树的映射，以节点的 id 为键
    function buildNodeMap(node, parentId) {
        nodeMap[node.id] = { ...node, parentId, children: [] };
        if (node.children) {
            node.children.forEach(child => buildNodeMap(child, node.id));
        }
    }

    buildNodeMap(tree1, null);

    // 将第二个树的节点按照 id 映射到第一个树
    function mergeNode(node) {
        if (nodeMap[node.id]) {
            nodeMap[node.id].children.push(node);
        } else {
            tree1.children.push({ ...node, children: [] });
        }

        if (node.children) {
            node.children.forEach(child => mergeNode(child));
        }
    }

    mergeNode(tree2);

    return tree1;
}

const tree1 = {
    id: 1,
    children: [
        { id: 2, pid: 1, children: [] },
        { id: 3, pid: 1, children: [] }
    ]
};

const tree2 = {
    id: 2,
    children: [
        { id: 4, pid: 2, children: [] },
        { id: 5, pid: 2, children: [] }
    ]
};

const mergedTree = mergeTrees(tree1, tree2);
console.log(JSON.stringify(mergedTree, null, 2));
