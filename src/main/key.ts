export class Key {

    public static BACKSPACE = "Backspace";

    public static BACKSPACE_CODE = 8;

    public static TAB = "Tab";

    public static TAB_CODE = 9;

    public static ENTER = "Enter";

    public static ENTER_CODE = 13;

    public static ESCAPE = "Escape";

    public static ESCAPE_CODE = 27;

    public static ARROW_LEFT = "ArrowLeft";

    public static ARROW_LEFT_CODE = 37;

    public static ARROW_UP = "ArrowUp";

    public static ARROW_UP_CODE = 38;

    public static ARROW_RIGHT = "ArrowRight";

    public static ARROW_RIGHT_CODE = 39;

    public static ARROW_DOWN = "ArrowDown";

    public static ARROW_DOWN_CODE = 40;

    public static SEMICOLON = "Semicolon";

    public static SEMICOLON_CODE = 186;

    public static COMMA = "Comma";

    public static COMMA_CODE = 188;

    public static getKeyFromEvent(event: KeyboardEvent): string {
        if (event.key) {
            return event.key;
        } else if (event.which) {
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
    }

}
