"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const a_1 = require("./a");
const a_2 = __importDefault(require("./a"));
const calc = new a_2.default();
console.log(calc.multiply(10, 5));
console.log((0, a_1.add)(1, 2));
console.log((0, a_1.subtract)(3, 1));
