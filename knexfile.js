// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config()
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST
    },
    pool: {
      min: 0,
      max: 7,
      afterCreate: function (conn, done) {
        conn.query('SELECT 1;', function (err) {
          if (err) {
            console.log("failed to connect to DB cause of ", err)
            done(err, conn);
          } else {
            console.log("success connect on", process.env.DB_NAME)
            done(err, conn);
          }
        });
      } 
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
