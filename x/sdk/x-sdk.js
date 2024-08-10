!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).xsdk = {})
}(this, (function (e) {
    "use strict";

    function t(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function n(e) {
        for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2 ? t(Object(r), !0).forEach((function (t) {
                a(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function r() {
        r = function () {
            return t
        };
        var e, t = {}, n = Object.prototype, i = n.hasOwnProperty, o = Object.defineProperty || function (e, t, n) {
                e[t] = n.value
            }, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator",
            c = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";

        function d(e, t, n) {
            return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
        }

        try {
            d({}, "")
        } catch (e) {
            d = function (e, t, n) {
                return e[t] = n
            }
        }

        function l(e, t, n, r) {
            var i = t && t.prototype instanceof v ? t : v, a = Object.create(i.prototype), s = new E(r || []);
            return o(a, "_invoke", {value: A(e, n, s)}), a
        }

        function p(e, t, n) {
            try {
                return {type: "normal", arg: e.call(t, n)}
            } catch (e) {
                return {type: "throw", arg: e}
            }
        }

        t.wrap = l;
        var f = "suspendedStart", h = "suspendedYield", m = "executing", g = "completed", y = {};

        function v() {
        }

        function w() {
        }

        function b() {
        }

        var x = {};
        d(x, s, (function () {
            return this
        }));
        var k = Object.getPrototypeOf, _ = k && k(k(C([])));
        _ && _ !== n && i.call(_, s) && (x = _);
        var S = b.prototype = v.prototype = Object.create(x);

        function I(e) {
            ["next", "throw", "return"].forEach((function (t) {
                d(e, t, (function (e) {
                    return this._invoke(t, e)
                }))
            }))
        }

        function T(e, t) {
            function n(r, o, a, s) {
                var c = p(e[r], e, o);
                if ("throw" !== c.type) {
                    var u = c.arg, d = u.value;
                    return d && "object" == typeof d && i.call(d, "__await") ? t.resolve(d.__await).then((function (e) {
                        n("next", e, a, s)
                    }), (function (e) {
                        n("throw", e, a, s)
                    })) : t.resolve(d).then((function (e) {
                        u.value = e, a(u)
                    }), (function (e) {
                        return n("throw", e, a, s)
                    }))
                }
                s(c.arg)
            }

            var r;
            o(this, "_invoke", {
                value: function (e, i) {
                    function o() {
                        return new t((function (t, r) {
                            n(e, i, t, r)
                        }))
                    }

                    return r = r ? r.then(o, o) : o()
                }
            })
        }

        function A(t, n, r) {
            var i = f;
            return function (o, a) {
                if (i === m) throw new Error("Generator is already running");
                if (i === g) {
                    if ("throw" === o) throw a;
                    return {value: e, done: !0}
                }
                for (r.method = o, r.arg = a; ;) {
                    var s = r.delegate;
                    if (s) {
                        var c = O(s, r);
                        if (c) {
                            if (c === y) continue;
                            return c
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                        if (i === f) throw i = g, r.arg;
                        r.dispatchException(r.arg)
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    i = m;
                    var u = p(t, n, r);
                    if ("normal" === u.type) {
                        if (i = r.done ? g : h, u.arg === y) continue;
                        return {value: u.arg, done: r.done}
                    }
                    "throw" === u.type && (i = g, r.method = "throw", r.arg = u.arg)
                }
            }
        }

        function O(t, n) {
            var r = n.method, i = t.iterator[r];
            if (i === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
            var o = p(i, t.iterator, n.arg);
            if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, y;
            var a = o.arg;
            return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
        }

        function P(e) {
            var t = {tryLoc: e[0]};
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function L(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function E(e) {
            this.tryEntries = [{tryLoc: "root"}], e.forEach(P, this), this.reset(!0)
        }

        function C(t) {
            if (t || "" === t) {
                var n = t[s];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1, o = function n() {
                        for (; ++r < t.length;) if (i.call(t, r)) return n.value = t[r], n.done = !1, n;
                        return n.value = e, n.done = !0, n
                    };
                    return o.next = o
                }
            }
            throw new TypeError(typeof t + " is not iterable")
        }

        return w.prototype = b, o(S, "constructor", {value: b, configurable: !0}), o(b, "constructor", {
            value: w,
            configurable: !0
        }), w.displayName = d(b, u, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name))
        }, t.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, d(e, u, "GeneratorFunction")), e.prototype = Object.create(S), e
        }, t.awrap = function (e) {
            return {__await: e}
        }, I(T.prototype), d(T.prototype, c, (function () {
            return this
        })), t.AsyncIterator = T, t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new T(l(e, n, r, i), o);
            return t.isGeneratorFunction(n) ? a : a.next().then((function (e) {
                return e.done ? e.value : a.next()
            }))
        }, I(S), d(S, u, "Generator"), d(S, s, (function () {
            return this
        })), d(S, "toString", (function () {
            return "[object Generator]"
        })), t.keys = function (e) {
            var t = Object(e), n = [];
            for (var r in t) n.push(r);
            return n.reverse(), function e() {
                for (; n.length;) {
                    var r = n.pop();
                    if (r in t) return e.value = r, e.done = !1, e
                }
                return e.done = !0, e
            }
        }, t.values = C, E.prototype = {
            constructor: E, reset: function (t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(L), !t) for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            }, stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            }, dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;

                function r(r, i) {
                    return s.type = "throw", s.arg = t, n.next = r, i && (n.method = "next", n.arg = e), !!i
                }

                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o], s = a.completion;
                    if ("root" === a.tryLoc) return r("end");
                    if (a.tryLoc <= this.prev) {
                        var c = i.call(a, "catchLoc"), u = i.call(a, "finallyLoc");
                        if (c && u) {
                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                        } else if (c) {
                            if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                        }
                    }
                }
            }, abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(a)
            }, complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
            }, finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), y
                }
            }, catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            L(n)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            }, delegateYield: function (t, n, r) {
                return this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r
                }, "next" === this.method && (this.arg = e), y
            }
        }, t
    }

    function i(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a), c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, d(r.key), r)
        }
    }

    function a(e, t, n) {
        return (t = d(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, i, o, a, s = [], c = !0, u = !1;
                try {
                    if (o = (n = n.call(e)).next, 0 === t) {
                        if (Object(n) !== n) return;
                        c = !1
                    } else for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
                } catch (e) {
                    u = !0, i = e
                } finally {
                    try {
                        if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                    } finally {
                        if (u) throw i
                    }
                }
                return s
            }
        }(e, t) || c(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e, t) {
        if (e) {
            if ("string" == typeof e) return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
        }
    }

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e) {
        var t = function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
    }

    var l = function (e, t) {
        return e(t = {exports: {}}, t.exports), t.exports
    }((function (e) {
        var t;
        t = "object" == typeof window && window, e.exports = function (e, t) {
            var n, r, i, o, a, s, c, u, d, l, p, f, h, m, g, y, v, w, b, x, k, _;
            if (e) return e.jWeixin ? e.jWeixin : (n = {
                config: "preVerifyJSAPI",
                onMenuShareTimeline: "menu:share:timeline",
                onMenuShareAppMessage: "menu:share:appmessage",
                onMenuShareQQ: "menu:share:qq",
                onMenuShareWeibo: "menu:share:weiboApp",
                onMenuShareQZone: "menu:share:QZone",
                previewImage: "imagePreview",
                getLocation: "geoLocation",
                openProductSpecificView: "openProductViewWithPid",
                addCard: "batchAddCard",
                openCard: "batchViewCard",
                chooseWXPay: "getBrandWCPayRequest",
                openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
                startSearchBeacons: "startMonitoringBeacons",
                stopSearchBeacons: "stopMonitoringBeacons",
                onSearchBeacons: "onBeaconsInRange",
                consumeAndShareCard: "consumedShareCard",
                openAddress: "editAddress"
            }, r = function () {
                var e, t = {};
                for (e in n) t[n[e]] = e;
                return t
            }(), i = e.document, o = i.title, a = navigator.userAgent.toLowerCase(), f = navigator.platform.toLowerCase(), s = !(!f.match("mac") && !f.match("win")), c = -1 != a.indexOf("wxdebugger"), u = -1 != a.indexOf("micromessenger"), d = -1 != a.indexOf("android"), l = -1 != a.indexOf("iphone") || -1 != a.indexOf("ipad"), p = (f = a.match(/micromessenger\/(\d+\.\d+\.\d+)/) || a.match(/micromessenger\/(\d+\.\d+)/)) ? f[1] : "", h = {
                initStartTime: C(),
                initEndTime: 0,
                preVerifyStartTime: 0,
                preVerifyEndTime: 0
            }, m = {
                version: 1,
                appId: "",
                initTime: 0,
                preVerifyTime: 0,
                networkType: "",
                isPreVerifyOk: 1,
                systemType: l ? 1 : d ? 2 : -1,
                clientVersion: p,
                url: encodeURIComponent(location.href)
            }, g = {}, y = {_completes: []}, v = {state: 0, data: {}}, M((function () {
                h.initEndTime = C()
            })), w = !1, b = [], x = {
                config: function (t) {
                    L("config", g = t);
                    var r = !1 !== g.check;
                    M((function () {
                        if (r) S(n.config, {
                            verifyJsApiList: P(g.jsApiList),
                            verifyOpenTagList: P(g.openTagList)
                        }, (y._complete = function (e) {
                            h.preVerifyEndTime = C(), v.state = 1, v.data = e
                        }, y.success = function (e) {
                            m.isPreVerifyOk = 0
                        }, y.fail = function (e) {
                            y._fail ? y._fail(e) : v.state = -1
                        }, (o = y._completes).push((function () {
                            E()
                        })), y.complete = function (e) {
                            for (var t = 0, n = o.length; t < n; ++t) o[t]();
                            y._completes = []
                        }, y)), h.preVerifyStartTime = C(); else {
                            v.state = 1;
                            for (var e = y._completes, t = 0, i = e.length; t < i; ++t) e[t]();
                            y._completes = []
                        }
                        var o
                    })), x.invoke || (x.invoke = function (t, n, r) {
                        e.WeixinJSBridge && WeixinJSBridge.invoke(t, T(n), r)
                    }, x.on = function (t, n) {
                        e.WeixinJSBridge && WeixinJSBridge.on(t, n)
                    })
                }, ready: function (e) {
                    (0 != v.state || (y._completes.push(e), !u && g.debug)) && e()
                }, error: function (e) {
                    p < "6.0.2" || (-1 == v.state ? e(v.data) : y._fail = e)
                }, checkJsApi: function (e) {
                    S("checkJsApi", {jsApiList: P(e.jsApiList)}, (e._complete = function (e) {
                        d && (n = e.checkResult) && (e.checkResult = JSON.parse(n));
                        var t, n = e, i = n.checkResult;
                        for (t in i) {
                            var o = r[t];
                            o && (i[o] = i[t], delete i[t])
                        }
                    }, e))
                }, onMenuShareTimeline: function (e) {
                    I(n.onMenuShareTimeline, {
                        complete: function () {
                            S("shareTimeline", {
                                title: e.title || o,
                                desc: e.title || o,
                                img_url: e.imgUrl || "",
                                link: e.link || location.href,
                                type: e.type || "link",
                                data_url: e.dataUrl || ""
                            }, e)
                        }
                    }, e)
                }, onMenuShareAppMessage: function (e) {
                    I(n.onMenuShareAppMessage, {
                        complete: function (t) {
                            "favorite" === t.scene ? S("sendAppMessage", {
                                title: e.title || o,
                                desc: e.desc || "",
                                link: e.link || location.href,
                                img_url: e.imgUrl || "",
                                type: e.type || "link",
                                data_url: e.dataUrl || ""
                            }) : S("sendAppMessage", {
                                title: e.title || o,
                                desc: e.desc || "",
                                link: e.link || location.href,
                                img_url: e.imgUrl || "",
                                type: e.type || "link",
                                data_url: e.dataUrl || ""
                            }, e)
                        }
                    }, e)
                }, onMenuShareQQ: function (e) {
                    I(n.onMenuShareQQ, {
                        complete: function () {
                            S("shareQQ", {
                                title: e.title || o,
                                desc: e.desc || "",
                                img_url: e.imgUrl || "",
                                link: e.link || location.href
                            }, e)
                        }
                    }, e)
                }, onMenuShareWeibo: function (e) {
                    I(n.onMenuShareWeibo, {
                        complete: function () {
                            S("shareWeiboApp", {
                                title: e.title || o,
                                desc: e.desc || "",
                                img_url: e.imgUrl || "",
                                link: e.link || location.href
                            }, e)
                        }
                    }, e)
                }, onMenuShareQZone: function (e) {
                    I(n.onMenuShareQZone, {
                        complete: function () {
                            S("shareQZone", {
                                title: e.title || o,
                                desc: e.desc || "",
                                img_url: e.imgUrl || "",
                                link: e.link || location.href
                            }, e)
                        }
                    }, e)
                }, updateTimelineShareData: function (e) {
                    S("updateTimelineShareData", {title: e.title, link: e.link, imgUrl: e.imgUrl}, e)
                }, updateAppMessageShareData: function (e) {
                    S("updateAppMessageShareData", {title: e.title, desc: e.desc, link: e.link, imgUrl: e.imgUrl}, e)
                }, startRecord: function (e) {
                    S("startRecord", {}, e)
                }, stopRecord: function (e) {
                    S("stopRecord", {}, e)
                }, onVoiceRecordEnd: function (e) {
                    I("onVoiceRecordEnd", e)
                }, playVoice: function (e) {
                    S("playVoice", {localId: e.localId}, e)
                }, pauseVoice: function (e) {
                    S("pauseVoice", {localId: e.localId}, e)
                }, stopVoice: function (e) {
                    S("stopVoice", {localId: e.localId}, e)
                }, onVoicePlayEnd: function (e) {
                    I("onVoicePlayEnd", e)
                }, uploadVoice: function (e) {
                    S("uploadVoice", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
                }, downloadVoice: function (e) {
                    S("downloadVoice", {serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
                }, translateVoice: function (e) {
                    S("translateVoice", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
                }, chooseImage: function (e) {
                    S("chooseImage", {
                        scene: "1|2",
                        count: e.count || 9,
                        sizeType: e.sizeType || ["original", "compressed"],
                        sourceType: e.sourceType || ["album", "camera"]
                    }, (e._complete = function (e) {
                        if (d) {
                            var t = e.localIds;
                            try {
                                t && (e.localIds = JSON.parse(t))
                            } catch (e) {
                            }
                        }
                    }, e))
                }, getLocation: function (e) {
                    e = e || {}, S(n.getLocation, {type: e.type || "wgs84"}, (e._complete = function (e) {
                        delete e.type
                    }, e))
                }, previewImage: function (e) {
                    S(n.previewImage, {current: e.current, urls: e.urls}, e)
                }, uploadImage: function (e) {
                    S("uploadImage", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
                }, downloadImage: function (e) {
                    S("downloadImage", {serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
                }, getLocalImgData: function (e) {
                    !1 === w ? (w = !0, S("getLocalImgData", {localId: e.localId}, (e._complete = function (e) {
                        var t;
                        w = !1, 0 < b.length && (t = b.shift(), wx.getLocalImgData(t))
                    }, e))) : b.push(e)
                }, getNetworkType: function (e) {
                    S("getNetworkType", {}, (e._complete = function (e) {
                        var t = e, n = (e = t.errMsg, t.errMsg = "getNetworkType:ok", t.subtype);
                        if (delete t.subtype, n) t.networkType = n; else {
                            n = e.indexOf(":");
                            var r = e.substring(n + 1);
                            switch (r) {
                                case"wifi":
                                case"edge":
                                case"wwan":
                                    t.networkType = r;
                                    break;
                                default:
                                    t.errMsg = "getNetworkType:fail"
                            }
                        }
                    }, e))
                }, openLocation: function (e) {
                    S("openLocation", {
                        latitude: e.latitude,
                        longitude: e.longitude,
                        name: e.name || "",
                        address: e.address || "",
                        scale: e.scale || 28,
                        infoUrl: e.infoUrl || ""
                    }, e)
                }, hideOptionMenu: function (e) {
                    S("hideOptionMenu", {}, e)
                }, showOptionMenu: function (e) {
                    S("showOptionMenu", {}, e)
                }, closeWindow: function (e) {
                    S("closeWindow", {}, e = e || {})
                }, hideMenuItems: function (e) {
                    S("hideMenuItems", {menuList: e.menuList}, e)
                }, showMenuItems: function (e) {
                    S("showMenuItems", {menuList: e.menuList}, e)
                }, hideAllNonBaseMenuItem: function (e) {
                    S("hideAllNonBaseMenuItem", {}, e)
                }, showAllNonBaseMenuItem: function (e) {
                    S("showAllNonBaseMenuItem", {}, e)
                }, scanQRCode: function (e) {
                    S("scanQRCode", {
                        needResult: (e = e || {}).needResult || 0,
                        scanType: e.scanType || ["qrCode", "barCode"]
                    }, (e._complete = function (e) {
                        var t;
                        l && (t = e.resultStr) && (t = JSON.parse(t), e.resultStr = t && t.scan_code && t.scan_code.scan_result)
                    }, e))
                }, openAddress: function (e) {
                    S(n.openAddress, {}, (e._complete = function (e) {
                        e.postalCode = e.addressPostalCode, delete e.addressPostalCode, e.provinceName = e.proviceFirstStageName, delete e.proviceFirstStageName, e.cityName = e.addressCitySecondStageName, delete e.addressCitySecondStageName, e.countryName = e.addressCountiesThirdStageName, delete e.addressCountiesThirdStageName, e.detailInfo = e.addressDetailInfo, delete e.addressDetailInfo
                    }, e))
                }, openProductSpecificView: function (e) {
                    S(n.openProductSpecificView, {pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo}, e)
                }, addCard: function (e) {
                    for (var t = e.cardList, r = [], i = 0, o = t.length; i < o; ++i) {
                        var a = {card_id: (a = t[i]).cardId, card_ext: a.cardExt};
                        r.push(a)
                    }
                    S(n.addCard, {card_list: r}, (e._complete = function (e) {
                        if (t = e.card_list) {
                            for (var t, n = 0, r = (t = JSON.parse(t)).length; n < r; ++n) {
                                var i = t[n];
                                i.cardId = i.card_id, i.cardExt = i.card_ext, i.isSuccess = !!i.is_succ, delete i.card_id, delete i.card_ext, delete i.is_succ
                            }
                            e.cardList = t, delete e.card_list
                        }
                    }, e))
                }, chooseCard: function (e) {
                    S("chooseCard", {
                        app_id: g.appId,
                        location_id: e.shopId || "",
                        sign_type: e.signType || "SHA1",
                        card_id: e.cardId || "",
                        card_type: e.cardType || "",
                        card_sign: e.cardSign,
                        time_stamp: e.timestamp + "",
                        nonce_str: e.nonceStr
                    }, (e._complete = function (e) {
                        e.cardList = e.choose_card_info, delete e.choose_card_info
                    }, e))
                }, openCard: function (e) {
                    for (var t = e.cardList, r = [], i = 0, o = t.length; i < o; ++i) {
                        var a = {card_id: (a = t[i]).cardId, code: a.code};
                        r.push(a)
                    }
                    S(n.openCard, {card_list: r}, e)
                }, consumeAndShareCard: function (e) {
                    S(n.consumeAndShareCard, {consumedCardId: e.cardId, consumedCode: e.code}, e)
                }, chooseWXPay: function (e) {
                    S(n.chooseWXPay, A(e), e), E({jsApiName: "chooseWXPay"})
                }, openEnterpriseRedPacket: function (e) {
                    S(n.openEnterpriseRedPacket, A(e), e)
                }, startSearchBeacons: function (e) {
                    S(n.startSearchBeacons, {ticket: e.ticket}, e)
                }, stopSearchBeacons: function (e) {
                    S(n.stopSearchBeacons, {}, e)
                }, onSearchBeacons: function (e) {
                    I(n.onSearchBeacons, e)
                }, openEnterpriseChat: function (e) {
                    S("openEnterpriseChat", {useridlist: e.userIds, chatname: e.groupName}, e)
                }, launchMiniProgram: function (e) {
                    S("launchMiniProgram", {
                        targetAppId: e.targetAppId, path: function (e) {
                            var t;
                            if ("string" == typeof e && 0 < e.length) return t = e.split("?")[0], t += ".html", void 0 !== (e = e.split("?")[1]) ? t + "?" + e : t
                        }(e.path), envVersion: e.envVersion
                    }, e)
                }, openBusinessView: function (e) {
                    S("openBusinessView", {
                        businessType: e.businessType,
                        queryString: e.queryString || "",
                        envVersion: e.envVersion
                    }, (e._complete = function (e) {
                        if (d) {
                            var t = e.extraData;
                            if (t) try {
                                e.extraData = JSON.parse(t)
                            } catch (t) {
                                e.extraData = {}
                            }
                        }
                    }, e))
                }, miniProgram: {
                    navigateBack: function (e) {
                        e = e || {}, M((function () {
                            S("invokeMiniProgramAPI", {name: "navigateBack", arg: {delta: e.delta || 1}}, e)
                        }))
                    }, navigateTo: function (e) {
                        M((function () {
                            S("invokeMiniProgramAPI", {name: "navigateTo", arg: {url: e.url}}, e)
                        }))
                    }, redirectTo: function (e) {
                        M((function () {
                            S("invokeMiniProgramAPI", {name: "redirectTo", arg: {url: e.url}}, e)
                        }))
                    }, switchTab: function (e) {
                        M((function () {
                            S("invokeMiniProgramAPI", {name: "switchTab", arg: {url: e.url}}, e)
                        }))
                    }, reLaunch: function (e) {
                        M((function () {
                            S("invokeMiniProgramAPI", {name: "reLaunch", arg: {url: e.url}}, e)
                        }))
                    }, postMessage: function (e) {
                        M((function () {
                            S("invokeMiniProgramAPI", {name: "postMessage", arg: e.data || {}}, e)
                        }))
                    }, getEnv: function (t) {
                        M((function () {
                            t({miniprogram: "miniprogram" === e.__wxjs_environment})
                        }))
                    }
                }
            }, k = 1, _ = {}, i.addEventListener("error", (function (e) {
                var t, n, r;
                d || (r = (t = e.target).tagName, n = t.src, "IMG" != r && "VIDEO" != r && "AUDIO" != r && "SOURCE" != r) || -1 != n.indexOf("wxlocalresource://") && (e.preventDefault(), e.stopPropagation(), (r = t["wx-id"]) || (r = k++, t["wx-id"] = r), _[r] || (_[r] = !0, wx.ready((function () {
                    wx.getLocalImgData({
                        localId: n, success: function (e) {
                            t.src = e.localData
                        }
                    })
                }))))
            }), !0), i.addEventListener("load", (function (e) {
                var t;
                d || (t = (e = e.target).tagName, e.src, "IMG" != t && "VIDEO" != t && "AUDIO" != t && "SOURCE" != t) || (t = e["wx-id"]) && (_[t] = !1)
            }), !0), t && (e.wx = e.jWeixin = x), x);

            function S(t, n, r) {
                e.WeixinJSBridge ? WeixinJSBridge.invoke(t, T(n), (function (e) {
                    O(t, e, r)
                })) : L(t, r)
            }

            function I(t, n, r) {
                e.WeixinJSBridge ? WeixinJSBridge.on(t, (function (e) {
                    r && r.trigger && r.trigger(e), O(t, e, n)
                })) : L(t, r || n)
            }

            function T(e) {
                return (e = e || {}).appId = g.appId, e.verifyAppId = g.appId, e.verifySignType = "sha1", e.verifyTimestamp = g.timestamp + "", e.verifyNonceStr = g.nonceStr, e.verifySignature = g.signature, e
            }

            function A(e) {
                return {
                    timeStamp: e.timestamp + "",
                    nonceStr: e.nonceStr,
                    package: e.package,
                    paySign: e.paySign,
                    signType: e.signType || "SHA1"
                }
            }

            function O(e, t, n) {
                "openEnterpriseChat" != e && "openBusinessView" !== e || (t.errCode = t.err_code), delete t.err_code, delete t.err_desc, delete t.err_detail;
                var i = t.errMsg;
                switch (i || (i = t.err_msg, delete t.err_msg, i = function (e, t) {
                    var n, i = r[e];
                    return i && (e = i), i = "ok", t && (n = t.indexOf(":"), "access denied" != (i = (i = (i = -1 != (i = -1 != (i = "failed" == (i = "confirm" == (i = t.substring(n + 1)) ? "ok" : i) ? "fail" : i).indexOf("failed_") ? i.substring(7) : i).indexOf("fail_") ? i.substring(5) : i).replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != i || (i = "permission denied"), "" == (i = "config" == e && "function not exist" == i ? "ok" : i)) && (i = "fail"), e + ":" + i
                }(e, i), t.errMsg = i), (n = n || {})._complete && (n._complete(t), delete n._complete), i = t.errMsg || "", g.debug && !n.isInnerInvoke && alert(JSON.stringify(t)), e = i.indexOf(":"), i.substring(e + 1)) {
                    case"ok":
                        n.success && n.success(t);
                        break;
                    case"cancel":
                        n.cancel && n.cancel(t);
                        break;
                    default:
                        n.fail && n.fail(t)
                }
                n.complete && n.complete(t)
            }

            function P(e) {
                if (e) {
                    for (var t = 0, r = e.length; t < r; ++t) {
                        var i = e[t];
                        (i = n[i]) && (e[t] = i)
                    }
                    return e
                }
            }

            function L(e, t) {
                var n;
                !g.debug || t && t.isInnerInvoke || ((n = r[e]) && (e = n), t && t._complete && delete t._complete, console.log('"' + e + '",', t || ""))
            }

            function E(e) {
                var t;
                s || c || g.debug || p < "6.0.2" || m.systemType < 0 || (t = new Image, m.appId = g.appId, m.initTime = h.initEndTime - h.initStartTime, m.preVerifyTime = h.preVerifyEndTime - h.preVerifyStartTime, x.getNetworkType({
                    isInnerInvoke: !0,
                    success: function (n) {
                        m.networkType = n.networkType, n = "https://open.weixin.qq.com/sdk/report?v=" + m.version + "&o=" + m.isPreVerifyOk + "&s=" + m.systemType + "&c=" + m.clientVersion + "&a=" + m.appId + "&n=" + m.networkType + "&i=" + m.initTime + "&p=" + m.preVerifyTime + "&u=" + m.url + "&jsapi_name=" + (e ? e.jsApiName : ""), t.src = n
                    }
                }))
            }

            function C() {
                return (new Date).getTime()
            }

            function M(t) {
                u && (e.WeixinJSBridge ? t() : i.addEventListener && i.addEventListener("WeixinJSBridgeReady", t, !1))
            }

            console.warn("can't use weixin-js-sdk in server side")
        }(t)
    })), p = function (e) {
        var t, n = {}, r = function (e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = c(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0, i = function () {
                    };
                    return {
                        s: i, n: function () {
                            return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                        }, e: function (e) {
                            throw e
                        }, f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, s = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    s = !0, o = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }(new URLSearchParams(window.location.search).entries());
        try {
            for (r.s(); !(t = r.n()).done;) {
                var i = s(t.value, 2), o = i[0], a = i[1];
                n[o] = a
            }
        } catch (e) {
            r.e(e)
        } finally {
            r.f()
        }
        return e ? n[e] : n
    }, f = function (e, t) {
        return e + "?" + Object.keys(t).map((function (e) {
            return e + "=" + t[e]
        })).join("&")
    };
    !function (e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
            var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
            i.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
        }
    }(".x-openApp{\r\n  position: relative;\r\n}\r\n.xsdk-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 66666;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n.xsdk-dialog {\r\n  z-index: 666671111111;\r\n  position: fixed;\r\n  top: 45%;\r\n  left: 50%;\r\n  width: 80vw;\r\n  overflow: hidden;\r\n  font-size: 16px;\r\n  background-color: #fff;\r\n  border-radius: 12px;\r\n  -webkit-transform: translate3d(-50%, -50%, 0);\r\n  transform: translate3d(-50%, -50%, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  -webkit-transition-property: opacity, -webkit-transform;\r\n  transition-property: opacity, -webkit-transform;\r\n  transition-property: transform, opacity;\r\n  transition-property: transform, opacity, -webkit-transform;\r\n}\r\n.xsdk-dialog__footer{\r\n  display: flex;\r\n  overflow: hidden;\r\n}\r\n.xsdk-dialog__message{\r\n  overflow-y: auto;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  padding: 40px 0;\r\n  text-align: center;\r\n  word-wrap: break-word;\r\n}\r\n.xsdk-button{\r\n  width: 100%;\r\n  position: relative;\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n  height: 44px;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 16px;\r\n  line-height: 1.2;\r\n  text-align: center;\r\n  border-radius: 2px;\r\n  cursor: pointer;\r\n  -webkit-transition: opacity 0.2s;\r\n  transition: opacity 0.2s;\r\n  -webkit-appearance: none;\r\n  border: 1px solid #ebedf0;\r\n  background:#fff;\r\n  outline: none;\r\n}\r\n.xsdk-dialog__confirm{\r\n  color: #487EFF;\r\n}\r\n");
    var h = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.options = {target: "read"}, this.env = "", this.openApp = this.openApp.bind(this), this.shareWx = this.shareWx.bind(this), this.errorCb = this.errorCb.bind(this), this.launchCb = this.launchCb.bind(this), this.initEnv()
        }

        var t, a, s, c, u;
        return t = e, a = [{
            key: "initEnv", value: function () {
                var e = window.navigator.userAgent, t = window.orientation, n = window.screen.width;
                if (void 0 === t) this.env = "PC"; else {
                    var r = e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
                        i = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), o = e.indexOf("MicroMessenger") > -1,
                        a = e.indexOf("QQTheme") > -1, s = "weibo" == e.toLowerCase().match(/WeiBo/i),
                        c = n >= 500 && n <= 1200, u = -1 !== e.indexOf("psmc");
                    o ? this.env = r ? "Android_wx" : "ios_wx" : a ? this.env = r ? "Android_qq" : "ios_qq" : s ? this.env = r ? "Android_wb" : "ios_wb" : u ? this.env = r ? "Android_yx" : "ios_yx" : (this.env = r ? c ? "Android_pad" : "Android" : i ? c ? "ios_pad" : "ios" : "pad", this.env.includes("pad") && this.readTest())
                }
                console.log("xsdk: current env " + this.env)
            }
        }, {
            key: "initWXJsdk", value: function () {
                var e = this;
                return new Promise((function (t, n) {
                    var r = document.domain.split(".")[0];
                    fetch("".concat({
                        xtest: "https://xfat.cnki.net/read/litNotes/",
                        x: "https://ix.cnki.net/read/litNotes/"
                    }[r], "getWeChatModel?url=").concat(encodeURIComponent(window.location.href))).then((function (e) {
                        return e.json()
                    })).then((function (n) {
                        var r;
                        l.config({
                            debug: (null === (r = e.options) || void 0 === r ? void 0 : r.debug) || !1,
                            appId: "wx549fe1c34185bae9",
                            timestamp: n.content.timeStamp,
                            nonceStr: n.content.noncestr,
                            signature: n.content.signature,
                            jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"],
                            openTagList: ["wx-open-launch-app"]
                        }), l.ready((function () {
                            t({code: 0})
                        })), l.error((function (e) {
                            "config:ok" != e.errMsg && t({
                                code: 40001,
                                msg: "wx sdk config error"
                            }), console.log("错误：", e, JSON.stringify(e))
                        }))
                    }))
                }))
            }
        }, {
            key: "launchCb", value: function (e) {
                console.log("success", e, e.detail, JSON.stringify(e.detail)), this.options.success("success")
            }
        }, {
            key: "errorCb", value: function () {
                this.options.error({code: 40002, msg: "wx open app error"})
            }
        }, {
            key: "openApp", value: (c = r().mark((function e(t) {
                var i, o, a, s, c, u, d, l, h, m, g, y, v = this;
                return r().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (this.options = t, o = this.env, 0 !== (a = document.getElementsByClassName("x-openApp")).length) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return");
                        case 5:
                            if (s = p(), s = this.options.params ? n(n({}, this.options.params), s) : s, !o.includes("wx")) {
                                e.next = 21;
                                break
                            }
                            return e.next = 10, this.initWXJsdk();
                        case 10:
                            if (0 !== (c = e.sent).code) {
                                e.next = 20;
                                break
                            }
                            for (u = JSON.stringify(t.extinfo || {
                                action: "readService",
                                actionUrl: window.location.href
                            }), d = 0; d < a.length; d++) o.includes("wx") && (l = '\n           <wx-open-launch-app class="wx2app-btn"\n                          appid="wx86fb62b7b6e1dea7"\n                          extinfo='.concat(u, '\n                            style="position:absolute;top:0;left:0;right: 0;bottom:0;width: 100%;height: 100%;"\n                          >\n          <script type="text/wxtag-template">\n              <span style="width:100%;height:100%;display:inline-block;position: absolute;left: 0;right: 0;bottom: 0;opacity: 0;">open app</span>\n          <\/script>\n      </wx-open-launch-app>\n      '), a[d].innerHTML += l);
                            if (0 !== (h = document.getElementsByClassName("wx2app-btn")).length) {
                                e.next = 17;
                                break
                            }
                            return e.abrupt("return");
                        case 17:
                            for (m = 0; m < h.length; m++) h[m].addEventListener("launch", this.launchCb), h[m].addEventListener("error", this.errorCb);
                            e.next = 21;
                            break;
                        case 20:
                            for (g = 0; g < a.length; g++) a[g].addEventListener("click", (function () {
                                v.options.error(c)
                            }));
                        case 21:
                            if (["Android_pad", "ios_pad", "pad", "Android", "ios", "Android_wb", "ios_wb", "Android_qq", "ios_qq"].includes(o)) for (y = 0; y < a.length; y++) a[y].addEventListener("click", (function () {
                                v.targetApp(s)
                            }));
                            null !== (i = this.options) && void 0 !== i && i.envCb && this.options.envCb({
                                env: o,
                                params: s,
                                urlParams: f("", s)
                            });
                        case 23:
                        case"end":
                            return e.stop()
                    }
                }), e, this)
            })), u = function () {
                var e = this, t = arguments;
                return new Promise((function (n, r) {
                    var o = c.apply(e, t);

                    function a(e) {
                        i(o, n, r, a, s, "next", e)
                    }

                    function s(e) {
                        i(o, n, r, a, s, "throw", e)
                    }

                    a(void 0)
                }))
            }, function (e) {
                return u.apply(this, arguments)
            })
        }, {
            key: "targetApp", value: function (e) {
                var t = this.env;
                if (t.includes("qq") || t.includes("wb")) this.options.error({
                    code: 40002,
                    msg: t + "open app error"
                }); else {
                    var n = "psmc://", r = Date.now(), i = window.location.host + "/" + this.options.target + f("", e);
                    console.log(n + i + "唤起地址"), window.location.href = n + i;
                    var o = setInterval((function () {
                        Date.now() - r > 3e3 && (clearInterval(o), ["Android_pad", "pad", "Android"].includes(t) && (window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=cnki.net.psmc", function (e) {
                            var t = document.createElement("div");
                            t.className = "xsdk-overlay";
                            var n = document.createElement("div");
                            n.className = "xsdk-dialog", n.innerHTML = '\n    <div class="xsdk-dialog__content">\n        <div class="xsdk-dialog__message">请前往安装知网研学APP</div>\n        <div class="xsdk-hairline--top xsdk-dialog__footer">\n            <button type="button" class="xsdk-button xsdk-dialog__cancel">\n                <div class="xsdk-button__content"><span class="xsdk-button__text">取消</span></div>\n            </button>\n            <button type="button" class="xsdk-button xsdk-dialog__confirm">\n                <div class="xsdk-button__content"><span class="xsdk-button__text">确认</span></div>\n            </button>\n        </div>\n    </div>\n', document.body.appendChild(t), document.body.appendChild(n), document.querySelector(".xsdk-dialog__cancel").addEventListener("click", (function () {
                                document.querySelector(".xsdk-overlay").style.display = "none", document.querySelector(".xsdk-dialog").style.display = "none"
                            })), document.querySelector(".xsdk-dialog__confirm").addEventListener("click", (function () {
                                e()
                            }))
                        }((function () {
                            window.location.href = "market://details?id=cnki.net.psmc"
                        }))), ["ios_pad", "ios"].includes(t) && (window.location.href = "https://itunes.apple.com/cn/app/apple-store/id1459607218"))
                    }), 1e3)
                }
            }
        }, {
            key: "shareWx", value: function (e) {
                var t = this, r = n({
                    title: "研学微信分享测试",
                    desc: "研学微信分享测试",
                    link: "https://x.cnki.net/web/test",
                    imgUrl: "https://x.cnki.net/web/test/logo.jpg"
                }, e), i = e.success;
                return new Promise((function (e) {
                    t.initWXJsdk().then((function () {
                        l.updateAppMessageShareData(n(n({}, r), {}, {
                            success: function (t) {
                                e(t), i && i("success")
                            }
                        }))
                    }))
                }))
            }
        }, {
            key: "readTest", value: function () {
                var e, t = this, n = document.querySelector(".ChapterContainerWrap");
                n && (n.addEventListener("touchstart", (function (n) {
                    clearTimeout(e), e = setTimeout((function () {
                        var e = document.querySelector(".js-toolbar"), n = window.getComputedStyle(e);
                        n && "none" !== n.display || t.targetApp(p())
                    }), 500)
                })), document.addEventListener("touchmove", (function (t) {
                    clearTimeout(e)
                })), document.addEventListener("touchend", (function (t) {
                    clearTimeout(e)
                })))
            }
        }], a && o(t.prototype, a), s && o(t, s), Object.defineProperty(t, "prototype", {writable: !1}), e
    }(), m = new h, g = m.openApp, y = m.shareWx;
    e.openApp = g, e.shareWx = y, Object.defineProperty(e, "__esModule", {value: !0})
}));
