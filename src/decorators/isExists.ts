import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { getManager } from 'typeorm';

interface OptionInterface {
  column: string;
  value: string | number;
}

export function IsExists(input: any, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,

      propertyName: propertyName,

      options: validationOptions,

      constraints: [input],

      validator: {
        async validate(input: any, args: ValidationArguments) {
          const entityManager = getManager();

          const { constraints } = args;

          if (!constraints.length) return false;

          const body = constraints[0];

          if (!body.table) return false;

          if (!body.column) return false;

          const rep: Array<any> = [];
          rep.push(input);
          let query = `select count(*) as ok from ${body.table} where ${body.column}=$1 `;
          if (body.options) {
            const options: Array<OptionInterface> | OptionInterface =
              body.options;
            if (Array.isArray(options)) {
              for (let i = 0; i <= options.length - 1; i++) {
                if (options[i].value === null) {
                  query += `and ${options[i].column} is null`;
                }
                if (options[i].value === 'not null') {
                  query += `and ${options[i].column} is not null`;
                } else {
                  query += `and ${options[i].column} = $${rep.length + 1} `;
                  rep.push(options[i].value);
                }
              }
            } else {
              if (!options.column) return false;
              if (!options.value) return false;
              if (options.value === null) {
                query += `and ${options.column} is null`;
              }
              if (options.value === 'not null') {
                query += `and ${options.column} is not null`;
              } else {
                query += ` and ${options.column} = $${rep.length + 1} `;
                rep.push(options.value);
              }
            }
          }
          const response = await entityManager.query(query, rep);
          if (!response.length) return false;
          if (response[0].ok > 0) return true;
          return false;
        },

        defaultMessage(args: ValidationArguments) {
          return `The given ${args.property} does not exists.`;
        },
      },
    });
  };
}
