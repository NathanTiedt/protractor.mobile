var conf = require('./conf.js');

exports.config = {
    capabilities: conf.getCapabilities(),
    baseUrl: conf.getBaseURL(),
    specs: conf.getSpecs(),
    jasmineNodeOpts: conf.getJasmineNodeOpts()
};