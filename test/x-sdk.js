!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).xSdk={})}(this,(function(e){"use strict";function n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function t(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,s(i.key),i)}}function r(e,n,t){return(n=s(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,r,o,a,c=[],s=!0,d=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(i=o.call(t)).done)&&(c.push(i.value),c.length!==n);s=!0);}catch(e){d=!0,r=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw r}}return c}}(e,n)||a(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function s(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,n||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}var d=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e){var n;n="object"==typeof window&&window,e.exports=function(e,n){var t,i,r,o,a,c,s,d,u,l,p,f,m,g,h,y,v,w,S,b,I,k;if(e)return e.jWeixin?e.jWeixin:(t={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},i=function(){var e,n={};for(e in t)n[t[e]]=e;return n}(),r=e.document,o=r.title,a=navigator.userAgent.toLowerCase(),f=navigator.platform.toLowerCase(),c=!(!f.match("mac")&&!f.match("win")),s=-1!=a.indexOf("wxdebugger"),d=-1!=a.indexOf("micromessenger"),u=-1!=a.indexOf("android"),l=-1!=a.indexOf("iphone")||-1!=a.indexOf("ipad"),p=(f=a.match(/micromessenger\/(\d+\.\d+\.\d+)/)||a.match(/micromessenger\/(\d+\.\d+)/))?f[1]:"",m={initStartTime:V(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},g={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:l?1:u?2:-1,clientVersion:p,url:encodeURIComponent(location.href)},h={},y={_completes:[]},v={state:0,data:{}},j((function(){m.initEndTime=V()})),w=!1,S=[],b={config:function(n){M("config",h=n);var i=!1!==h.check;j((function(){if(i)T(t.config,{verifyJsApiList:O(h.jsApiList),verifyOpenTagList:O(h.openTagList)},(y._complete=function(e){m.preVerifyEndTime=V(),v.state=1,v.data=e},y.success=function(e){g.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):v.state=-1},(o=y._completes).push((function(){C()})),y.complete=function(e){for(var n=0,t=o.length;n<t;++n)o[n]();y._completes=[]},y)),m.preVerifyStartTime=V();else{v.state=1;for(var e=y._completes,n=0,r=e.length;n<r;++n)e[n]();y._completes=[]}var o})),b.invoke||(b.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,x(t),i)},b.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})},ready:function(e){(0!=v.state||(y._completes.push(e),!d&&h.debug))&&e()},error:function(e){p<"6.0.2"||(-1==v.state?e(v.data):y._fail=e)},checkJsApi:function(e){T("checkJsApi",{jsApiList:O(e.jsApiList)},(e._complete=function(e){u&&(t=e.checkResult)&&(e.checkResult=JSON.parse(t));var n,t=e,r=t.checkResult;for(n in r){var o=i[n];o&&(r[o]=r[n],delete r[n])}},e))},onMenuShareTimeline:function(e){_(t.onMenuShareTimeline,{complete:function(){T("shareTimeline",{title:e.title||o,desc:e.title||o,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){_(t.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?T("sendAppMessage",{title:e.title||o,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):T("sendAppMessage",{title:e.title||o,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){_(t.onMenuShareQQ,{complete:function(){T("shareQQ",{title:e.title||o,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){_(t.onMenuShareWeibo,{complete:function(){T("shareWeiboApp",{title:e.title||o,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){_(t.onMenuShareQZone,{complete:function(){T("shareQZone",{title:e.title||o,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){T("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){T("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){T("startRecord",{},e)},stopRecord:function(e){T("stopRecord",{},e)},onVoiceRecordEnd:function(e){_("onVoiceRecordEnd",e)},playVoice:function(e){T("playVoice",{localId:e.localId},e)},pauseVoice:function(e){T("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){T("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){_("onVoicePlayEnd",e)},uploadVoice:function(e){T("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){T("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){T("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){T("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(u){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){e=e||{},T(t.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},previewImage:function(e){T(t.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){T("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){T("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===w?(w=!0,T("getLocalImgData",{localId:e.localId},(e._complete=function(e){var n;w=!1,0<S.length&&(n=S.shift(),wx.getLocalImgData(n))},e))):S.push(e)},getNetworkType:function(e){T("getNetworkType",{},(e._complete=function(e){var n=e,t=(e=n.errMsg,n.errMsg="getNetworkType:ok",n.subtype);if(delete n.subtype,t)n.networkType=t;else{t=e.indexOf(":");var i=e.substring(t+1);switch(i){case"wifi":case"edge":case"wwan":n.networkType=i;break;default:n.errMsg="getNetworkType:fail"}}},e))},openLocation:function(e){T("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},hideOptionMenu:function(e){T("hideOptionMenu",{},e)},showOptionMenu:function(e){T("showOptionMenu",{},e)},closeWindow:function(e){T("closeWindow",{},e=e||{})},hideMenuItems:function(e){T("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){T("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){T("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){T("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){T("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){var n;l&&(n=e.resultStr)&&(n=JSON.parse(n),e.resultStr=n&&n.scan_code&&n.scan_code.scan_result)},e))},openAddress:function(e){T(t.openAddress,{},(e._complete=function(e){e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo},e))},openProductSpecificView:function(e){T(t.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],r=0,o=n.length;r<o;++r){var a={card_id:(a=n[r]).cardId,card_ext:a.cardExt};i.push(a)}T(t.addCard,{card_list:i},(e._complete=function(e){if(n=e.card_list){for(var n,t=0,i=(n=JSON.parse(n)).length;t<i;++t){var r=n[t];r.cardId=r.card_id,r.cardExt=r.card_ext,r.isSuccess=!!r.is_succ,delete r.card_id,delete r.card_ext,delete r.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){T("chooseCard",{app_id:h.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],r=0,o=n.length;r<o;++r){var a={card_id:(a=n[r]).cardId,code:a.code};i.push(a)}T(t.openCard,{card_list:i},e)},consumeAndShareCard:function(e){T(t.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){T(t.chooseWXPay,A(e),e),C({jsApiName:"chooseWXPay"})},openEnterpriseRedPacket:function(e){T(t.openEnterpriseRedPacket,A(e),e)},startSearchBeacons:function(e){T(t.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){T(t.stopSearchBeacons,{},e)},onSearchBeacons:function(e){_(t.onSearchBeacons,e)},openEnterpriseChat:function(e){T("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){T("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){var n;if("string"==typeof e&&0<e.length)return n=e.split("?")[0],n+=".html",void 0!==(e=e.split("?")[1])?n+"?"+e:n}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){T("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(u){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},j((function(){T("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){j((function(){T("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){j((function(){T("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){j((function(){T("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){j((function(){T("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){j((function(){T("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){j((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},I=1,k={},r.addEventListener("error",(function(e){var n,t,i;u||(i=(n=e.target).tagName,t=n.src,"IMG"!=i&&"VIDEO"!=i&&"AUDIO"!=i&&"SOURCE"!=i)||-1!=t.indexOf("wxlocalresource://")&&(e.preventDefault(),e.stopPropagation(),(i=n["wx-id"])||(i=I++,n["wx-id"]=i),k[i]||(k[i]=!0,wx.ready((function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))))}),!0),r.addEventListener("load",(function(e){var n;u||(n=(e=e.target).tagName,e.src,"IMG"!=n&&"VIDEO"!=n&&"AUDIO"!=n&&"SOURCE"!=n)||(n=e["wx-id"])&&(k[n]=!1)}),!0),n&&(e.wx=e.jWeixin=b),b);function T(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,x(t),(function(e){P(n,e,i)})):M(n,i)}function _(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),P(n,e,t)})):M(n,i||t)}function x(e){return(e=e||{}).appId=h.appId,e.verifyAppId=h.appId,e.verifySignType="sha1",e.verifyTimestamp=h.timestamp+"",e.verifyNonceStr=h.nonceStr,e.verifySignature=h.signature,e}function A(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function P(e,n,t){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var r=n.errMsg;switch(r||(r=n.err_msg,delete n.err_msg,r=function(e,n){var t,r=i[e];return r&&(e=r),r="ok",n&&(t=n.indexOf(":"),"access denied"!=(r=(r=(r=-1!=(r=-1!=(r="failed"==(r="confirm"==(r=n.substring(t+1))?"ok":r)?"fail":r).indexOf("failed_")?r.substring(7):r).indexOf("fail_")?r.substring(5):r).replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=r||(r="permission denied"),""==(r="config"==e&&"function not exist"==r?"ok":r))&&(r="fail"),e+":"+r}(e,r),n.errMsg=r),(t=t||{})._complete&&(t._complete(n),delete t._complete),r=n.errMsg||"",h.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n)),e=r.indexOf(":"),r.substring(e+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function O(e){if(e){for(var n=0,i=e.length;n<i;++n){var r=e[n];(r=t[r])&&(e[n]=r)}return e}}function M(e,n){var t;!h.debug||n&&n.isInnerInvoke||((t=i[e])&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||""))}function C(e){var n;c||s||h.debug||p<"6.0.2"||g.systemType<0||(n=new Image,g.appId=h.appId,g.initTime=m.initEndTime-m.initStartTime,g.preVerifyTime=m.preVerifyEndTime-m.preVerifyStartTime,b.getNetworkType({isInnerInvoke:!0,success:function(t){g.networkType=t.networkType,t="https://open.weixin.qq.com/sdk/report?v="+g.version+"&o="+g.isPreVerifyOk+"&s="+g.systemType+"&c="+g.clientVersion+"&a="+g.appId+"&n="+g.networkType+"&i="+g.initTime+"&p="+g.preVerifyTime+"&u="+g.url+"&jsapi_name="+(e?e.jsApiName:""),n.src=t}}))}function V(){return(new Date).getTime()}function j(n){d&&(e.WeixinJSBridge?n():r.addEventListener&&r.addEventListener("WeixinJSBridgeReady",n,!1))}console.warn("can't use weixin-js-sdk in server side")}(n)})),u=function(e){var n,t={},i=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=a(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw o}}}}(new URLSearchParams(window.location.search).entries());try{for(i.s();!(n=i.n()).done;){var r=o(n.value,2),c=r[0],s=r[1];t[c]=s}}catch(e){i.e(e)}finally{i.f()}return e?t[e]:t},l=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={},this.env="",this.openApp=this.openApp.bind(this),this.shareWx=this.shareWx.bind(this),this.errorCb=this.errorCb.bind(this),this.launchCb=this.launchCb.bind(this),this.initEnv()}var n,r,o;return n=e,(r=[{key:"initEnv",value:function(){var e=window.navigator.userAgent,n=window.orientation,t=window.screen.width;if(void 0===n)this.env="PC";else{var i=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,r=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=e.indexOf("MicroMessenger")>-1,a=e.indexOf("QQ")>-1,c=t>1200<500;o?this.env=i?"Android_wx":"ios_wx":a?this.env=i?"Android_qq":"ios_qq":(this.env=i?c?"Android_pad":"Android":r?c?"ios_pad":"ios":"pad",this.env.includes("pad")&&this.readTest())}}},{key:"initWXJsdk",value:function(){return new Promise((function(e,n){fetch("".concat(location.origin,"/Trilalread/Member/GetWeChatModel?url=").concat(window.location.href)).then((function(e){return e.json()})).then((function(n){d.config({debug:!1,appId:"wx549fe1c34185bae9",timestamp:n.Data.Result.timeStamp,nonceStr:n.Data.Result.noncestr,signature:n.Data.Result.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"],openTagList:["wx-open-launch-app"]}),d.ready((function(){e()})),d.error((function(e){e.errMsg,console.log("错误：",e,JSON.stringify(e))}))}))}))}},{key:"launchCb",value:function(e){console.log("success",e,e.detail,JSON.stringify(e.detail))}},{key:"errorCb",value:function(e){this.options.error("fail")}},{key:"openApp",value:function(e){var n,i=this,r=this.env;if(this.options=e,r.includes("wx"))return new Promise((function(){i.initWXJsdk().then((function(){var e=document.getElementsByClassName("wx2app-btn");if(0!==e.length)for(var n=0;n<e.length;n++)e[n].addEventListener("launch",i.launchCb),e[n].addEventListener("error",i.errorCb)}))}));if(["Android_pad","ios_pad","pad","Android","ios"].includes(r)&&"read"===e.target){var o=u();if(Object.keys(o).length>0){o=e.readParams?t(t({},e.readParams),o):o;var a="psmc://"+window.location.host+"/read"+(n=o,"?"+Object.keys(n).map((function(e){return e+"="+n[e]})).join("&"));window.location.href=a}setTimeout((function(){["Android_pad","pad","Android"].includes(r)&&(window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=cnki.net.psmc"),["ios_pad","ios"].includes(r)&&(window.location.href="https://itunes.apple.com/cn/app/apple-store/id1459607218")}),5e3)}}},{key:"shareWx",value:function(){var e=this;return new Promise((function(n){e.initWXJsdk().then((function(){d.updateAppMessageShareData({title:"测试微信分享",desc:"123333333333333333333333",link:"https://x.cnki.net/web/test",imgUrl:"https://x.cnki.net/web/test/logo.jpg",success:function(e){n(e)}})}))}))}},{key:"readTest",value:function(){var e,n=this;document.querySelector(".ChapterContainerWrap").addEventListener("touchstart",(function(t){clearTimeout(e),e=setTimeout((function(){var e=document.querySelector(".js-toolbar"),t=window.getComputedStyle(e);t&&"none"!==t.display||n.openApp({target:"read"})}),500)})),document.addEventListener("touchmove",(function(n){clearTimeout(e)})),document.addEventListener("touchend",(function(n){clearTimeout(e)}))}}])&&i(n.prototype,r),o&&i(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}()),p=l.openApp,f=l.shareWx;e.openApp=p,e.shareWx=f,Object.defineProperty(e,"__esModule",{value:!0})}));
