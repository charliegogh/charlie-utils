"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ErrorMonitor = /*#__PURE__*/function () {
    function ErrorMonitor() {
        _classCallCheck(this, ErrorMonitor);
        this.init();
        this.errorMessages = [];
    }
    _createClass(ErrorMonitor, [{
        key: "init",
        value: function init() {
            var _this = this;
            var isIE = /Trident|MSIE/.test(navigator.userAgent);
            if (!isIE) {
                window.onerror = function (message, source, lineno, colno, error) {
                    var data = {
                        message: message,
                        source: source,
                        lineno: lineno,
                        colno: colno,
                        error: error
                    };
                    if (!document.querySelector('#x-header-container')) {
                        _this.errorMessages.push(data);
                        _this.updateErrorContainer();
                    }
                };
            }
        }
    }, {
        key: "createErrorContainer",
        value: function createErrorContainer() {
            var el = document.querySelector('.x-error-container');
            if (el) return el;
            var errorContainer = document.createElement('div');
            errorContainer.classList.add('x-error-container');
            errorContainer.style.position = 'absolute';
            errorContainer.style.left = '0px';
            errorContainer.style.top = '0px';
            return errorContainer;
        }
    }, {
        key: "updateErrorContainer",
        value: function updateErrorContainer() {
            var _this2 = this,
                _document$querySelect;
            this.errorContainer = this.createErrorContainer();
            this.errorContainer.innerHTML = ''; // 清空原有内容
            var reloadContainer = document.createElement('p');
            reloadContainer.classList.add('x-error-container__reload');
            reloadContainer.innerHTML = '抱歉，阅读内容未能正常加载，请点击 <a href="javascript:;" id="reloadAction" style="color: red">【刷新页面】</a> 重试。';
            this.errorContainer.appendChild(reloadContainer);
            this.errorMessages.forEach(function (error) {
                var sourceElement = document.createElement('div');
                sourceElement.classList.add('source-element');
                sourceElement.innerHTML = "<p>Error source: ".concat(error.source, "</p><p>Error message: ").concat(error.message, "</p>");
                var errorMessage = document.createElement('div');
                errorMessage.appendChild(sourceElement);
                _this2.errorContainer.appendChild(errorMessage);
            });
            if (!document.querySelector('.x-error-container')) {
                document.body.appendChild(this.errorContainer);
            }
            (_document$querySelect = document.querySelector('#reloadAction')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('click', function () {
                _this2.refreshPageWithParam();
            });
        }
    }, {
        key: "refreshPageWithParam",
        value: function refreshPageWithParam() {
            var url = new URL(window.location.href);
            url.searchParams.set('refresh', Date.now());
            window.location.replace(url.toString());
        }
    }]);
    return ErrorMonitor;
}();
new ErrorMonitor();
