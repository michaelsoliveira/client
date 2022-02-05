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
/* This example requires Tailwind CSS v2.0+ */
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var Link_1 = require("./Link");
var Logo_1 = require("./Logo");
var react_3 = require("next-auth/react");
var outline_1 = require("@heroicons/react/outline");
var solid_1 = require("@heroicons/react/solid");
var router_1 = require("next/router");
var callsToAction = [
    { name: 'Watch Demo', href: '#', icon: outline_1.PlayIcon },
    { name: 'Contact Sales', href: '#', icon: outline_1.PhoneIcon },
];
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
function Navigation() {
    // const { isAuthenticated, loggedUser, signOut } = useContext(AuthContext)
    var session = react_3.useSession().data;
    var router = router_1.useRouter();
    function logout() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                react_3.signOut();
                router.push('/');
                return [2 /*return*/];
            });
        });
    }
    var resources = [
        {
            name: 'Cadastro da Empresa',
            description: 'Informações da Empresa',
            href: '/empresa',
            icon: outline_1.ClipboardListIcon
        },
        {
            name: 'Cadastro da UMF',
            description: 'Unidade de Manejo Florestal',
            href: '#',
            icon: outline_1.SupportIcon
        },
        {
            name: 'Cadastro de UPA',
            description: 'Unidade de Produção Anual',
            href: '#',
            icon: outline_1.BookmarkAltIcon
        },
        {
            name: 'Cadastro de UT',
            description: 'Unidade de Trabalho',
            href: '#',
            icon: outline_1.CalendarIcon
        },
        {
            name: 'Cadastro de Especies',
            description: 'Espécies Existentes',
            href: '/especie',
            icon: outline_1.ClipboardListIcon
        }
    ];
    var recentPosts = [
        { id: 1, name: 'Boost your conversion rate', href: '#' },
        { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
        { id: 3, name: 'Improve your customer experience', href: '#' },
    ];
    var solutions = [
        {
            name: 'Analytics',
            description: 'Get a better understanding of where your traffic is coming from.',
            href: '#',
            icon: outline_1.ChartBarIcon
        },
        {
            name: 'Engagement',
            description: 'Speak directly to your customers in a more meaningful way.',
            href: '#',
            icon: outline_1.CursorClickIcon
        },
        { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: outline_1.ShieldCheckIcon },
        {
            name: 'Integrations',
            description: "Connect with third-party tools that you're already using.",
            href: '#',
            icon: outline_1.ViewGridIcon
        },
        {
            name: 'Automations',
            description: 'Build strategic funnels that will drive your customers to convert',
            href: '#',
            icon: outline_1.RefreshIcon
        },
    ];
    var navigation = [
        { name: 'Dashboard', href: '/', current: true, visible: true, subMenu: false, subMenuItems: [] },
        { name: 'Cadastro', href: '#', current: false, visible: !!session, subMenu: true, subMenuItems: resources },
        { name: 'Soluções', href: '#', current: false, visible: true, subMenu: true, subMenuItems: solutions },
        { name: 'Planejamento', href: '#', current: false, visible: !!session, subMenuItems: [] },
        { name: 'Relatórios', href: '#', current: false, visible: !!session, subMenu: false, subMenuItems: [] }
    ];
    var userNavigation = [
        { name: 'Perfil', href: '#', click: function () { alert("teste1"); } },
        { name: 'Settings', href: '#', click: function () { } },
        { name: 'Logout', href: '#', click: function () { return react_3.signOut(); } },
    ];
    return (React.createElement(react_2.Disclosure, { as: "nav", className: "bg-white shadow" }, function (_a) {
        var _b, _c, _d, _e, _f, _g;
        var open = _a.open;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "flex items-center justify-between h-16" },
                    React.createElement("div", { className: "flex items-center justify-between max-w-full w-full" },
                        React.createElement("div", { className: "flex-shrink-0 lg:-mr-16" },
                            React.createElement(Logo_1["default"], { width: 'w-10', height: 'h-10' })),
                        React.createElement("div", { className: "hidden md:block" },
                            React.createElement("div", { className: "ml-10 flex items-baseline space-x-4" }, navigation.map(function (item, key) { return (item.visible && (!item.subMenu ?
                                (React.createElement(Link_1.Link, { key: key, href: item.href, className: classNames(item.current
                                        ? 'border-b-2 border-green-700 text-gray-700 bg-gray-100'
                                        : 'text-gray-700 hover:border-b-2 hover:border-green-700 hover:text-green-800 transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-105', 'px-6 py-2 text-sm font-medium hover:bg-gray-100 in-line flex'), "aria-current": item.current ? 'page' : undefined }, item.name)) :
                                (React.createElement(react_2.Menu, { as: "div", className: "relative inline-block text-left", key: key }, function (_a) {
                                    var open = _a.open;
                                    return (React.createElement(React.Fragment, null,
                                        React.createElement("div", null,
                                            React.createElement(react_2.Menu.Button, { className: "inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:border-b-2 hover:border-green-700 hover:text-green-800 transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-105" },
                                                item.name,
                                                React.createElement(solid_1.ChevronDownIcon, { className: classNames(open ? 'text-green-700' : 'text-gray-400', 'w-5 h-5 ml-2 -mr-1'), "aria-hidden": "true" }))),
                                        React.createElement(react_2.Transition, { as: react_1.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                                            React.createElement(react_2.Menu.Items, { className: "z-30 absolute w-96 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, item.subMenuItems.map(function (subMenu, key) {
                                                return (React.createElement("div", { className: 'px-2 py-2', key: key },
                                                    React.createElement(react_2.Menu.Item, { key: key }, function (_a) {
                                                        var active = _a.active;
                                                        return (React.createElement(Link_1.Link, { href: subMenu.href, className: classNames(active ? 'bg-gray-100' : 'text-gray-800', 'group flex rounded-md items-center w-full px-2 py-2 text-sm') },
                                                            (subMenu === null || subMenu === void 0 ? void 0 : subMenu.icon) && (React.createElement(subMenu.icon, { className: "flex-shrink-0 h-6 w-6 text-green-700", "aria-hidden": "true" })),
                                                            React.createElement("div", { className: "ml-4" },
                                                                React.createElement("p", { className: "text-base font-medium text-gray-900" }, subMenu.name),
                                                                (subMenu === null || subMenu === void 0 ? void 0 : subMenu.description) && (React.createElement("p", { className: "mt-1 text-sm text-gray-500" }, subMenu === null || subMenu === void 0 ? void 0 : subMenu.description)))));
                                                    })));
                                            })))));
                                })))); }))),
                        React.createElement("div", { className: 'hidden md:block' }, !session && (React.createElement("div", { className: "px-2" },
                            React.createElement(Link_1.Link, { href: "/login", className: "block bg-green-700 shadow hover:border-b-2 hover:border-green-700 text-sm px-6 py-2 \n                        text-white rounded-md hover:text-white transition duration-500 ease-in-out hover:bg-green-600\n                        transform hover:-translate-y-1 hover:scale-105" }, "Login"))))),
                    session && (React.createElement("div", { className: "hidden md:block" },
                        React.createElement("div", { className: "ml-4 flex items-center md:ml-6" },
                            React.createElement("button", { type: "button", className: "bg-gray-200 p-1 rounded-full text-gray-700 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white" },
                                React.createElement("span", { className: "sr-only" }, "View notifications"),
                                React.createElement(outline_1.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" })),
                            React.createElement(react_2.Menu, { as: "div", className: "ml-3 relative" },
                                React.createElement("div", null,
                                    React.createElement(react_2.Menu.Button, { className: "max-w-xs bg-gray-700 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white" },
                                        React.createElement("span", { className: "sr-only" }, "Open user menu"),
                                        React.createElement("img", { className: "h-8 w-10 rounded-full", src: session && ((_b = session.user) === null || _b === void 0 ? void 0 : _b.image) !== null ? ((_c = session.user) === null || _c === void 0 ? void 0 : _c.image) || 'https://img.icons8.com/office/80/000000/administrator-male--v1.png' : '', alt: "" }))),
                                React.createElement(react_2.Transition, { as: react_1.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                                    React.createElement(react_2.Menu.Items, { className: "origin-top-right absolute z-20 right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, userNavigation.map(function (item, key) { return (React.createElement(react_2.Menu.Item, { key: key }, function (_a) {
                                        var active = _a.active;
                                        return (React.createElement("a", { href: item.href, className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'), onClick: item.click }, item.name));
                                    })); }))))))),
                    React.createElement("div", { className: "-mr-2 flex md:hidden" },
                        React.createElement(react_2.Disclosure.Button, { className: "bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white" },
                            React.createElement("span", { className: "sr-only" }, "Open main menu"),
                            open ? (React.createElement(outline_1.XIcon, { className: "block h-6 w-6", "aria-hidden": "true" })) : (React.createElement(outline_1.MenuIcon, { className: "block h-6 w-6", "aria-hidden": "true" })))))),
            React.createElement(react_2.Disclosure.Panel, { className: "md:hidden" },
                React.createElement("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3" }, navigation.map(function (item, key) { return (item.visible &&
                    (!item.subMenu ?
                        (React.createElement(react_2.Disclosure.Button, { key: key, as: "a", href: item.href, className: classNames(item.current ? 'bg-green-700 text-white' : 'text-gray-700 hover:bg-green-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium transition-all'), "aria-current": item.current ? 'page' : undefined }, item.name)) :
                        (React.createElement(react_2.Popover, { as: "div", className: "w-full", key: key }, function (_a) {
                            var open = _a.open;
                            return (React.createElement(React.Fragment, null,
                                React.createElement("div", null,
                                    React.createElement(react_2.Popover.Button, { className: "inline-flex w-full rounded-md px-3 py-2 font-medium text-gray-700 hover:text-white transition duration-500 ease-in-out hover:bg-green-700" },
                                        item.name,
                                        open ? (React.createElement(solid_1.ChevronUpIcon, { className: classNames(open ? 'text-gray-400' : 'text-gray-400', 'w-5 h-5 ml-4 -mr-1'), "aria-hidden": "true" })) : (React.createElement(solid_1.ChevronDownIcon, { className: classNames(open ? 'text-gray-400' : 'text-gray-400', 'w-5 h-5 ml-4 -mr-1'), "aria-hidden": "true" })))),
                                React.createElement(react_2.Transition, { as: react_1.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                                    React.createElement(react_2.Popover.Panel, { className: "z-30 relative lg:right-0 w-full mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, item.subMenuItems.map(function (subMenu, key) {
                                        return (React.createElement("div", { className: 'px-2 py-2', key: key },
                                            React.createElement(Link_1.Link, { href: subMenu.href, className: classNames('hover:bg-gray-100', 'group flex rounded-md items-center w-full px-2 py-2 text-sm') },
                                                (subMenu === null || subMenu === void 0 ? void 0 : subMenu.icon) && (React.createElement(subMenu.icon, { className: "flex-shrink-0 h-6 w-6 text-green-700", "aria-hidden": "true" })),
                                                React.createElement("div", { className: "ml-4" },
                                                    React.createElement("p", { className: "text-base font-medium text-gray-900" }, subMenu.name),
                                                    (subMenu === null || subMenu === void 0 ? void 0 : subMenu.description) && (React.createElement("p", { className: "mt-1 text-sm text-gray-500" }, subMenu === null || subMenu === void 0 ? void 0 : subMenu.description))))));
                                    })))));
                        })))); })),
                session ? (React.createElement("div", { className: "pt-4 pb-3 border-t border-gray-700" },
                    React.createElement("div", { className: "flex items-center px-5" },
                        React.createElement("div", { className: "flex-shrink-0" },
                            React.createElement("img", { className: "h-10 w-10 rounded-full", src: session && ((_d = session.user) === null || _d === void 0 ? void 0 : _d.image) !== null ? ((_e = session.user) === null || _e === void 0 ? void 0 : _e.image) || 'https://img.icons8.com/office/80/000000/administrator-male--v1.png' : '', alt: "" })),
                        React.createElement("div", { className: "ml-3" },
                            React.createElement("div", { className: "text-base font-medium leading-none text-gray-600" }, session && ((_f = session.user) === null || _f === void 0 ? void 0 : _f.name)),
                            React.createElement("div", { className: "text-sm font-medium leading-none text-gray-400" }, session && ((_g = session.user) === null || _g === void 0 ? void 0 : _g.email))),
                        React.createElement("button", { type: "button", className: "ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" },
                            React.createElement("span", { className: "sr-only" }, "View notifications"),
                            React.createElement(outline_1.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }))),
                    React.createElement("div", { className: "mt-3 px-2 space-y-1" }, userNavigation.map(function (item, key) { return (React.createElement(Link_1.Link, { key: key, as: "a", href: item.href, className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-green-700", onClick: item.click }, item.name)); })))) : (React.createElement("div", { className: "px-3 pb-2 -mt-1" },
                    React.createElement(Link_1.Link, { href: "/login", className: "block px-2 py-2 rounded-md text-base text-gray-700 hover:text-white hover:bg-green-700 hover:transition-all" }, "Login"))))));
    }));
}
exports["default"] = Navigation;
