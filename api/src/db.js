require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, NODE_ENV
} = process.env;

// Detecta si estás en producción (Render) o no (local)
const isProduction = NODE_ENV === 'production';

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
    dialect: 'postgres',
    dialectOptions: isProduction
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {}, // ⚠️ sin ssl en local
  }
);

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map(([key, val]) => [key[0].toUpperCase() + key.slice(1), val]);
sequelize.models = Object.fromEntries(capsEntries);

const { Activity, Country } = sequelize.models;

Country.belongsToMany(Activity, { through: 'country_activity' });
Activity.belongsToMany(Country, { through: 'country_activity' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
