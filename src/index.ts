require('ts-node/register')

import express from 'express';
import {QueryInterface, Sequelize} from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
 

const app = express();


export const sequelize = new Sequelize('athleanAppDB', 'root', undefined, {
    host: '127.0.0.1',
    dialect: 'mysql'
});


const umzug = new Umzug({
    migrations: {glob: 'migrations/*.ts'},
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({sequelize}),
    logger: console,
  });

export type Migration = typeof umzug._types.migration;

sequelize.sync()

umzug.up()

umzug.up().then(data => console.log('umzug migrating' ,data))

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error));


app.listen(3000, () => console.log(`server is listening`));



