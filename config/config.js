require('dotenv').config(); // This line is important!

module.exports = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.DATABASE_URL,
    host: process.env.PGHOST,
    dialect: 'postgres', // or 'postgres', 'sqlite', etc.
  },
  test: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.DATABASE_URL,
    host: process.env.PGHOST,
    dialect: 'postgres', // or whatever dialect you are using
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
