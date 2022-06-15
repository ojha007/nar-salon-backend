"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.Role = void 0;
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
})(Role = exports.Role || (exports.Role = {}));
var Action;
(function (Action) {
    Action["ALL"] = "all";
    Action["CREATE"] = "create";
    Action["EDIT"] = "edit";
    Action["DELETE"] = "delete";
    Action["VIEW"] = "view";
})(Action = exports.Action || (exports.Action = {}));
//# sourceMappingURL=roles.js.map