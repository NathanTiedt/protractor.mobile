

var Configuration = function () {
    var capabilities = {
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--disable-web-security']
        }
    };
    var baseURL = 'http://localhost:8100';
    var specs = [
        './../specs/logWorkout.spec.js'
    ];
    var jasmineNodeOpts = {
        isVerbose: true
    };
    
    this.getCapabilities        = function () { return capabilities; };
    this.getBaseURL             = function () { return baseURL; };
    this.getSpecs               = function () { return specs; };
    this.getJasmineNodeOpts     = function () { return jasmineNodeOpts; }; 
};

module.exports = new Configuration();