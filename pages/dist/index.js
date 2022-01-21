"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getServerSideProps = void 0;
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/outline");
var AuthContext_1 = require("../contexts/AuthContext");
var nookies_1 = require("nookies");
var hooks_1 = require("../store/hooks");
var projectSlice_1 = require("../store/projectSlice");
var user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};
var navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
];
var userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
function Dashboard() {
    var dispatch = hooks_1.useAppDispatch();
    var selectedProject = hooks_1.useAppSelector(projectSlice_1.selectProject);
    var _a = react_1.useState(), project = _a[0], setProject = _a[1];
    var context = react_1.useContext(AuthContext_1.AuthContext);
    return (React.createElement("div", { className: "min-h-full" },
        React.createElement(react_2.Disclosure, { as: "nav", className: "bg-gray-300" }, function (_a) {
            var open = _a.open;
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                    React.createElement("div", { className: "flex items-center justify-between h-16" },
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement("div", { className: "flex-shrink-0" },
                                React.createElement("img", { className: "h-8 w-8", src: "https://tailwindui.com/img/logos/workflow-mark-green-500.svg", alt: "Workflow" })),
                            React.createElement("div", { className: "hidden md:block" },
                                React.createElement("div", { className: "ml-10 flex items-baseline space-x-4" }, navigation.map(function (item) { return (React.createElement("a", { key: item.name, href: item.href, className: classNames(item.current
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium'), "aria-current": item.current ? 'page' : undefined }, item.name)); })))),
                        React.createElement("div", { className: "hidden md:block" },
                            React.createElement("div", { className: "ml-4 flex items-center md:ml-6" },
                                React.createElement("button", { type: "button", className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" },
                                    React.createElement("span", { className: "sr-only" }, "View notifications"),
                                    React.createElement(outline_1.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" })),
                                React.createElement(react_2.Menu, { as: "div", className: "ml-3 relative" },
                                    React.createElement("div", null,
                                        React.createElement(react_2.Menu.Button, { className: "max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" },
                                            React.createElement("span", { className: "sr-only" }, "Open user menu"),
                                            React.createElement("img", { className: "h-8 w-8 rounded-full", src: user.imageUrl, alt: "" }))),
                                    React.createElement(react_2.Transition, { as: react_1.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                                        React.createElement(react_2.Menu.Items, { className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, userNavigation.map(function (item) { return (React.createElement(react_2.Menu.Item, { key: item.name }, function (_a) {
                                            var active = _a.active;
                                            return (React.createElement("a", { href: item.href, className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, item.name));
                                        })); })))))),
                        React.createElement("div", { className: "-mr-2 flex md:hidden" },
                            React.createElement(react_2.Disclosure.Button, { className: "bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" },
                                React.createElement("span", { className: "sr-only" }, "Open main menu"),
                                open ? (React.createElement(outline_1.XIcon, { className: "block h-6 w-6", "aria-hidden": "true" })) : (React.createElement(outline_1.MenuIcon, { className: "block h-6 w-6", "aria-hidden": "true" })))))),
                React.createElement(react_2.Disclosure.Panel, { className: "md:hidden" },
                    React.createElement("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3" }, navigation.map(function (item) { return (React.createElement(react_2.Disclosure.Button, { key: item.name, as: "a", href: item.href, className: classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium'), "aria-current": item.current ? 'page' : undefined }, item.name)); })),
                    React.createElement("div", { className: "pt-4 pb-3 border-t border-gray-700" },
                        React.createElement("div", { className: "flex items-center px-5" },
                            React.createElement("div", { className: "flex-shrink-0" },
                                React.createElement("img", { className: "h-10 w-10 rounded-full", src: user.imageUrl, alt: "" })),
                            React.createElement("div", { className: "ml-3" },
                                React.createElement("div", { className: "text-base font-medium leading-none text-white" }, user.name),
                                React.createElement("div", { className: "text-sm font-medium leading-none text-gray-400" }, user.email)),
                            React.createElement("button", { type: "button", className: "ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" },
                                React.createElement("span", { className: "sr-only" }, "View notifications"),
                                React.createElement(outline_1.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }))),
                        React.createElement("div", { className: "mt-3 px-2 space-y-1" }, userNavigation.map(function (item) { return (React.createElement(react_2.Disclosure.Button, { key: item.name, as: "a", href: item.href, className: "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700" }, item.name)); }))))));
        }),
        React.createElement("header", { className: "bg-white shadow" },
            React.createElement("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8" },
                React.createElement("h1", { className: "text-3xl font-bold text-gray-900" }, "Dashboard"))),
        React.createElement("main", null,
            React.createElement("div", { className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "px-4 py-6 sm:px-0" },
                    React.createElement("div", { className: "border-4 border-dashed border-gray-200 rounded-lg h-96" }))))));
}
exports["default"] = Dashboard;
exports.getServerSideProps = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var token;
    return __generator(this, function (_a) {
        token = nookies_1.parseCookies(ctx)["X-CSRFToken"];
        if (!token) {
            return [2 /*return*/, {
                    redirect: {
                        destination: '/login',
                        permanent: false
                    }
                }];
        }
        // await apiClient(ctx).get('/users')
        return [2 /*return*/, {
                props: {}
            }];
    });
}); };
