import { Sequelize } from 'sequelize';
import loanModel from './loan.js';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database_setup/mydatabase.db'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Loan = loanModel(sequelize, Sequelize);

export default db;