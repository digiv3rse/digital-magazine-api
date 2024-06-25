module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ep-green-breeze-64001596.ap-southeast-1.aws.neon.tech"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "digimoda"),
        username: env("DATABASE_USERNAME", "admin"),
        password: env("DATABASE_PASSWORD", "KwZES2vtn6pf"),
        schema: "public",
        ssl: { rejectUnauthorized: false },
      },
      options: {},
    },
  },
});
