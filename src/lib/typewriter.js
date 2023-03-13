"use strict";
exports.__esModule = true;
exports.typing = void 0;
var typedChars = "";
var index = 0;
var typewriter;
var typedChar = function (Name) {
    if (index < Name.length) {
        typedChars += Name[index];
        index++;
    }
    else {
        clearInterval(typewriter);
    }
};
var typing = function (Name) {
    typewriter = setInterval(typedChar(Name), 100);
    return typedChars;
};
exports.typing = typing;
