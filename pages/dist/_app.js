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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
require("../styles/globals.css");
require("react-toastify/dist/ReactToastify.css");
var AuthContext_1 = require("../contexts/AuthContext");
var react_redux_1 = require("react-redux");
var store_1 = require("../store");
var Layout_1 = require("../components/Layout");
var react_toastify_1 = require("react-toastify");
var react_1 = require("next-auth/react");
function MyApp(_a) {
    // useEffect(() => {
    //   window.fbAsyncInit = function() {
    //     window.FB.init({
    //       appId            : process.env.FACEBOOK_CLIENT_ID,
    //       autoLogAppEvents : true,
    //       xfbml            : true,
    //       version          : 'v12.0'
    //     });
    //   };
    // })
    var Component = _a.Component, _b = _a.pageProps, session = _b.session, pageProps = __rest(_b, ["session"]);
    return (React.createElement(react_1.SessionProvider, { session: session },
        React.createElement(react_redux_1.Provider, { store: store_1.store },
            React.createElement(AuthContext_1.AuthProvider, null,
                React.createElement(Layout_1["default"], null,
                    React.createElement(react_toastify_1.ToastContainer, null),
                    React.createElement(Component, __assign({}, pageProps)))))));
}
exports["default"] = MyApp;
