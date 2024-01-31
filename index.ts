import db from "./database/db";

const newDatabase = 'db-name';
const newUser = 'user-name';
const newPassword = 'user-password';

async function createDatabaseAndUser() {
  try {
    await db.none(`CREATE DATABASE ${newDatabase}`);
    await db.none(`CREATE USER ${newUser} WITH PASSWORD '${newPassword}'`); // comment this if new user creation is not needed
    await db.none(`ALTER DATABASE ${newDatabase} OWNER TO ${newUser}`);
    await db.none(`GRANT ALL PRIVILEGES ON DATABASE ${newDatabase} TO ${newUser}`);
    await db.none(`GRANT ALL PRIVILEGES ON SCHEMA public TO ${newUser}`);    
    console.log(`DB=${newDatabase}, User=${newUser}, Password=${newPassword}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

createDatabaseAndUser();
