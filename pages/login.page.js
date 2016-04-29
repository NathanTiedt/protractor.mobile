

var Login = function () {
    // elements
    var btnLogin = element(by.css('[ng-click="login();"]'));
    var btnCode = element(by.css('[ng-click="code();"]'));
    
    // getters
    this.getBtnLogin        = function () { return btnLogin; };
    this.getBtnCode         = function () { return btnCode; };
    
    // clickers
    this.clickBtnLogin = function () {
        btnLogin.click();
    };
    this.clickBtnCode = function () {
        btnCode.click();
    };
};


module.exports = Login;