"use strict";
exports.__esModule = true;
var Navigation_1 = require("./Navigation");
var Footer_1 = require("./Footer");
var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "content font-roboto" },
        React.createElement(Navigation_1["default"], null),
        children,
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = Layout;
