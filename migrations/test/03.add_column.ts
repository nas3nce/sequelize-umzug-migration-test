import  Sequelize from "sequelize";
import type { Migration } from "../../src"


export let up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.addColumn('UzmzugTest', 'new_column' , {
      type: Sequelize.STRING,
      allowNull: false    
  });
}

export let down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('UzmzugTest', 'new_column')
}


