import Sequelize from "sequelize";
import type { Migration } from "../src"


export let up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.createTable('UzmzugTest', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  })
}

export let down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.dropTable('UzmzugTest')
}


