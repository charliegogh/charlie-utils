!(function(e, n) { typeof exports === 'object' && typeof module !== 'undefined' ? n(exports) : typeof define === 'function' && define.amd ? define(['exports'], n) : n((e = typeof globalThis !== 'undefined' ? globalThis : e || self).xJdk = {}) }(this, function(e) { 'use strict'; function n(e, n) { for (var i = 0; i < n.length; i++) { var t = n[i]; t.enumerable = t.enumerable || !1, t.configurable = !0, 'value' in t && (t.writable = !0), Object.defineProperty(e, (o = t.key, r = void 0, typeof (r = (function(e, n) { if (typeof e !== 'object' || e === null) return e; var i = e[Symbol.toPrimitive]; if (void 0 !== i) { var t = i.call(e, n || 'default'); if (typeof t !== 'object') return t; throw new TypeError('@@toPrimitive must return a primitive value.') } return (n === 'string' ? String : Number)(e) }(o, 'string'))) === 'symbol' ? r : String(r)), t) } var o, r } var i = (function(e, n) { return e(n = { exports: {}}, n.exports), n.exports }(function(e) { var n; n = typeof window === 'object' && window, e.exports = (function(e, n) { var i, t, o, r, a, s, c, d, u, l, p, f, g, m, h, y, v, S, w, I, k, T; if (e) return e.jWeixin ? e.jWeixin : (i = { config: 'preVerifyJSAPI', onMenuShareTimeline: 'menu:share:timeline', onMenuShareAppMessage: 'menu:share:appmessage', onMenuShareQQ: 'menu:share:qq', onMenuShareWeibo: 'menu:share:weiboApp', onMenuShareQZone: 'menu:share:QZone', previewImage: 'imagePreview', getLocation: 'geoLocation', openProductSpecificView: 'openProductViewWithPid', addCard: 'batchAddCard', openCard: 'batchViewCard', chooseWXPay: 'getBrandWCPayRequest', openEnterpriseRedPacket: 'getRecevieBizHongBaoRequest', startSearchBeacons: 'startMonitoringBeacons', stopSearchBeacons: 'stopMonitoringBeacons', onSearchBeacons: 'onBeaconsInRange', consumeAndShareCard: 'consumedShareCard', openAddress: 'editAddress' }, t = (function() { var e; var n = {}; for (e in i)n[i[e]] = e; return n }()), o = e.document, r = o.title, a = navigator.userAgent.toLowerCase(), f = navigator.platform.toLowerCase(), s = !(!f.match('mac') && !f.match('win')), c = a.indexOf('wxdebugger') != -1, d = a.indexOf('micromessenger') != -1, u = a.indexOf('android') != -1, l = a.indexOf('iphone') != -1 || a.indexOf('ipad') != -1, p = (f = a.match(/micromessenger\/(\d+\.\d+\.\d+)/) || a.match(/micromessenger\/(\d+\.\d+)/)) ? f[1] : '', g = { initStartTime: L(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0 }, m = { version: 1, appId: '', initTime: 0, preVerifyTime: 0, networkType: '', isPreVerifyOk: 1, systemType: l ? 1 : u ? 2 : -1, clientVersion: p, url: encodeURIComponent(location.href) }, h = {}, y = { _completes: [] }, v = { state: 0, data: {}}, O(function() { g.initEndTime = L() }), S = !1, w = [], I = { config: function(n) { C('config', h = n); var t = !1 !== h.check; O(function() { if (t)_(i.config, { verifyJsApiList: A(h.jsApiList), verifyOpenTagList: A(h.openTagList) }, (y._complete = function(e) { g.preVerifyEndTime = L(), v.state = 1, v.data = e }, y.success = function(e) { m.isPreVerifyOk = 0 }, y.fail = function(e) { y._fail ? y._fail(e) : v.state = -1 }, (r = y._completes).push(function() { V() }), y.complete = function(e) { for (var n = 0, i = r.length; n < i; ++n)r[n](); y._completes = [] }, y)), g.preVerifyStartTime = L(); else { v.state = 1; for (var e = y._completes, n = 0, o = e.length; n < o; ++n)e[n](); y._completes = [] } var r }), I.invoke || (I.invoke = function(n, i, t) { e.WeixinJSBridge && WeixinJSBridge.invoke(n, b(i), t) }, I.on = function(n, i) { e.WeixinJSBridge && WeixinJSBridge.on(n, i) }) }, ready: function(e) { (v.state != 0 || (y._completes.push(e), !d && h.debug)) && e() }, error: function(e) { p < '6.0.2' || (v.state == -1 ? e(v.data) : y._fail = e) }, checkJsApi: function(e) { _('checkJsApi', { jsApiList: A(e.jsApiList) }, (e._complete = function(e) { u && (i = e.checkResult) && (e.checkResult = JSON.parse(i)); var n; var i = e; var o = i.checkResult; for (n in o) { var r = t[n]; r && (o[r] = o[n], delete o[n]) } }, e)) }, onMenuShareTimeline: function(e) { x(i.onMenuShareTimeline, { complete: function() { _('shareTimeline', { title: e.title || r, desc: e.title || r, img_url: e.imgUrl || '', link: e.link || location.href, type: e.type || 'link', data_url: e.dataUrl || '' }, e) } }, e) }, onMenuShareAppMessage: function(e) { x(i.onMenuShareAppMessage, { complete: function(n) { n.scene === 'favorite' ? _('sendAppMessage', { title: e.title || r, desc: e.desc || '', link: e.link || location.href, img_url: e.imgUrl || '', type: e.type || 'link', data_url: e.dataUrl || '' }) : _('sendAppMessage', { title: e.title || r, desc: e.desc || '', link: e.link || location.href, img_url: e.imgUrl || '', type: e.type || 'link', data_url: e.dataUrl || '' }, e) } }, e) }, onMenuShareQQ: function(e) { x(i.onMenuShareQQ, { complete: function() { _('shareQQ', { title: e.title || r, desc: e.desc || '', img_url: e.imgUrl || '', link: e.link || location.href }, e) } }, e) }, onMenuShareWeibo: function(e) { x(i.onMenuShareWeibo, { complete: function() { _('shareWeiboApp', { title: e.title || r, desc: e.desc || '', img_url: e.imgUrl || '', link: e.link || location.href }, e) } }, e) }, onMenuShareQZone: function(e) { x(i.onMenuShareQZone, { complete: function() { _('shareQZone', { title: e.title || r, desc: e.desc || '', img_url: e.imgUrl || '', link: e.link || location.href }, e) } }, e) }, updateTimelineShareData: function(e) { _('updateTimelineShareData', { title: e.title, link: e.link, imgUrl: e.imgUrl }, e) }, updateAppMessageShareData: function(e) { _('updateAppMessageShareData', { title: e.title, desc: e.desc, link: e.link, imgUrl: e.imgUrl }, e) }, startRecord: function(e) { _('startRecord', {}, e) }, stopRecord: function(e) { _('stopRecord', {}, e) }, onVoiceRecordEnd: function(e) { x('onVoiceRecordEnd', e) }, playVoice: function(e) { _('playVoice', { localId: e.localId }, e) }, pauseVoice: function(e) { _('pauseVoice', { localId: e.localId }, e) }, stopVoice: function(e) { _('stopVoice', { localId: e.localId }, e) }, onVoicePlayEnd: function(e) { x('onVoicePlayEnd', e) }, uploadVoice: function(e) { _('uploadVoice', { localId: e.localId, isShowProgressTips: e.isShowProgressTips == 0 ? 0 : 1 }, e) }, downloadVoice: function(e) { _('downloadVoice', { serverId: e.serverId, isShowProgressTips: e.isShowProgressTips == 0 ? 0 : 1 }, e) }, translateVoice: function(e) { _('translateVoice', { localId: e.localId, isShowProgressTips: e.isShowProgressTips == 0 ? 0 : 1 }, e) }, chooseImage: function(e) { _('chooseImage', { scene: '1|2', count: e.count || 9, sizeType: e.sizeType || ['original', 'compressed'], sourceType: e.sourceType || ['album', 'camera'] }, (e._complete = function(e) { if (u) { var n = e.localIds; try { n && (e.localIds = JSON.parse(n)) } catch (e) {} } }, e)) }, getLocation: function(e) { e = e || {}, _(i.getLocation, { type: e.type || 'wgs84' }, (e._complete = function(e) { delete e.type }, e)) }, previewImage: function(e) { _(i.previewImage, { current: e.current, urls: e.urls }, e) }, uploadImage: function(e) { _('uploadImage', { localId: e.localId, isShowProgressTips: e.isShowProgressTips == 0 ? 0 : 1 }, e) }, downloadImage: function(e) { _('downloadImage', { serverId: e.serverId, isShowProgressTips: e.isShowProgressTips == 0 ? 0 : 1 }, e) }, getLocalImgData: function(e) { !1 === S ? (S = !0, _('getLocalImgData', { localId: e.localId }, (e._complete = function(e) { var n; S = !1, w.length > 0 && (n = w.shift(), wx.getLocalImgData(n)) }, e))) : w.push(e) }, getNetworkType: function(e) { _('getNetworkType', {}, (e._complete = function(e) { var n = e; var i = (e = n.errMsg, n.errMsg = 'getNetworkType:ok', n.subtype); if (delete n.subtype, i)n.networkType = i; else { i = e.indexOf(':'); var t = e.substring(i + 1); switch (t) { case 'wifi':case 'edge':case 'wwan':n.networkType = t; break; default:n.errMsg = 'getNetworkType:fail' } } }, e)) }, openLocation: function(e) { _('openLocation', { latitude: e.latitude, longitude: e.longitude, name: e.name || '', address: e.address || '', scale: e.scale || 28, infoUrl: e.infoUrl || '' }, e) }, hideOptionMenu: function(e) { _('hideOptionMenu', {}, e) }, showOptionMenu: function(e) { _('showOptionMenu', {}, e) }, closeWindow: function(e) { _('closeWindow', {}, e = e || {}) }, hideMenuItems: function(e) { _('hideMenuItems', { menuList: e.menuList }, e) }, showMenuItems: function(e) { _('showMenuItems', { menuList: e.menuList }, e) }, hideAllNonBaseMenuItem: function(e) { _('hideAllNonBaseMenuItem', {}, e) }, showAllNonBaseMenuItem: function(e) { _('showAllNonBaseMenuItem', {}, e) }, scanQRCode: function(e) { _('scanQRCode', { needResult: (e = e || {}).needResult || 0, scanType: e.scanType || ['qrCode', 'barCode'] }, (e._complete = function(e) { var n; l && (n = e.resultStr) && (n = JSON.parse(n), e.resultStr = n && n.scan_code && n.scan_code.scan_result) }, e)) }, openAddress: function(e) { _(i.openAddress, {}, (e._complete = function(e) { e.postalCode = e.addressPostalCode, delete e.addressPostalCode, e.provinceName = e.proviceFirstStageName, delete e.proviceFirstStageName, e.cityName = e.addressCitySecondStageName, delete e.addressCitySecondStageName, e.countryName = e.addressCountiesThirdStageName, delete e.addressCountiesThirdStageName, e.detailInfo = e.addressDetailInfo, delete e.addressDetailInfo }, e)) }, openProductSpecificView: function(e) { _(i.openProductSpecificView, { pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo }, e) }, addCard: function(e) { for (var n = e.cardList, t = [], o = 0, r = n.length; o < r; ++o) { var a = { card_id: (a = n[o]).cardId, card_ext: a.cardExt }; t.push(a) }_(i.addCard, { card_list: t }, (e._complete = function(e) { if (n = e.card_list) { for (var n, i = 0, t = (n = JSON.parse(n)).length; i < t; ++i) { var o = n[i]; o.cardId = o.card_id, o.cardExt = o.card_ext, o.isSuccess = !!o.is_succ, delete o.card_id, delete o.card_ext, delete o.is_succ }e.cardList = n, delete e.card_list } }, e)) }, chooseCard: function(e) { _('chooseCard', { app_id: h.appId, location_id: e.shopId || '', sign_type: e.signType || 'SHA1', card_id: e.cardId || '', card_type: e.cardType || '', card_sign: e.cardSign, time_stamp: e.timestamp + '', nonce_str: e.nonceStr }, (e._complete = function(e) { e.cardList = e.choose_card_info, delete e.choose_card_info }, e)) }, openCard: function(e) { for (var n = e.cardList, t = [], o = 0, r = n.length; o < r; ++o) { var a = { card_id: (a = n[o]).cardId, code: a.code }; t.push(a) }_(i.openCard, { card_list: t }, e) }, consumeAndShareCard: function(e) { _(i.consumeAndShareCard, { consumedCardId: e.cardId, consumedCode: e.code }, e) }, chooseWXPay: function(e) { _(i.chooseWXPay, M(e), e), V({ jsApiName: 'chooseWXPay' }) }, openEnterpriseRedPacket: function(e) { _(i.openEnterpriseRedPacket, M(e), e) }, startSearchBeacons: function(e) { _(i.startSearchBeacons, { ticket: e.ticket }, e) }, stopSearchBeacons: function(e) { _(i.stopSearchBeacons, {}, e) }, onSearchBeacons: function(e) { x(i.onSearchBeacons, e) }, openEnterpriseChat: function(e) { _('openEnterpriseChat', { useridlist: e.userIds, chatname: e.groupName }, e) }, launchMiniProgram: function(e) { _('launchMiniProgram', { targetAppId: e.targetAppId, path: (function(e) { var n; if (typeof e === 'string' && e.length > 0) return n = e.split('?')[0], n += '.html', void 0 !== (e = e.split('?')[1]) ? n + '?' + e : n }(e.path)), envVersion: e.envVersion }, e) }, openBusinessView: function(e) { _('openBusinessView', { businessType: e.businessType, queryString: e.queryString || '', envVersion: e.envVersion }, (e._complete = function(e) { if (u) { var n = e.extraData; if (n) try { e.extraData = JSON.parse(n) } catch (n) { e.extraData = {} } } }, e)) }, miniProgram: { navigateBack: function(e) { e = e || {}, O(function() { _('invokeMiniProgramAPI', { name: 'navigateBack', arg: { delta: e.delta || 1 }}, e) }) }, navigateTo: function(e) { O(function() { _('invokeMiniProgramAPI', { name: 'navigateTo', arg: { url: e.url }}, e) }) }, redirectTo: function(e) { O(function() { _('invokeMiniProgramAPI', { name: 'redirectTo', arg: { url: e.url }}, e) }) }, switchTab: function(e) { O(function() { _('invokeMiniProgramAPI', { name: 'switchTab', arg: { url: e.url }}, e) }) }, reLaunch: function(e) { O(function() { _('invokeMiniProgramAPI', { name: 'reLaunch', arg: { url: e.url }}, e) }) }, postMessage: function(e) { O(function() { _('invokeMiniProgramAPI', { name: 'postMessage', arg: e.data || {}}, e) }) }, getEnv: function(n) { O(function() { n({ miniprogram: e.__wxjs_environment === 'miniprogram' }) }) } }}, k = 1, T = {}, o.addEventListener('error', function(e) { var n, i, t; u || (t = (n = e.target).tagName, i = n.src, t != 'IMG' && t != 'VIDEO' && t != 'AUDIO' && t != 'SOURCE') || i.indexOf('wxlocalresource://') != -1 && (e.preventDefault(), e.stopPropagation(), (t = n['wx-id']) || (t = k++, n['wx-id'] = t), T[t] || (T[t] = !0, wx.ready(function() { wx.getLocalImgData({ localId: i, success: function(e) { n.src = e.localData } }) }))) }, !0), o.addEventListener('load', function(e) { var n; u || (n = (e = e.target).tagName, e.src, n != 'IMG' && n != 'VIDEO' && n != 'AUDIO' && n != 'SOURCE') || (n = e['wx-id']) && (T[n] = !1) }, !0), n && (e.wx = e.jWeixin = I), I); function _(n, i, t) { e.WeixinJSBridge ? WeixinJSBridge.invoke(n, b(i), function(e) { P(n, e, t) }) : C(n, t) } function x(n, i, t) { e.WeixinJSBridge ? WeixinJSBridge.on(n, function(e) { t && t.trigger && t.trigger(e), P(n, e, i) }) : C(n, t || i) } function b(e) { return (e = e || {}).appId = h.appId, e.verifyAppId = h.appId, e.verifySignType = 'sha1', e.verifyTimestamp = h.timestamp + '', e.verifyNonceStr = h.nonceStr, e.verifySignature = h.signature, e } function M(e) { return { timeStamp: e.timestamp + '', nonceStr: e.nonceStr, package: e.package, paySign: e.paySign, signType: e.signType || 'SHA1' } } function P(e, n, i) { e != 'openEnterpriseChat' && e !== 'openBusinessView' || (n.errCode = n.err_code), delete n.err_code, delete n.err_desc, delete n.err_detail; var o = n.errMsg; switch (o || (o = n.err_msg, delete n.err_msg, o = (function(e, n) { var i; var o = t[e]; return o && (e = o), o = 'ok', n && (i = n.indexOf(':'), (o = (o = (o = (o = (o = "failed" == (o = "confirm" == (o = n.substring(i + 1)) ? "ok" : o) ? "fail" : o).indexOf('failed_') != -1 ? o.substring(7) : o).indexOf('fail_') != -1 ? o.substring(5) : o).replace(/_/g, ' ')).toLowerCase()) != 'access denied' && o != 'no permission to execute' || (o = 'permission denied'), (o = e == 'config' && o == 'function not exist' ? 'ok' : o) == '') && (o = 'fail'), e + ':' + o }(e, o)), n.errMsg = o), (i = i || {})._complete && (i._complete(n), delete i._complete), o = n.errMsg || '', h.debug && !i.isInnerInvoke && alert(JSON.stringify(n)), e = o.indexOf(':'), o.substring(e + 1)) { case 'ok':i.success && i.success(n); break; case 'cancel':i.cancel && i.cancel(n); break; default:i.fail && i.fail(n) }i.complete && i.complete(n) } function A(e) { if (e) { for (var n = 0, t = e.length; n < t; ++n) { var o = e[n]; (o = i[o]) && (e[n] = o) } return e } } function C(e, n) { var i; !h.debug || n && n.isInnerInvoke || ((i = t[e]) && (e = i), n && n._complete && delete n._complete, console.log('"' + e + '",', n || '')) } function V(e) { var n; s || c || h.debug || p < '6.0.2' || m.systemType < 0 || (n = new Image(), m.appId = h.appId, m.initTime = g.initEndTime - g.initStartTime, m.preVerifyTime = g.preVerifyEndTime - g.preVerifyStartTime, I.getNetworkType({ isInnerInvoke: !0, success: function(i) { m.networkType = i.networkType, i = 'https://open.weixin.qq.com/sdk/report?v=' + m.version + '&o=' + m.isPreVerifyOk + '&s=' + m.systemType + '&c=' + m.clientVersion + '&a=' + m.appId + '&n=' + m.networkType + '&i=' + m.initTime + '&p=' + m.preVerifyTime + '&u=' + m.url + '&jsapi_name=' + (e ? e.jsApiName : ''), n.src = i } })) } function L() { return (new Date()).getTime() } function O(n) { d && (e.WeixinJSBridge ? n() : o.addEventListener && o.addEventListener('WeixinJSBridgeReady', n, !1)) }console.warn("can't use weixin-js-sdk in server side") }(n)) })); var t = new (function() { function e() { !(function(e, n) { if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function') }(this, e)), this.openApp = this.openApp.bind(this), this.shareWx = this.shareWx.bind(this), this.errorCb = this.errorCb.bind(this), this.launchCb = this.launchCb.bind(this), this.options = {} } var t, o, r; return t = e, (o = [{ key: 'init', value: function() { return new Promise(function(e, n) { fetch(''.concat(location.origin, '/Trilalread/Member/GetWeChatModel?url=').concat(window.location.href)).then(function(e) { return e.json() }).then(function(n) { i.config({ debug: !1, appId: 'wx549fe1c34185bae9', timestamp: n.Data.Result.timeStamp, nonceStr: n.Data.Result.noncestr, signature: n.Data.Result.signature, jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], openTagList: ['wx-open-launch-app'] }), i.ready(function() { e() }), i.error(function(e) { e.errMsg, console.log('错误：', e, JSON.stringify(e)) }) }) }) } }, { key: 'launchCb', value: function(e) { console.log('success', e, e.detail, JSON.stringify(e.detail)) } }, { key: 'errorCb', value: function(e) { this.options.error('fail') } }, { key: 'openApp', value: function(e) { var n = this; return this.options = e, new Promise(function() { n.init().then(function() { var e = document.getElementsByClassName('wx2app-btn'); if (console.log(e), e.length !== 0) for (var i = 0; i < e.length; i++)e[i].addEventListener('launch', n.launchCb), e[i].addEventListener('error', n.errorCb) }) }) } }, { key: 'shareWx', value: function() { var e = this; return new Promise(function(n) { e.init().then(function() { i.updateAppMessageShareData({ title: '测试微信分享', desc: '123333333333333333333333', link: 'https://x.cnki.net/web/test', imgUrl: 'https://x.cnki.net/web/test/logo.jpg', success: function(e) { console.log(e), n(e) } }) }) }) } }]) && n(t.prototype, o), r && n(t, r), Object.defineProperty(t, 'prototype', { writable: !1 }), e }())(); var o = t.openApp; var r = t.shareWx; e.openApp = o, e.shareWx = r, Object.defineProperty(e, '__esModule', { value: !0 }) }))