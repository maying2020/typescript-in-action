"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Hello_1 = __importDefault(require("./components/Hello"));
react_dom_1.default.render(<Hello_1.default name="TypeScript"/>, document.querySelectorAll('.app')[0]);
