import pgPromise from 'pg-promise';
import "dotenv/config";

const pgp = pgPromise();
const db = pgp({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
});

export default db;
