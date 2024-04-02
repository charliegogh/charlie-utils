## 研究与学习 SDK 工具集成使用指南

### 环境检测

- 个人电脑端 (PC)
- 微信环境：Android 微信 (Android_wx)、iOS 微信 (ios_wx)
- QQ 环境：Android QQ (Android_qq)、iOS QQ (ios_qq)
- 微博环境：Android 微博 (Android_wb)、iOS 微博 (ios_wb)
- 浏览器平板设备：Android 平板 (Android_pad)、iOS 平板 (ios_pad)、普通平板 (pad)
- 浏览器普通移动设备：Android、ios

### 应用唤起

在进行应用唤起功能时，请注意以下限制与适配方案：

微信开放标签唤起功能受到一定限制。目前我们测试了以下三种方式支持：

1. 通过公众号菜单进入应用后进行分享
2. 生成二维码，用户扫描二维码后进行分享
3. 用户访问页面后将应用添加到收藏夹，然后从微信收藏夹中进入应用后进行分享

- SDK 内部已集成微信开放标签功能，但请注意处理回调函数返回的失败情况
- 目前 QQ 暂不支持该功能，如遇到回调函数返回失败情况，请自行处理
- app 应用内置浏览器完全支持上述功能

#### 使用方法

1. 引入 SDK 包

```html
<script src="./x-sdk.js"></script>
```

2. 吊起容器，需指定特定的 class 名称

```html
<div class="x-openApp">
    吊起应用
</div>
```

3. 使用 SDK 回调函数

```javascript
xsdk.openApp({
    debug: false,
    // app 打开target
    target:'readService',
    extinfo: {
        action:'readService',
        actionUrl:'https://x.cnki.net/activity/signIn.html'
    }, // 微信开放标签参数，默认：{ action: 'readService', actionUrl: window.location.
    params: {}, // 打开应用时额外携带的参数
    success: (e) => {
        console.log('成功')
    },
    // 失败回调
    error: (e) => {
        // code 40001 微信sdk 初始化失败
        // code 40002 微信sdk 打开微信失败
    },
    envCb: (e) => {
        console.log(e)
    }
})
```

4. 
