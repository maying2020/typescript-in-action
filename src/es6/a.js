"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 单独导出
exports.a = 1;
// 批量导出
var b = 2;
exports.b = b;
var c = 3;
exports.c = c;
// 导出函数
function f() { }
exports.f = f;
// 导出时起别名
function g() { }
exports.G = g;
;
// 默认导出，无需函数名
function default_1() {
    console.log('default');
}
exports.default = default_1;
// 引入外部模块 再次导出
var b_1 = require("./b");
exports.Hello = b_1.str;
