## 研学 sdk 工具集成使用

### app 唤起

#### 微信开放标签唤起

最新微信jsdk，微信针对链接直访应用，jsdk 功能做了限制，目前测试以下三种方式支持：

1. 公众号菜单访问后分享
2. 生成二维码，识别二维码后分享
3. 访问页面后添加到收藏，从微信收藏中进入后分享

##### 使用

- 引入sdk包
```html
<script src="./x-sdk.js"></script>
```

- 使用开放标签
```html
<wx-open-launch-app class="wx2app-btn"
                    appid="wx86fb62b7b6e1dea7">
    <script type="text/wxtag-template">
        <p>吊起app</p>
    </script>
</wx-open-launch-app>
```

- 使用 sdk 回调
```javascript
   xsdk.openApp({
        debug: false,
        success:(e)=>{
            console.log('success')
        },
        error: (e) => {
            console.log(e)
        }
    })
```

#### qq 内部唤起

### 微信分享

## env 判断

- pc 
- 微信：安卓、ios
- qq：安卓、ios
- pad：安卓 pad、ios pad、pad 
