"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tiger_1 = require("jec-tiger");
const jec_jars_mock_1 = require("jec-jars-mock");
const jec_jdi_mock_1 = require("jec-jdi-mock");
const jec_exchange_mock_1 = require("jec-exchange-mock");
const factory = new jec_tiger_1.TigerFactory();
const tiger = factory.create();
tiger.beforeProcess(() => {
    jec_jars_mock_1.JarsMock.getInstance().createContext();
    jec_jdi_mock_1.JdiMock.getInstance().createContext();
    jec_exchange_mock_1.JsletMock.getInstance().createContext();
});
tiger.process((stats) => {
    if (stats.error)
        console.error(stats.error);
    else {
        console.log(`Test stats:
- test lookup process duration: ${stats.time}
- number of test suites: ${stats.numTestSuites}
- number of disabled test suites: ${stats.numDisabledTestSuites}
- number of synchronous test cases: ${stats.numTests}
- number of asynchronous test cases: ${stats.numAsyncTests}
- number of disabled test cases: ${stats.numDisabledTests}`);
    }
});
