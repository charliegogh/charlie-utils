!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).xsdk={})}(this,(function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(){r=function(){return t};var e,t={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),c=new E(r||[]);return o(a,"_invoke",{value:A(e,n,c)}),a}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var f="suspendedStart",h="suspendedYield",m="executing",g="completed",y={};function v(){}function w(){}function b(){}var S={};l(S,c,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(M([])));_&&_!==n&&i.call(_,c)&&(S=_);var k=b.prototype=v.prototype=Object.create(S);function I(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(r,o,a,c){var s=p(e[r],e,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&i.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var r;o(this,"_invoke",{value:function(e,i){function o(){return new t((function(t,r){n(e,i,t,r)}))}return r=r?r.then(o,o):o()}})}function A(t,n,r){var i=f;return function(o,a){if(i===m)throw new Error("Generator is already running");if(i===g){if("throw"===o)throw a;return{value:e,done:!0}}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var s=O(c,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===f)throw i=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=m;var u=p(t,n,r);if("normal"===u.type){if(i=r.done?g:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=g,r.method="throw",r.arg=u.arg)}}}function O(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=p(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function M(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return w.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=l(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},I(T.prototype),l(T.prototype,s,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new T(d(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(k),l(k,u,"Generator"),l(k,c,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=M,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}function i(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,i)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function a(e,t,n){return(t=l(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,c=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(e){u=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var d=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t;t="object"==typeof window&&window,e.exports=function(e,t){var n,r,i,o,a,c,s,u,l,d,p,f,h,m,g,y,v,w,b,S,x,_;if(e)return e.jWeixin?e.jWeixin:(n={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},r=function(){var e,t={};for(e in n)t[n[e]]=e;return t}(),i=e.document,o=i.title,a=navigator.userAgent.toLowerCase(),f=navigator.platform.toLowerCase(),c=!(!f.match("mac")&&!f.match("win")),s=-1!=a.indexOf("wxdebugger"),u=-1!=a.indexOf("micromessenger"),l=-1!=a.indexOf("android"),d=-1!=a.indexOf("iphone")||-1!=a.indexOf("ipad"),p=(f=a.match(/micromessenger\/(\d+\.\d+\.\d+)/)||a.match(/micromessenger\/(\d+\.\d+)/))?f[1]:"",h={initStartTime:M(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},m={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:d?1:l?2:-1,clientVersion:p,url:encodeURIComponent(location.href)},g={},y={_completes:[]},v={state:0,data:{}},C((function(){h.initEndTime=M()})),w=!1,b=[],S={config:function(t){L("config",g=t);var r=!1!==g.check;C((function(){if(r)k(n.config,{verifyJsApiList:P(g.jsApiList),verifyOpenTagList:P(g.openTagList)},(y._complete=function(e){h.preVerifyEndTime=M(),v.state=1,v.data=e},y.success=function(e){m.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):v.state=-1},(o=y._completes).push((function(){E()})),y.complete=function(e){for(var t=0,n=o.length;t<n;++t)o[t]();y._completes=[]},y)),h.preVerifyStartTime=M();else{v.state=1;for(var e=y._completes,t=0,i=e.length;t<i;++t)e[t]();y._completes=[]}var o})),S.invoke||(S.invoke=function(t,n,r){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,T(n),r)},S.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){(0!=v.state||(y._completes.push(e),!u&&g.debug))&&e()},error:function(e){p<"6.0.2"||(-1==v.state?e(v.data):y._fail=e)},checkJsApi:function(e){k("checkJsApi",{jsApiList:P(e.jsApiList)},(e._complete=function(e){l&&(n=e.checkResult)&&(e.checkResult=JSON.parse(n));var t,n=e,i=n.checkResult;for(t in i){var o=r[t];o&&(i[o]=i[t],delete i[t])}},e))},onMenuShareTimeline:function(e){I(n.onMenuShareTimeline,{complete:function(){k("shareTimeline",{title:e.title||o,desc:e.title||o,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){I(n.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?k("sendAppMessage",{title:e.title||o,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):k("sendAppMessage",{title:e.title||o,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){I(n.onMenuShareQQ,{complete:function(){k("shareQQ",{title:e.title||o,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){I(n.onMenuShareWeibo,{complete:function(){k("shareWeiboApp",{title:e.title||o,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){I(n.onMenuShareQZone,{complete:function(){k("shareQZone",{title:e.title||o,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){k("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){k("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){k("startRecord",{},e)},stopRecord:function(e){k("stopRecord",{},e)},onVoiceRecordEnd:function(e){I("onVoiceRecordEnd",e)},playVoice:function(e){k("playVoice",{localId:e.localId},e)},pauseVoice:function(e){k("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){k("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){I("onVoicePlayEnd",e)},uploadVoice:function(e){k("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){k("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){k("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){k("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(l){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){e=e||{},k(n.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},previewImage:function(e){k(n.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){k("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){k("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===w?(w=!0,k("getLocalImgData",{localId:e.localId},(e._complete=function(e){var t;w=!1,0<b.length&&(t=b.shift(),wx.getLocalImgData(t))},e))):b.push(e)},getNetworkType:function(e){k("getNetworkType",{},(e._complete=function(e){var t=e,n=(e=t.errMsg,t.errMsg="getNetworkType:ok",t.subtype);if(delete t.subtype,n)t.networkType=n;else{n=e.indexOf(":");var r=e.substring(n+1);switch(r){case"wifi":case"edge":case"wwan":t.networkType=r;break;default:t.errMsg="getNetworkType:fail"}}},e))},openLocation:function(e){k("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},hideOptionMenu:function(e){k("hideOptionMenu",{},e)},showOptionMenu:function(e){k("showOptionMenu",{},e)},closeWindow:function(e){k("closeWindow",{},e=e||{})},hideMenuItems:function(e){k("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){k("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){k("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){k("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){k("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){var t;d&&(t=e.resultStr)&&(t=JSON.parse(t),e.resultStr=t&&t.scan_code&&t.scan_code.scan_result)},e))},openAddress:function(e){k(n.openAddress,{},(e._complete=function(e){e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo},e))},openProductSpecificView:function(e){k(n.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,r=[],i=0,o=t.length;i<o;++i){var a={card_id:(a=t[i]).cardId,card_ext:a.cardExt};r.push(a)}k(n.addCard,{card_list:r},(e._complete=function(e){if(t=e.card_list){for(var t,n=0,r=(t=JSON.parse(t)).length;n<r;++n){var i=t[n];i.cardId=i.card_id,i.cardExt=i.card_ext,i.isSuccess=!!i.is_succ,delete i.card_id,delete i.card_ext,delete i.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){k("chooseCard",{app_id:g.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,r=[],i=0,o=t.length;i<o;++i){var a={card_id:(a=t[i]).cardId,code:a.code};r.push(a)}k(n.openCard,{card_list:r},e)},consumeAndShareCard:function(e){k(n.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){k(n.chooseWXPay,A(e),e),E({jsApiName:"chooseWXPay"})},openEnterpriseRedPacket:function(e){k(n.openEnterpriseRedPacket,A(e),e)},startSearchBeacons:function(e){k(n.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){k(n.stopSearchBeacons,{},e)},onSearchBeacons:function(e){I(n.onSearchBeacons,e)},openEnterpriseChat:function(e){k("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){k("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){var t;if("string"==typeof e&&0<e.length)return t=e.split("?")[0],t+=".html",void 0!==(e=e.split("?")[1])?t+"?"+e:t}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){k("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(l){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},C((function(){k("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){C((function(){k("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){C((function(){k("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){C((function(){k("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){C((function(){k("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){C((function(){k("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){C((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},x=1,_={},i.addEventListener("error",(function(e){var t,n,r;l||(r=(t=e.target).tagName,n=t.src,"IMG"!=r&&"VIDEO"!=r&&"AUDIO"!=r&&"SOURCE"!=r)||-1!=n.indexOf("wxlocalresource://")&&(e.preventDefault(),e.stopPropagation(),(r=t["wx-id"])||(r=x++,t["wx-id"]=r),_[r]||(_[r]=!0,wx.ready((function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})}))))}),!0),i.addEventListener("load",(function(e){var t;l||(t=(e=e.target).tagName,e.src,"IMG"!=t&&"VIDEO"!=t&&"AUDIO"!=t&&"SOURCE"!=t)||(t=e["wx-id"])&&(_[t]=!1)}),!0),t&&(e.wx=e.jWeixin=S),S);function k(t,n,r){e.WeixinJSBridge?WeixinJSBridge.invoke(t,T(n),(function(e){O(t,e,r)})):L(t,r)}function I(t,n,r){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){r&&r.trigger&&r.trigger(e),O(t,e,n)})):L(t,r||n)}function T(e){return(e=e||{}).appId=g.appId,e.verifyAppId=g.appId,e.verifySignType="sha1",e.verifyTimestamp=g.timestamp+"",e.verifyNonceStr=g.nonceStr,e.verifySignature=g.signature,e}function A(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function O(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;switch(i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n,i=r[e];return i&&(e=i),i="ok",t&&(n=t.indexOf(":"),"access denied"!=(i=(i=(i=-1!=(i=-1!=(i="failed"==(i="confirm"==(i=t.substring(n+1))?"ok":i)?"fail":i).indexOf("failed_")?i.substring(7):i).indexOf("fail_")?i.substring(5):i).replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=i||(i="permission denied"),""==(i="config"==e&&"function not exist"==i?"ok":i))&&(i="fail"),e+":"+i}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",g.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t)),e=i.indexOf(":"),i.substring(e+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function P(e){if(e){for(var t=0,r=e.length;t<r;++t){var i=e[t];(i=n[i])&&(e[t]=i)}return e}}function L(e,t){var n;!g.debug||t&&t.isInnerInvoke||((n=r[e])&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||""))}function E(e){var t;c||s||g.debug||p<"6.0.2"||m.systemType<0||(t=new Image,m.appId=g.appId,m.initTime=h.initEndTime-h.initStartTime,m.preVerifyTime=h.preVerifyEndTime-h.preVerifyStartTime,S.getNetworkType({isInnerInvoke:!0,success:function(n){m.networkType=n.networkType,n="https://open.weixin.qq.com/sdk/report?v="+m.version+"&o="+m.isPreVerifyOk+"&s="+m.systemType+"&c="+m.clientVersion+"&a="+m.appId+"&n="+m.networkType+"&i="+m.initTime+"&p="+m.preVerifyTime+"&u="+m.url+"&jsapi_name="+(e?e.jsApiName:""),t.src=n}}))}function M(){return(new Date).getTime()}function C(t){u&&(e.WeixinJSBridge?t():i.addEventListener&&i.addEventListener("WeixinJSBridgeReady",t,!1))}console.warn("can't use weixin-js-sdk in server side")}(t)})),p=function(e){var t,n={},r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=s(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}(new URLSearchParams(window.location.search).entries());try{for(r.s();!(t=r.n()).done;){var i=c(t.value,2),o=i[0],a=i[1];n[o]=a}}catch(e){r.e(e)}finally{r.f()}return e?n[e]:n},f=function(e,t){return e+"?"+Object.keys(t).map((function(e){return e+"="+t[e]})).join("&")};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".x-openApp{\r\n  position: relative;\r\n}\r\n");var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={target:"read"},this.env="",this.openApp=this.openApp.bind(this),this.shareWx=this.shareWx.bind(this),this.errorCb=this.errorCb.bind(this),this.launchCb=this.launchCb.bind(this),this.initEnv()}var t,a,c,s,u;return t=e,a=[{key:"initEnv",value:function(){var e=window.navigator.userAgent,t=window.orientation,n=window.screen.width;if(void 0===t)this.env="PC";else{var r=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,i=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=e.indexOf("MicroMessenger")>-1,a=e.indexOf("QQ")>-1,c=n>=500&&n<=1200;o?this.env=r?"Android_wx":"ios_wx":a?this.env=r?"Android_qq":"ios_qq":(this.env=r?c?"Android_pad":"Android":i?c?"ios_pad":"ios":"pad",this.env.includes("pad")&&this.readTest())}console.log(this.env,"current env")}},{key:"initWXJsdk",value:function(){var e=this;return new Promise((function(t,n){fetch("".concat(location.origin,"/Trilalread/Member/GetWeChatModel?url=").concat(window.location.href)).then((function(e){return e.json()})).then((function(n){var r;d.config({debug:(null===(r=e.options)||void 0===r?void 0:r.debug)||!1,appId:"wx549fe1c34185bae9",timestamp:n.Data.Result.timeStamp,nonceStr:n.Data.Result.noncestr,signature:n.Data.Result.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"],openTagList:["wx-open-launch-app"]}),d.ready((function(){t()})),d.error((function(e){e.errMsg,console.log("错误：",e,JSON.stringify(e))}))}))}))}},{key:"launchCb",value:function(e){console.log("success",e,e.detail,JSON.stringify(e.detail)),this.options.success("success")}},{key:"errorCb",value:function(e){console.log("open failed"),this.options.error("fail")}},{key:"openApp",value:(s=r().mark((function e(t){var i,o,a,c,s,u,l,d,h,m=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.options=t,i=this.env,0!==(o=document.getElementsByClassName("x-openApp")).length){e.next=5;break}return e.abrupt("return");case 5:if(a=p(),a=this.options.params?n(n({},this.options.params),a):a,c=JSON.stringify(t.extinfo||{action:"readService",actionUrl:window.location.href}),i.includes("qq")&&this.options.error("fail"),!i.includes("wx")){e.next=17;break}return e.next=12,this.initWXJsdk();case 12:for(s=0;s<o.length;s++)i.includes("wx")&&(u='\n           <wx-open-launch-app class="wx2app-btn"\n                          appid="wx86fb62b7b6e1dea7"\n                          extinfo='.concat(c,'\n                            style="position:absolute;top:0;left:0;right: 0;bottom:0"\n                          >\n          <script type="text/wxtag-template">\n              <span style="position: absolute;left: 0;right: 0;bottom: 0;opacity: 0">open app</span>\n          <\/script>\n      </wx-open-launch-app>\n      '),o[s].innerHTML+=u);if(0!==(l=document.getElementsByClassName("wx2app-btn")).length){e.next=16;break}return e.abrupt("return");case 16:for(d=0;d<l.length;d++)l[d].addEventListener("launch",this.launchCb),l[d].addEventListener("error",this.errorCb);case 17:if(["Android_pad","ios_pad","pad","Android","ios"].includes(i))for(h=0;h<o.length;h++)o[h].addEventListener("click",(function(){m.targetApp(a)}));["PC"].includes(i)&&this.options.env_pc({url:f(window.location.origin,a)});case 19:case"end":return e.stop()}}),e,this)})),u=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=s.apply(e,t);function a(e){i(o,n,r,a,c,"next",e)}function c(e){i(o,n,r,a,c,"throw",e)}a(void 0)}))},function(e){return u.apply(this,arguments)})},{key:"targetApp",value:function(e){var t=this.env,n=Date.now(),r=window.location.host+"/"+this.options.target+f("",e);window.location.href="psmc://"+r;var i=setInterval((function(){Date.now()-n>3e3&&(clearInterval(i),["Android_pad","pad","Android"].includes(t)&&(window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=cnki.net.psmc"),["ios_pad","ios"].includes(t)&&(window.location.href="https://itunes.apple.com/cn/app/apple-store/id1459607218"))}),1e3)}},{key:"shareWx",value:function(e){var t=this,r=n({title:"研学微信分享测试",desc:"研学微信分享测试",link:"https://x.cnki.net/web/test",imgUrl:"https://x.cnki.net/web/test/logo.jpg"},e),i=e.success;return new Promise((function(e){t.initWXJsdk().then((function(){d.updateAppMessageShareData(n(n({},r),{},{success:function(t){e(t),i&&i("success")}}))}))}))}},{key:"readTest",value:function(){var e,t=this,n=document.querySelector(".ChapterContainerWrap");n&&(n.addEventListener("touchstart",(function(n){clearTimeout(e),e=setTimeout((function(){var e=document.querySelector(".js-toolbar"),n=window.getComputedStyle(e);n&&"none"!==n.display||t.targetApp()}),500)})),document.addEventListener("touchmove",(function(t){clearTimeout(e)})),document.addEventListener("touchend",(function(t){clearTimeout(e)})))}}],a&&o(t.prototype,a),c&&o(t,c),Object.defineProperty(t,"prototype",{writable:!1}),e}(),m=new h,g=m.openApp,y=m.shareWx;e.openApp=g,e.shareWx=y,Object.defineProperty(e,"__esModule",{value:!0})}));
