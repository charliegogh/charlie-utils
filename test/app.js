!function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t(require('moment')) : 'function' == typeof define && define.amd ? define(['moment'], t) : (e = 'undefined' != typeof globalThis ? globalThis : e || self)._ = t(e.moment)
}(this, (function (e) {
    'use strict'

    function t(e) {
        return e && 'object' == typeof e && 'default' in e ? e : {default: e}
    }

    var r = t(e)
    const n = {id: 'id', children: 'children', pid: 'pid'}, o = e => Object.assign({}, n, e)
    var a = {
        validTel: e => /^1[3456789]\d{9}$/.test(e),
        validPassword: e => /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{8,16}$/.test(e),
        validEmail: e => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
        validFileName: e => /^[a-zA-Z0-9_()-（）《》\u4e00-\u9fa5]+$/.test(e.split('.')[0]),
        validCardNo: e => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e),
        validExternal: e => /^(https?:|mailto:|tel:)/.test(e)
    }
    var i = {
        formatDict: (e, t = [], r = 'code', n = 'name') => {
            const o = t.find((t => t[r] === e))
            return o ? o[n] : ''
        },
        formatDateYY: (e = null) => r.default(e).format('YYYY'),
        formatDateDD: (e = null) => r.default(e).format('YYYY-MM-DD'),
        formatDateMM: (e = null) => r.default(e).format('YYYY-MM-DD HH:ss:mm'),
        hideMobile: e => e.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2'),
        toFixed: (e, t = 2) => Number(e).toFixed(t)
    }
    var c = {
        append: (e, ...t) => (e.push(...t), e),
        prepend: (e, ...t) => (e.unshift(...t), e),
        insert: (e, t, ...r) => (e.splice(t, 0, ...r), e),
        remove: (e, t) => (e.splice(t, 1), e),
        arrayToObject: (e, t) => e.reduce(((e, r) => (e[r[t]] = {...e[r[t]] || {}, ...r}, e)), {}),
        groupBy: (e, t) => e.reduce(((e, r) => {
            const n = r[t]
            return e[n] || (e[n] = []), e[n].push(r), e
        }), {}),
        pull: (e, ...t) => {
            let r = Array.isArray(t[0]) ? t[0] : t, n = e.filter(((e, t) => !r.includes(e)))
            e.length = 0, n.forEach((t => e.push(t)))
        },
        sum: e => e.reduce(((e, t) => Number(e) + Number(t))),
        average: (...e) => [...e].reduce(((e, t) => e + t), 0) / e.length,
        unique: function (e) {
            return Array.from(new Set(e))
        },
        deWeightThree: (e, t) => {
            const r = new Map
            for (const n of e) r.has(n[t]) || r.set(n[t], n)
            return [...r.values()]
        },
        orderBy: (e, t, r) => [...e].sort(((e, n) => t.reduce(((t, o, a) => {
            if (0 === t) {
                const [i, c] = r && 'desc' === r[a] ? [n[o], e[o]] : [e[o], n[o]]
                t = i > c ? 1 : i < c ? -1 : 0
            }
            return t
        }), 0))),
        arrayMax: e => Math.max(...e),
        arrayMin: e => Math.min(...e)
    }
    const l = e => '[object Object]' === Object.prototype.toString.call(e), s = e => Array.isArray(e),
        u = (e, ...t) => t.reduce(((e, t) => Object.keys(t).reduce(((e, r) => {
            const n = t[r]
            return l(n) ? e[r] = u(e[r] ? e[r] : {}, n) : s(n) ? e[r] = n.map(((t, n) => {
                if (l(t)) {
                    const o = e[r] ? e[r] : []
                    return u(o[n] ? o[n] : {}, t)
                }
                return t
            })) : e[r] = n, e
        }), e)), e), d = e => {
            if (!e && 'object' != typeof e) throw new Error('error arguments', 'deepClone')
            const t = e.constructor === Array ? [] : {}
            return Object.keys(e).forEach((r => {
                e[r] && 'object' == typeof e[r] ? t[r] = d(e[r]) : t[r] = e[r]
            })), t
        }
    var f = {
        isObject: l,
        isArray: s,
        merge: u,
        deepClone: d,
        isEmpty: e => 0 === Reflect.ownKeys(e).length && Object.constructor === Object
    }
    const h = () => {
        const e = document.documentElement.scrollTop || document.body.scrollTop
        e > 0 && (window.requestAnimationFrame(h), window.scrollTo(0, e - e / 8))
    }
    return {
        tree: {
            findNode(e, t, r = {}) {
                const {children: n} = o(r), a = [...e]
                for (let e of a) {
                    if (t(e)) return e
                    e[n] && a.push(...e[n])
                }
                return null
            }, toList: (e, t) => function e(t, r) {
                const {children: n} = o(r)
                return t.reduce(((t, r) => t.concat([r], e(r[n] || []))), [])
            }(e), listToTree(e, t) {
                const {children: r, id: n, pid: a} = o(t), i = e.reduce(((e, t) => (e[t[n]] = t, t[r] = [], e)), {})
                return e.filter((e => (i[e[a]] && i[e[a]][r].push(e), !e[a])))
            }, filter(e, t, r = {}) {
                const {children: n} = o(r)
                return function e(r) {
                    return r.map((e => ({...e}))).filter((r => (r[n] = r[n] && e(r[n]), t(r) || r[n] && r[n].length)))
                }(e)
            }, findPath(e, t, r = {}) {
                r = o(r)
                const n = [], a = [...e], i = new Set, {children: c} = r
                for (; a.length;) {
                    const e = a[0]
                    if (i.has(e)) n.pop(), a.shift() else if (i.add(e), e[c] && a.unshift(...e[c]), n.push(e), t(e)) return n
                }
                return null
            }, findPathAll(e, t, r = {}) {
                r = o(r)
                const n = [], a = [...e], i = [], c = new Set, {children: l} = r
                for (; a.length;) {
                    const e = a[0]
                    c.has(e) ? (n.pop(), a.shift()) : (c.add(e), e[l] && a.unshift(...e[l]), n.push(e), t(e) && i.push([...n]))
                }
                return i
            }, forEach(e, t, r = {}) {
                r = o(r)
                const n = [...e], {children: a} = r
                for (let e = 0; e < n.length; e++) t(n[e]), n[e][a] && n.splice(e + 1, 0, ...n[e][a])
            }, removeNode(e, t, r = {}) {
                r = o(r)
                const {children: n} = r, a = [e]
                for (; a.length;) {
                    const e = a.shift(), r = e.reduce(((e, r, n) => (t(r) && e.push(n), e)), [])
                    r.reverse(), r.forEach((t => e.splice(t, 1)))
                    const o = e.map((e => e[n])).filter((e => e && e.length))
                    a.push(...o)
                }
            }
        }, valid: a, format: i, array: c, object: f, ...{
            getPlainText: e => {
                let t = e
                return e ? (t = t.replace(/\s*/g, ''), t = t.replace(/<[^>]+>/g, ''), t = t.replace(/↵/g, ''), t = t.replace(/[\r\n]/g, ''), t = t.replace(/&nbsp;/g, ''), t = function (e) {
                    const t = {lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"'}
                    return e.replace(/&(lt|gt|nbsp|amp|quot);/gi, (function (e, r) {
                        return t[r]
                    }))
                }(t), t) : null
            },
            getSearchParams: () => {
                const e = new URLSearchParams(window.location.search), t = {}
                for (const [r, n] of e.entries()) t[r] = n
                return t
            },
            smoothScroll: e => {
                document.querySelector(e).scrollIntoView({behavior: 'smooth'})
            },
            createUUID: function () {
                var e = (new Date).getTime()
                return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, (function (t) {
                    var r = (e + 16 * Math.random()) % 16 | 0
                    return e = Math.floor(e / 16), ('x' == t ? r : 3 & r | 8).toString(16)
                }))
            },
            scrollToTop: h,
            judgeDeviceType: () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC'
        }, ...{dayDiff: (e, t) => Math.ceil(Math.abs(e.getTime() - t.getTime()) / 864e5)}
    }
}))
/**/
