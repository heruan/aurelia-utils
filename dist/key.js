"use strict";
var Key = (function () {
    function Key() {
    }
    Key.getKeyFromEvent = function (event) {
        if (event.key) {
            return event.key;
        }
        else if (event.which) {
            switch (event.which) {
                case Key.BACKSPACE_CODE: return Key.BACKSPACE;
                case Key.TAB_CODE: return Key.TAB;
                case Key.ENTER_CODE: return Key.ENTER;
                case Key.ESCAPE_CODE: return Key.ESCAPE;
                case Key.ARROW_LEFT_CODE: return Key.ARROW_LEFT;
                case Key.ARROW_UP_CODE: return Key.ARROW_UP;
                case Key.ARROW_RIGHT_CODE: return Key.ARROW_RIGHT;
                case Key.ARROW_DOWN_CODE: return Key.ARROW_DOWN;
                case Key.SEMICOLON_CODE: return Key.SEMICOLON;
                case Key.COMMA_CODE: return Key.COMMA;
            }
        }
    };
    Key.BACKSPACE = "Backspace";
    Key.BACKSPACE_CODE = 8;
    Key.TAB = "Tab";
    Key.TAB_CODE = 9;
    Key.ENTER = "Enter";
    Key.ENTER_CODE = 13;
    Key.ESCAPE = "Escape";
    Key.ESCAPE_CODE = 27;
    Key.ARROW_LEFT = "ArrowLeft";
    Key.ARROW_LEFT_CODE = 37;
    Key.ARROW_UP = "ArrowUp";
    Key.ARROW_UP_CODE = 38;
    Key.ARROW_RIGHT = "ArrowRight";
    Key.ARROW_RIGHT_CODE = 39;
    Key.ARROW_DOWN = "ArrowDown";
    Key.ARROW_DOWN_CODE = 40;
    Key.SEMICOLON = "Semicolon";
    Key.SEMICOLON_CODE = 186;
    Key.COMMA = "Comma";
    Key.COMMA_CODE = 188;
    return Key;
}());
exports.Key = Key;
