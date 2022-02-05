"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Login_1 = require("./Login");
var RegisterForm_1 = require("./RegisterForm");
var styles = {
    label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
    field: 'text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
    button: ' bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500',
    errorMsg: 'text-red-500 text-sm'
};
var Tabs = function () {
    var _a = react_1.useState(1), openTab = _a[0], setOpenTab = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex flex-wrap" },
            React.createElement("div", { className: "w-full" },
                React.createElement("ul", { className: "flex mb-0 list-none flex-wrap pt-3 pb-2 flex-row", role: "tablist" },
                    React.createElement("li", { className: "-mb-px last:mr-0 flex-auto text-center" },
                        React.createElement("a", { className: "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 1
                                    ? "text-white bg-green-600"
                                    : "text-green-600 bg-white"), onClick: function (e) {
                                e.preventDefault();
                                setOpenTab(1);
                            }, "data-toggle": "tab", href: "#link1", role: "tablist" }, "Login")),
                    React.createElement("li", { className: "-mb-px mr-2 last:mr-0 flex-auto text-center" },
                        React.createElement("a", { className: "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 2
                                    ? "text-white bg-green-600"
                                    : "text-green-600 bg-white"), onClick: function (e) {
                                e.preventDefault();
                                setOpenTab(2);
                            }, "data-toggle": "tab", href: "#link2", role: "tablist" }, "Cadastro"))),
                React.createElement("div", { className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" },
                    React.createElement("div", { className: "px-4 py-5 flex-auto" },
                        React.createElement("div", { className: "tab-content tab-space" },
                            React.createElement("div", { className: openTab === 1 ? "block" : "hidden", id: "link1" },
                                React.createElement(Login_1["default"], null)),
                            React.createElement("div", { className: openTab === 2 ? "block" : "hidden", id: "link2" },
                                React.createElement(RegisterForm_1.RegisterForm, { styles: styles })))))))));
};
exports["default"] = Tabs;
