/**
 * @param time
 * @returns {string|*}
 * js将时间转换为几分钟前，几小时前，几天前
 */
export const formatTime = function(time) {
    const nowTime = new Date()
    const day = nowTime.getDate()
    const hours = parseInt(nowTime.getHours())
    const minutes = nowTime.getMinutes()
    const timeDay = time.substring(8, 10)
    const timeHours = parseInt(time.substring(11, 13))
    const timeMinutes = time.substring(14, 16)
    const d_day = Math.abs(day - timeDay)
    const d_hours = hours - timeHours
    const d_minutes = Math.abs(minutes - timeMinutes)
    if (d_day <= 1) {
        switch (d_day) {
            case 0:
                if (d_hours === 0 && d_minutes > 0) {
                    return d_minutes + '分钟前'
                } else if (d_hours === 0 && d_minutes === 0) {
                    return '刚刚'
                } else {
                    return d_hours + '小时前'
                }
                break
            case 1:
                if (d_hours < 0) {
                    return (24 + d_hours) + '小时前'
                } else {
                    return d_day + '天前'
                }
                break
        }
    } else if (d_day > 1 && d_day < 10) {
        return d_day + '天前'
    } else {
        return time
    }
}
console.log(formatTime('2020-11-11 08:59:00')) // 37分钟前
