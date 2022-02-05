"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = require("react");
var async_1 = require("react-select/async");
var optionValues = [
    { label: 'Não Definida', value: '0' },
    { label: 'Comercial 1', value: '1' },
    { label: 'Comercial 2', value: '2' },
    { label: 'Comercial 3', value: '3' },
    { label: 'Comercial 4', value: '4' }
];
var filterOptions = function (search) {
    return optionValues.filter(function (i) {
        return i.label.toLowerCase().includes(search.toLowerCase());
    });
};
var filterOptionById = function (id) {
    return optionValues.find(function (i) { return i.value === id; });
};
var loadOptions = function (inputValue, callback) {
    setTimeout(function () {
        callback(filterOptions(inputValue));
    }, 1000);
};
var WithCallbacks = /** @class */ (function (_super) {
    __extends(WithCallbacks, _super);
    function WithCallbacks() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { inputValue: '' };
        _this.handleInputChange = function (newValue) {
            var inputValue = newValue.replace(/\W/g, '');
            _this.setState({ inputValue: inputValue });
            return inputValue;
        };
        return _this;
    }
    WithCallbacks.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { htmlFor: "" }, this.props.label),
            react_1["default"].createElement(async_1["default"], { cacheOptions: true, loadOptions: loadOptions, defaultOptions: true, defaultValue: filterOptionById(this.props.id ? this.props.id : ''), onInputChange: this.handleInputChange, onChange: this.props.value, id: "category-select", instanceId: "category-select", theme: function (theme) { return (__assign(__assign({}, theme), { 
                    // borderRadius: 0,
                    colors: __assign(__assign({}, theme.colors), { primary: 'rgb(21 128 61)', primary75: 'rgb(22 163 74)', primary50: 'rgb(21 128 61)', primary25: 'rgb(229 231 235)' }) })); } })));
    };
    return WithCallbacks;
}(react_1.Component));
exports["default"] = WithCallbacks;
