"use strict";
exports.__esModule = true;
var Select_1 = require("./Select");
var Input_1 = require("./Input");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var Especie = function () {
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    var inputNome = react_1.useRef();
    var inputNomeOrgao = react_1.useRef();
    var inputNomeCientifico = react_1.useRef();
    var selectedCategoria = function (data) {
        console.log(data);
    };
    var onSubmit = function (data) {
        var _a;
        console.log((_a = inputNome.current) === null || _a === void 0 ? void 0 : _a.value);
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "bg-gray-100 py-6 flex flex-col justify-center sm:py-12" },
            React.createElement("div", { className: "relative py-3 w-11/12 max-w-xl sm:mx-auto" },
                React.createElement("div", { className: "relative p-8 bg-white shadow-sm sm:rounded-xl" },
                    React.createElement("form", { className: "w-full", onSubmit: handleSubmit(onSubmit) },
                        React.createElement("div", { className: 'pb-4' },
                            React.createElement(Select_1["default"], { label: "Categoria", value: selectedCategoria })),
                        React.createElement(Input_1["default"], { register: register, 
                            // forwardRef={inputNome}
                            // name="nome"
                            id: "nome", label: "Nome", wrapperClassName: "pb-4" }),
                        React.createElement(Input_1["default"], { forwardRef: inputNome, id: "nomeOrgao", label: "Nome Vulgar", wrapperClassName: "pb-4" }),
                        React.createElement(Input_1["default"], { id: "nomeCientifico", label: "Nome Cient\u00EDfico", wrapperClassName: "pb-4" }),
                        React.createElement("button", { className: "w-full bg-green-600 text-white p-3 rounded-md" }, "Salvar")))))));
};
exports["default"] = Especie;
