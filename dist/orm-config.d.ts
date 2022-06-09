declare let dbConfiguration: {
    subscribers: string[];
    migrations: string[];
    cli: {
        entitiesDir: string;
        migrationsDir: string;
        subscribersDir: string;
    };
};
export default dbConfiguration;
