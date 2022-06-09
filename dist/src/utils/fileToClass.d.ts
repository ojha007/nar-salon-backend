declare const readFilesFromFolder: (directory: string, filterFile: string[], allFiles?: string[]) => string[];
declare function importModule(): any;
declare const readAllEntities: (directory: string, allFiles?: string[]) => string[];
export { readFilesFromFolder, importModule, readAllEntities };
