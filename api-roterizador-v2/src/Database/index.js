import Sequelize from 'sequelize';
import Database from '../Config/Database';
import Trip from '../Models/Trip';

const models = [Trip];

const connection = new Sequelize(Database);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
