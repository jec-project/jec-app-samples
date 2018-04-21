"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const jec_juta_1 = require("jec-juta");
const jec_exchange_mock_1 = require("jec-exchange-mock");
const chai_1 = require("chai");
const Status_1 = require("../../src/jslets/Status");
let StatusTest = class StatusTest {
    constructor() {
        this.jslet = null;
    }
    initTest() {
        this.jslet = new Status_1.Status();
    }
    resetTest() {
        this.jslet = null;
    }
    doGetTest(done) {
        const contextMock = jec_exchange_mock_1.JsletContextMockBuilder.create().statusInfo({ info: "info" }).build();
        this.jslet.setContext(contextMock);
        this.jslet.doGet(null, null, (req, res, data) => {
            chai_1.expect(data).to.equals(contextMock.getStatusInfo());
            done();
        });
    }
};
__decorate([
    jec_juta_1.Before(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StatusTest.prototype, "initTest", null);
__decorate([
    jec_juta_1.After(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StatusTest.prototype, "resetTest", null);
__decorate([
    jec_juta_1.Test({
        description: "should return the status info as specified by the associated JsletContext instance"
    }),
    __param(0, jec_juta_1.Async),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], StatusTest.prototype, "doGetTest", null);
StatusTest = __decorate([
    jec_juta_1.TestSuite({
        description: "Test the Status class methods"
    })
], StatusTest);
exports.StatusTest = StatusTest;
