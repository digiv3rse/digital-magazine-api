module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "digimoda"),
        username: env("DATABASE_USERNAME", "digiModa"),
        password: env("DATABASE_PASSWORD", "FashionRule"),
        schema: "public",
        ssl: { rejectUnauthorized: false },
      },
      options: {},
    },
  },
});
