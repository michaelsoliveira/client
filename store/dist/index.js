"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var projectSlice_1 = require("./projectSlice");
var userSlice_1 = require("./userSlice");
var messageSlice_1 = require("./messageSlice");
var paginationSlice_1 = require("./paginationSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        project: projectSlice_1["default"],
        user: userSlice_1["default"],
        message: messageSlice_1["default"],
        pagination: paginationSlice_1["default"]
    }
});
