const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",

    //vahetada
    password: "Eluonilus5",
    database: "wad",

    host: "localhost",
    port: "5432"
});



const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "date" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(500) NOT NULL,
        "picture" VARCHAR(200)  
    );`;

const createUserTblQuery = `
    CREATE TABLE IF NOT EXISTS "usertable" (
	    "id" SERIAL PRIMARY KEY,         
	    "email" VARCHAR(200) NOT NULL,
	    "password" VARCHAR(200) NOT NULL
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exist, create the "posttable" table');
    }
});

execute(createUserTblQuery).then(result => {
    if (result) {
        console.log('If does not exist, create the "usertable" table');
    }
});

module.exports = pool;