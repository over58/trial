/**
 * 属性装饰器
 *   属性装饰器表达式会在运行时当做函数被调用，传入下列2个参数
 *
 *   1.对于静态成员来说是类的构造函数，对于实例成员是累的原型对象
 *   2.成员的名字
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(value) {
    return function (target, key) {
        console.log(target, key, value);
        console.log(target[key]);
        target[key] = value;
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this.url = '我是构造函数里面的url';
        // console.log(this.url) 
    }
    HttpClient.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        log('http://www.baidu.com')
    ], HttpClient.prototype, "url");
    return HttpClient;
}());
var h = new HttpClient();
h.getData();
console.log(h);
