import {validPassword,validTel} from "./validate";
/* 树查找 */
export const findTree = function (tree, func) {
    for (const data of tree) {
        if (func(data)) return data
        if (data.children) {
            const res = findTree(data.children, func)
            if (res) return res
        }
    }
    return null
}
