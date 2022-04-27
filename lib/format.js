import moment from 'moment'
// 格式化字典项
const formatDict = (value, dict = [], compareValue, getValue) => {
    const data = dict.find(item => item[compareValue] === value)
    return data ? data[getValue] : ''
}

export function formatDateDD(value = null) {
    return moment(value).format('YYYY-MM-DD')
}

export function formatDateYY(value = null) {
    return moment(value).format('YYYY')
}

export function formatDateMM(value = null) {
    return moment(value).format('YYYY-MM-DD HH:mm')
}
