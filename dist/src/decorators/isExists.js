"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsExists = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
function IsExists(input, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [input],
            validator: {
                async validate(input, args) {
                    const entityManager = (0, typeorm_1.getManager)();
                    const { constraints } = args;
                    if (!constraints.length)
                        return false;
                    const body = constraints[0];
                    if (!body.table)
                        return false;
                    if (!body.column)
                        return false;
                    const rep = [];
                    rep.push(input);
                    let query = `select count(*) as ok from ${body.table} where ${body.column}=$1 `;
                    if (body.options) {
                        const options = body.options;
                        if (Array.isArray(options)) {
                            for (let i = 0; i <= options.length - 1; i++) {
                                query += `and ${options[i].column} = $${rep.length + 1} `;
                                rep.push(options[i].value);
                            }
                        }
                        else {
                            if (!options.column)
                                return false;
                            if (!options.value)
                                return false;
                            else {
                                query += ` and ${options.column} = $${rep.length + 1} `;
                                rep.push(options.value);
                            }
                        }
                    }
                    console.log(query);
                    const response = await entityManager.query(query, rep);
                    if (!response.length)
                        return false;
                    if (response[0].ok > 0)
                        return true;
                    return false;
                },
                defaultMessage(args) {
                    return `The given ${args.property} does not exists.`;
                },
            },
        });
    };
}
exports.IsExists = IsExists;
//# sourceMappingURL=isExists.js.map