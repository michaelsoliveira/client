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
var AuthContext_1 = require("../contexts/AuthContext");
var image_1 = require("next/image");
var react_2 = require("next-auth/react");
var Tabs_1 = require("../components/Tabs");
var Logo_1 = require("../components/Logo");
function Dashboard(_a) {
    var localSession = _a.localSession;
    var client = react_1.useContext(AuthContext_1.AuthContext);
    return (React.createElement("div", { className: "min-h-full" },
        React.createElement("div", { className: "relative flex flex-row overflow-hidden" },
            React.createElement("div", { className: "mt-10 px-12 mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-20 xl:mt-12" },
                React.createElement("div", { className: "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-16" },
                    React.createElement("div", { className: "sm:text-center lg:text-left" },
                        React.createElement("div", null,
                            React.createElement("h1", { className: "flex flex-col text-4xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-6xl lg:text-4xl xl:text-4xl" },
                                React.createElement("span", { className: "block xl:inline" }, "BOManejo Web"),
                                ' ',
                                React.createElement("span", { className: "block text-green-600 xl:inline" }, "Invent\u00E1rio Florestal")),
                            React.createElement("p", { className: "font-roboto mt-3 text-justify text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0 mb-4" }, "O setor florestal brasileiro precisa \u2013 e demanda \u2013 de softwares que agilizem e aprimorem o processo de planejamento florestal, auxiliando na sele\u00E7\u00E3o de \u00E1rvores de corte com base em crit\u00E9rios claros, proporcionando melhor controle sobre a produ\u00E7\u00E3o de madeira e possibilitando o manejo florestal sustent\u00E1vel.")),
                        React.createElement("div", { className: 'w-full' }, !localSession
                            ? (React.createElement(Tabs_1["default"], null))
                            : (React.createElement("div", { className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start" },
                                React.createElement("div", { className: "rounded-md shadow" },
                                    React.createElement("a", { href: "#", className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10" }, "Iniciar")),
                                React.createElement("div", { className: "mt-3 sm:mt-0 sm:ml-3" },
                                    React.createElement("a", { href: "#", className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10", onClick: function () { } }, "Tutorial")))))))),
            React.createElement("div", { className: "hidden lg:ml-0 lg:flex mt-6 lg:flex-col lg:items-center lg:inset-y-0 my-auto mr-20 rounded-tr-xl\n                lg:pr-20 lg:w-3/5 xl:w-2/5 bg-gradient-to-tr from-white via-white to-green-500" },
                React.createElement("div", { className: 'flex flex-row' },
                    React.createElement("div", { className: 'relative mb-10 pt-8' },
                        React.createElement(Logo_1["default"], { width: 'w-24', height: 'h-24' })),
                    React.createElement("div", { className: 'relative right-75 opacity-75 mb-8 pt-8' },
                        React.createElement(Logo_1["default"], { width: 'w-24', height: 'h-24' })),
                    React.createElement("div", { className: 'relative right-0 opacity-50 mb-4 pt-10 -rotate-12' },
                        React.createElement(Logo_1["default"], { width: 'w-24', height: 'h-24' })),
                    React.createElement("div", { className: 'relative right-0 opacity-25 mb-2 pt-16 rotate-12' },
                        React.createElement(Logo_1["default"], { width: 'w-24', height: 'h-24' }))),
                React.createElement(image_1["default"], { className: "object-cover object-center", src: "/web_devices.svg", alt: "", width: '1024px', height: '768px' })))));
}
exports["default"] = Dashboard;
exports.getServerSideProps = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var session;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, react_2.getSession(ctx)];
            case 1:
                session = _a.sent();
                return [2 /*return*/, {
                        props: {
                            localSession: session
                        }
                    }];
        }
    });
}); };
