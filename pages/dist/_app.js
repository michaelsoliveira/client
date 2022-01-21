"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../styles/globals.css");
var AuthContext_1 = require("../contexts/AuthContext");
var react_redux_1 = require("react-redux");
var store_1 = require("../store");
var Sidebar_1 = require("../components/Sidebar");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(react_redux_1.Provider, { store: store_1.store },
        React.createElement(AuthContext_1.AuthProvider, null,
            React.createElement(Sidebar_1["default"], null),
            React.createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = MyApp;
