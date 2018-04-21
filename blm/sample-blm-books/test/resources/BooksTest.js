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
const chai_1 = require("chai");
const Books_1 = require("../../src/resources/Books");
const MockBooksDao_1 = require("../../src/services/impl/MockBooksDao");
let BooksTest = class BooksTest {
    constructor() {
        this.books = null;
        this.booksDao = null;
    }
    initTest() {
        this.books = new Books_1.Books();
        this.booksDao = new MockBooksDao_1.MockBooksDao();
        this.books.dao = this.booksDao;
    }
    resetTest() {
        this.books.dao = null;
        this.books = null;
        this.booksDao = null;
    }
    getBooksTest(done) {
        this.books.getBooks((data, err) => {
            chai_1.expect(data).to.equals(MockBooksDao_1.MockBooksDao.BOOKS);
            done();
        });
    }
};
__decorate([
    jec_juta_1.Before(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksTest.prototype, "initTest", null);
__decorate([
    jec_juta_1.After(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksTest.prototype, "resetTest", null);
__decorate([
    jec_juta_1.Test({
        description: "should return the complete list of books defined in the Mock object"
    }),
    __param(0, jec_juta_1.Async),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], BooksTest.prototype, "getBooksTest", null);
BooksTest = __decorate([
    jec_juta_1.TestSuite({
        description: "Test the Books class methods"
    })
], BooksTest);
exports.BooksTest = BooksTest;
