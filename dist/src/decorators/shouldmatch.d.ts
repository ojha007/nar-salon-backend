import { ValidationOptions } from 'class-validator';
export declare function ShouldMatch(property: string, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
