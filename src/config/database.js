require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
