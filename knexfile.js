  module.exports = {

    development: {
      client: 'pg',
      connection: {
        database: process.env.DATABASE_URL || 'inbox_app',
      }
    },

    production:{
      client: 'pg',
      connection: process.env.DATABASE_URL
    },

    test: {
      client: 'pg',
      connection: {
        database: process.env.DATABASE_URL || 'inbox_app_test',
      }
    }

  };
