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
var react_1 = require("react");
var router_1 = require("next/router");
var react_hook_form_1 = require("react-hook-form");
var yup_1 = require("@hookform/resolvers/yup");
var Yup = require("yup");
var solid_1 = require("@heroicons/react/solid");
var AuthContext_1 = require("../contexts/AuthContext");
var nookies_1 = require("nookies");
// import { userService } from 'services';
exports["default"] = Login;
function Login() {
    var router = router_1.useRouter();
    var signIn = react_1.useContext(AuthContext_1.AuthContext).signIn;
    react_1.useEffect(function () {
        // redirect to home if already logged in
        var token = nookies_1.parseCookies()["X-CSRFToken"];
        if (!token) {
            router.push('/');
        }
    }, []);
    // form validation rules 
    var validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    var formOptions = { resolver: yup_1.yupResolver(validationSchema) };
    // get functions to build form with useForm() hook
    var _a = react_hook_form_1.useForm(formOptions), register = _a.register, handleSubmit = _a.handleSubmit, setError = _a.setError, formState = _a.formState;
    var errors = formState.errors;
    function onSubmit(_a) {
        var email = _a.email, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, signIn({ email: email, password: password })
                            .then(function (data) {
                            console.log(data);
                        })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("div", { className: "min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" },
        React.createElement("div", { className: "max-w-md w-full space-y-8" },
            React.createElement("div", null,
                React.createElement("img", { className: "mx-auto h-12 w-auto", src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg", alt: "Workflow" }),
                React.createElement("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, "Sign in to your account")),
            React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "mt-8 space-y-6", method: 'POST' },
                React.createElement("input", { type: "hidden", name: "remember", defaultValue: "true" }),
                React.createElement("div", { className: "rounded-md shadow-sm -space-y-px" },
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "email-address", className: "sr-only" }, "Email address"),
                        React.createElement("input", __assign({}, register('email'), { id: "email-address", name: "email", type: "email", autoComplete: "email", required: true, className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm", placeholder: "Email address" }))),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "password", className: "sr-only" }, "Password"),
                        React.createElement("input", __assign({}, register('password'), { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm", placeholder: "Password" })))),
                React.createElement("div", { className: "flex items-center justify-between" },
                    React.createElement("div", { className: "flex items-center" },
                        React.createElement("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" }),
                        React.createElement("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-gray-900" }, "Remember me")),
                    React.createElement("div", { className: "text-sm" },
                        React.createElement("a", { href: "#", className: "font-medium text-green-600 hover:text-green-500" }, "Forgot your password?"))),
                React.createElement("div", null,
                    React.createElement("button", { disabled: formState.isSubmitting, type: "submit", className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" },
                        React.createElement("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3" },
                            React.createElement(solid_1.LockClosedIcon, { className: "h-5 w-5 text-green-500 group-hover:text-green-400", "aria-hidden": "true" })),
                        "Sign in"))))));
}
