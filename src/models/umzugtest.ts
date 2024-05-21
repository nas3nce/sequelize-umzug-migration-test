const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize('athleanAppDB', 'root', undefined, {
    host: '127.0.0.1',
    dialect: 'mysql'
});

export class UzmzugTest extends Model {
    declare id: number
    declare name: string
    declare password: string
}

UzmzugTest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize
    }
);


