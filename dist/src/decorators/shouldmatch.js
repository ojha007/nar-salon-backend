"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShouldMatch = void 0;
const class_validator_1 = require("class-validator");
function ShouldMatch(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    return value === relatedValue;
                },
                defaultMessage(args) {
                    const [relatedPropertyName] = args.constraints;
                    return `${propertyName} does not match with ${relatedPropertyName}.`;
                },
            },
        });
    };
}
exports.ShouldMatch = ShouldMatch;
//# sourceMappingURL=shouldmatch.js.map