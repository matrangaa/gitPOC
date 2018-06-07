require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  module.exports = {
    client: 'pg',
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: 5432
    },
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds/development'
    },
    // Use this option to log raw queries to terminal
    // debug: true
  };
}

if (process.env.NODE_ENV === 'test') {
  module.exports = {
    client: 'pg',
    connection: {
      database: process.env.DB_TEST_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: 5432
    },
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations'
    },
    seeds: {
      directory: 'db/seeds/test'
    }
  };
}

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations'
    },
    ssl: true
  };
}