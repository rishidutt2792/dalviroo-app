// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    debug: true,
    // local-dev
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5433,
      user: process.env.DB_USER || 'rishi',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'dalviroo',
      charset: 'utf8'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
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
    debug: true,
    // local-dev
    connection: {
      host: process.env.DB_HOST || 'ec2-23-23-243-111.compute-1.amazonaws.com',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || 'jofsygctumdybc',
      password: process.env.DB_PASS || '8ee019d06157c0e91e1900f4633c4e6a56c133f1ce3e05c95db5382d7d814cba',
      database: process.env.DB_NAME || 'dc4j1qpeauaq50',
      charset: 'utf8'
    },
    useNullAsDefault: true
  }

};
